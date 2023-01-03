import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
// import { getUser } from '../lib/api'
import { createContext, useEffect, useState } from 'react'

const API_URL = '/api'

type User = {
    unid: string
    username: string
    passhash: string
    token: string
    admin: boolean
    meta: {}
}

export interface AppSettingsType {
    name: string;
    appEmoji: string;
    siteTitle: string;
    siteDescription: string;
    loginText: string;
    captchaEnabled: boolean;
    captchaSiteID?: string;
    captchaSecretKey?: string;
    registrationEnabled: boolean;
    privateModeEnabled: boolean;
    logo: string
    defaultProfilePicture: string
}

export const AppCtx = createContext<AppSettingsType | null>(null);

export const sampleAppContext: AppSettingsType = {
    name: "facinorous",
    appEmoji: "",
    siteTitle: "",
    siteDescription: "",
    loginText: "",
    captchaEnabled: false,
    captchaSiteID: "",
    captchaSecretKey: "",
    registrationEnabled: true,
    privateModeEnabled: false,
    logo: "/logo.png",
    defaultProfilePicture: "/defaultProfilePicture.png",
}; // get the data from backend.


// const AuthContext = createContext({
//     unid: String,
//     username: String,
//     passhash: String,
//     token: String,
//     admin: Boolean,
//     meta: {}
// })

// const AuthContext = createContext({
//     unid: '',
//     username: '',
//     passhash: '',
//     token: '',
//     admin: false,
//     meta: {}
// })

function request<TResponse>(
    url: string,
    // `RequestInit` is a type for configuring 
    // a `fetch` request. By default, an empty object.
    config: RequestInit = {}

    // This function is async, it will return a Promise:
): Promise<TResponse> {

    // Inside, we call the `fetch` function with 
    // a URL and config given:
    return fetch(url, config)
        // When got a response call a `json` method on it
        .then((response) => response.json())
        // and return the result data.
        .then((data) => data as TResponse);

    // We also can use some post-response
    // data-transformations in the last `then` clause.
}

export const login = async (username: string, password: string) => {
    const headers: Record<string, string> = { "Content-Type": "application/json" }
    try {
        const token = await request<User>(`${API_URL}/user/password/check`, {
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
        const cuser = await request<User>(`${API_URL}/user`)
        return cuser
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

export const getCurrentUser = async (userToken: string) => {
    const headers = { "Authorization": userToken }
    try {
        const currentUser = await request<User>(`${API_URL}/user/self`, { headers })
        return currentUser
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

export const getUser = async (userToken: string) => {
    try {
        const user = await request<User>(`${API_URL}/user/token/${userToken}`)
        return user
    } catch (error) {
        throw new Error("Fetching users failed")
    }
}

const AuthContext = () => {
    const router = useRouter()
    const [user, setUser] = useState<User>()
    const { status, data } = useSession({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
            console.log("The user is not authenticated")
        },
    });

    useEffect(() => {
        // if (status === 'unauthenticated') {
        //     router.replace('/login')
        // }

        if (data && data?.user?.token) {
            const token = data?.user?.userToken
            const fetch = async () => {
                const currentUser = await getCurrentUser(token)
                currentUser && setUser(currentUser)
            }

            fetch()
        }
    }, [status, data, router])
}

export default AuthContext