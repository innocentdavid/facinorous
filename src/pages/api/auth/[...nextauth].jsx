import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { getCurrentUser, login } from "../../../common/components/functions";
// import { login } from "../../../context/AuthContext";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/configuration/providers
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials
                const token = await login(username, password)
                console.log(token);
                if (token === "Incorrect password") {
                    return { token: null }
                }
                if (token === "User not found") {
                    return { token: null }
                }
                
                const res = await getCurrentUser(token);
                return { token: res.currentUser }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || 'this_will_be_a_secret',

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    jwt: {
        maxAge: 24 * 60 * 60,
    },
    callbacks: {
        jwt: async ({ token, user, isNewUser }) => {
            // console.log({ token, line: "line30", user, isNewUser });
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            // console.log({session, token});
            session.user = token.user.token;  // Setting token in session
            // console.log({session});
            return session;
        },
    },
    pages: {
        signIn: '/login',
        signup: '/login',
        newUser: '/login'
    },
    // callbacks: {
    //     // async signIn({ user, account, profile, email, credentials }) { return true },
    //     // async redirect({ url, baseUrl }) { return baseUrl },
    //     // async session({ session, token, user }) { return session },
    //     // async jwt({ token, user, account, profile, isNewUser }) { return token }
    // },

    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},

    // Enable debug messages in the console if you are having problems
    debug: false
})
