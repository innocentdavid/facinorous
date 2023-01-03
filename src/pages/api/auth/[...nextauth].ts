import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/configuration/providers
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { tel, password } = credentials
                // perform login logic, query db for user
                const user = await getUser(tel);
                // console.log(user)
                if (!user) {
                    throw new Error("You haven't registered yet!")
                } else {
                    if (!password) {
                        throw new Error("You haven't entered your password yet!")
                    }
                    return { token: await signInUser(password, user) }
                }
            }
        })
    ],
    secret: process.env.SECRET || 'this_will_be_a_secret',

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },

    // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        maxAge: 24 * 60 * 60,
    },
    pages: {
        signIn: '/login',
        // signUp: '/login',
        newUser: '/login'
        // signIn: '/auth/signin',  // Displays signin buttons
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) { return true },
        // async redirect({ url, baseUrl }) { return baseUrl },
        // async session({ session, token, user }) { return session },
        // async jwt({ token, user, account, profile, isNewUser }) { return token }
    },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: false,
})
