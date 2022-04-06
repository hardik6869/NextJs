import Navbar from "../component/Navbar.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
