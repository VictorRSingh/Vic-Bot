import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className=" p-4">
          <MainNav />
        </div>
        <div className="flex flex-grow p-4 justify-center">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

//                   <Component {...pageProps} />
