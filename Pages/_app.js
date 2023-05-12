// import Page from "@/app/page";
import { CacheProvider } from "@emotion/react";

// import createEmotionCache from "./config/createEmotionCache";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps }) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    // <CacheProvider value={emotionCache}>
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
    // </CacheProvider>
  );
}
