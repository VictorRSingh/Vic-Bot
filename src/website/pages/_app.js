import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="custom-img">
        <MainNav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
