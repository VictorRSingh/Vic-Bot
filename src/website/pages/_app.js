import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <MainNav />
        </div>
        <div className="flex-1 h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

//                   <Component {...pageProps} />
