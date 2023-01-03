import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
// import { getUser } from '../lib/api'
import { createContext, useEffect, useState } from 'react'

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
    meta: {},
    authReady: false
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

            const fetch = async () => {
                const cuser = await getUser(dataN.tel)

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