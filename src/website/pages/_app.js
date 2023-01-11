import MainNav from "../components/MainNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div class="flex flex-col h-screen">
        <div class="py-4">
          <MainNav />
        </div>
        <div class="flex flex-grow justify-center">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
