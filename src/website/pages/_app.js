import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-screen h-screen bg-black/70 bg-cover bg-fixed">
        <MainNav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
