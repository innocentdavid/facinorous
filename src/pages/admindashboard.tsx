/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
// import { useAuth } from "../context/AuthContext";

const HomePage: NextPage = () => {
    const router = useRouter()
    const { data: session, status } = useSession()



    if (status === "unauthenticated") {
        router.push('/login')
        return <></>;
    } else
        if (status === "loading") {
            return <></>;
        } else {
            const { user } = session;
            if (!user.admin) {
                router.push('/')
                return <></>;
            }            
            
            return (
                <div className="flex items-center gap-10 p-10">
                    <div>Hello <span className="capitalize">{session.user.username},</span> Welcome to the admin dashboard!</div>
                    <div className="cursor-pointer bg-emerald-500 text-white py-1 px-3" onClick={() => signOut()}>SignOut</div>
                </div>
            );
        }
};

export default HomePage;
