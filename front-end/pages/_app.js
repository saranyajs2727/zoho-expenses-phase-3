import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Head from "next/head";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  // const  [loading,setLoading] = useState(false)
  // Router.events.on('routeChangeStart',(url)=>{
  //   console.log('Router is changing...')
  //   NProgress.start()
  //   setLoading(true)
  // })
  // Router.events.on('routeChangeComplete',(url)=>{
  //   console.log('Router is changing complete...')
  //   NProgress.done()
  //   setLoading(false)
  // })

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.1"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
