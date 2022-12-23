import Navbar from "../component/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav p-3 bg-slate-800 text-white ">
        <div className="container d-flex container mx-auto">
          <Navbar />
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
