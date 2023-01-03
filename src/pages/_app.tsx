import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AppCtx, sampleAppContext } from "../context/AuthContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [searcComponent, setSeachComponent] = useState<boolean>(false);

  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
    <AppCtx.Provider value={sampleAppContext} >
        <Component {...pageProps} />
    </AppCtx.Provider>
    </SessionProvider>
  );
}

export default MyApp;
