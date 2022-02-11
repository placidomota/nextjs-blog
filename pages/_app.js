import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navegacao from '../components/Navegacao';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);  
  
  return (
    <>
      <Navegacao />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  
  
  }