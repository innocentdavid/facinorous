import { UserType } from "../context/AuthContext";

// const API_URL = "https://cors-anywhere.herokuapp.com/https://test.bss.nz/api";
const API_URL = "https://test.bss.nz/api";

export async function jsonResRequest<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => {
            return data as TResponse
        });
}

export async function textResRequest<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then((response) => response.text())
        .then((data) => {
            console.log({ data });

            return data as TResponse
        });
}

export const login = async (username: string, password: string) => {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    try {
        const token = await textResRequest<string>(
            `${API_URL}/user/password/check`,
            {
                method: "POST",
                headers,
                body: JSON.stringify({ username, password }),
            }
        );
        return token;
    } catch (error) {
        throw new Error("Fetching users failed");
    }
};

export const getCurrentUser = async (userToken: string) => {
    const headers = { Authorization: userToken };
    try {
        const currentUser = await jsonResRequest<UserType>(`${API_URL}/user/self`, {
            headers,
        });
        return { status: 200, currentUser };
    } catch (error) {
        return { status: 500, message: "Fetching users failed", error };
    }
};

export const getUser = async (userToken: string) => {
    try {
        const user = await jsonResRequest<UserType>(
            `${API_URL}/user/token/${userToken}`
        );
        return {status: 200, user};
    } catch (error) {
        return { status: 500, message: "Fetching users failed", error };
    }
};