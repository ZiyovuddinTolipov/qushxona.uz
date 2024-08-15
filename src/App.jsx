import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from './components/Head'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Delivery from './components/Delivery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"
// import Scroll from './components/Scroll'
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Head />
      <Services />
      <Delivery page="#3" />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App