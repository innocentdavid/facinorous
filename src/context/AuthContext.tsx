import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const API_URL = '/api'

type UserType = {
    unid: string
    username: string
    passhash: string
    token: string
    admin: boolean
    meta: {}
}
type authContextType = {
    unid: string
    username: string
    passhash: string
    token: string
    admin: boolean
    meta: {}
} | null;

type ContextState = { user: authContextType };

const AuthContext = createContext<ContextState | undefined>(undefined);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const router = useRouter()
    const [user, setUser] = useState<authContextType>();
    const { status, data } = useSession<any>({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
            // route to login page
            console.log("The user is not authenticated")
        },
    });

    const login = () => {
    };

    const logout = () => {
        setUser(undefined);
    };

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/login')
        }

        if (data && data?.user?.token) {
            const token = data?.user?.userToken
            const fetch = async () => {
                const currentUser = await getCurrentUser(token)
                currentUser && setUser(currentUser)
            }
            fetch()
        }
    }, [status, data, router])

    const value = {
        user,
        login,
        logout,
    };
    return (
        <>
            <AuthContext.Provider value={value} >
                {children}
            </AuthContext.Provider>
        </>
    );
}



function request<TResponse>(
    url: string,
    config: RequestInit = {}
): Promise<TResponse> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse);
}

export const login = async (username: string, password: string) => {
    const headers: Record<string, string> = { "Content-Type": "application/json" }
    try {
        const token = await request<authContextType>(`${API_URL}/user/password/check`, {
            method: "POST",
            headers,
            body: JSON.stringify({ username, password })
        })
        return token
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

export const getAllUsers = async () => {
    try {
        const cuser = await request<authContextType>(`${API_URL}/user`)
        return cuser
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

export const getCurrentUser = async (userToken: string) => {
    const headers = { "Authorization": userToken }
    try {
        const currentUser = await request<authContextType>(`${API_URL}/user/self`, { headers })
        return currentUser
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

export const getUser = async (userToken: string) => {
    try {
        const user = await request<authContextType>(`${API_URL}/user/token/${userToken}`)
        return user
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}