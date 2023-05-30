import Navbar from '../layouts/Navbar';
import '../styles/globals.css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Footer from '../layouts/Footer';
import AnimCursor from '../components/animcursor';

export default function App({ Component, pageProps }) {
   useEffect(() => {
     Aos.init({
      duration: 1500,
     });
   }, []);

  return (<>
      <AnimCursor />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
    )
}
