import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider      session={pageProps.session}    >
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
