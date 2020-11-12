import React from "react";
import "../styles/globals.scss";
import "../styles/baseClass.scss";
import "../styles/keyFrame.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
