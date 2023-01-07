import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="custom-img bg-fixed bg-center bg-cover">
        <MainNav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
