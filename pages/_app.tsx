import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "react-alice-carousel/lib/alice-carousel.css";
import "./global.css";
import store from "../redux/store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>law-projects</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
