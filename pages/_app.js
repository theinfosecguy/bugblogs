import "../styles/globals.css";
import "../styles/fonts.css";
import SEO from "../components/Seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id="b7aaf9b4-fa87-48b9-be75-78d18aa0a35d"
          src="https://analytics.vulnerable.live/umami.js"
          data-domains="www.bugblogs.tech"
        ></script>
      </Head>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
