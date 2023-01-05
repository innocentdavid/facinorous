/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomeAlert from "../common/components/CustomeAlert.jsx";
import { useAuth } from "../context/AuthContext";
// import { getCurrentUser } from "./functions";
// import { useAuth } from "../context/AuthContext";

const HomePage: NextPage = () => {
    const router = useRouter()
    const { data: session, status } = useSession();
    const { user, logout } = useAuth();
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            if (!(session?.user?.admin) && session?.user?.unid) {
                // alert();
                setError("You're not allowed to be here!");
                // router.push('/')
            } else {
                alert("Please login to continue");
                router.push('/login')
            }
        }
    }, [router, session, status])



    if (status === "loading") {
        return <></>;
    }

    if (status === "authenticated" && session?.user?.admin) {
        return (
            <div className="flex items-center gap-10 p-10">
                <div>Hello <span className="capitalize">{session?.user?.username},</span> Welcome to the admin dashboard!</div>
                <div className="cursor-pointer bg-emerald-500 text-white py-1 px-3" onClick={() => signOut()}>SignOut</div>
            </div>
        );
    } else {
        return (<>
            <CustomeAlert isOpen={error !== ""} onClose={() => { setError(''); router.push('/') }} message={error} />
        </>)
    }

    // if (status === "unauthenticated") {
    //     router.push('/login')
    //     return (<></>)
    // }
};

export default HomePage;