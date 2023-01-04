/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { getCurrentUser } from "./functions";
// import { useAuth } from "../context/AuthContext";

const HomePage: NextPage = () => {
    const router = useRouter()
    const { data: session, status } = useSession();
    const { user, setUser, logout } = useAuth();

    // if (status === "unauthenticated") {
    //     router.push('/login')
    //     return <></>;
    // }    

    if (status === "loading") {
        return <></>;
    }
    if (status === "authenticated") {
        // console.log(session);

        // console.log(user);
        if (!session?.user?.admin) {
            if (session?.user?.unid) {
                alert("You're not allowed to be here!")
                router.push('/')
                return;
            }
            router.push('/login')
            return <></>;
        }

        if (!user.admin) {
            router.push('/')
            return <></>;
        }

        return (
            <div className="flex items-center gap-10 p-10">
                <div>Hello <span className="capitalize">{session?.user?.username},</span> Welcome to the admin dashboard!</div>
                <div className="cursor-pointer bg-emerald-500 text-white py-1 px-3" onClick={() => signOut()}>SignOut</div>
            </div>
        );
    }
    if (status === "unauthenticated") {
        router.push('/')
    }
};

export default HomePage;
