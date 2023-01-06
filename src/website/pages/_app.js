import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-fixed bg-center bg-cover h-screen bg-neutral-800 z-[2]">
      <MainNav />
      <br/><br/><br/>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
