/* eslint-disable @next/next/no-sync-scripts */
import Document, { NextScript, Head, Main, Html } from "next/document";
export default class CustromDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon/logo.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
