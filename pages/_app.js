import "../styles/globals.css";
import "../styles/fonts.css";
import SEO from "../components/Seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
