import MainNav from '../components/MainNav';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<>
    <div className="bg-fixed bg-center bg-cover custom-img h-screen">
      <MainNav/>
      <Component {...pageProps} />
      </div>
  </>);

}

export default MyApp
