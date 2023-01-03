import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
  <div id="generalLoading" className="hidden fixed top-0 left-0 w-full h-screen place-items-center z-[999999999] text-white" style={{ background: 'rgba(0,0,0,.8)' }}>
      <div className="text-2xl md:text-3xl lg:text-5xl flex items-center gap-3">
        <img src="/procesos-procesos-sellcom.gif" alt="" width="20px" height="20px" className="animate-spin" />
        <span>Loading<span className="animate-ping">...</span></span>
      </div>
    </div>
    {/* <SessionProvider session={pageProps.session}> */}
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
    {/* </SessionProvider> */}
  </>);
}

export default MyApp;
