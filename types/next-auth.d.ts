import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
        interface Session {
        user: {
            /** The user's postal address. */
            address: string
        } & DefaultSession["user"]
    }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        token: string
    }
}


// import NextAuth, { DefaultSession } from "next-auth"

// declare module "next-auth" {
//     /**
//      * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//      */
//     interface Session {
//         user: {
//             /** The user's postal address. */
//             address: string
//         } & DefaultSession["user"]
//     }
// }