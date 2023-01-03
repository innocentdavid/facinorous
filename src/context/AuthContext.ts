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


export const AuthContext = createContext({
    unid: String,
    username: String,
    passhash: String,
    token: String,
    admin: Boolean,
    meta: {}
})

export const AuthContextProvider = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const { status, data } = useSession({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
            console.log("The user is not authenticated")
        },
    });
    const [loading, setLoading] = useState(true)

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


    useEffect(() => {
        if (status === 'unauthenticated') {
            setLoading(false)
            router.replace('/login')
        }

        if (data && data?.user?.token) {
            const dataN = data?.user?.token
            // var u = { ...dataN, myTicket: 0, balance: dataN.tbalance + dataN.ri + dataN.vrs }
            // if (dataN.myTicket) {
            //   u = { ...dataN, myTicket: dataN.myTicket, balance: dataN.tbalance + dataN.ri + dataN.roi + dataN.vrs }
            // }
            // dataN?.tel && setUser(u)

            

            const getAllUsers = async () => {
                try {
                    const cuser = await request<User>(`${API_URL}/user`)
                    return cuser
                } catch (error) {
                    throw new Error("Fetching users failed")
                }
            }

            const getUser = async (userToken: string) => {
                try {
                    const user = await request<User>(`${API_URL}/user/token/${userToken}`)
                    return user
                } catch (error) {
                    throw new Error("Fetching users failed")
                }
            }

            const fetch = async () => {
                const cuser = await request<User>(`${API_URL}`, {

                });

                if (cuser) {
                    // var u = { ...cuser, balance: cuser.tbalance + cuser?.ri + cuser?.roi + cuser?.vrs }
                    // if (!cuser.myTicket) {
                    //   u = { ...cuser, myTicket: 0, balance: cuser.tbalance + cuser.ri + cuser.roi + cuser?.vrs }
                    // }
                    // // console.log(u)
                    setUser(cuser)
                }
            }
            fetch()
            setLoading(false)
        }
        setLoading(false)
    }, [status, data, router])

    return (
        <AuthContext.Provider value= {{ user, setUser }
}>