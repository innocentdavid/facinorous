import type { AppProps } from "next/app";
import { useState } from "react";
import { CommonContext } from "../context/CommonContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [searcComponent, setSeachComponent] = useState<boolean>(false);
  return (
    <CommonContext.Provider value={{ searcComponent, setSeachComponent }}>
      <Component {...pageProps} />
    </CommonContext.Provider>
  );
}

export default MyApp;
