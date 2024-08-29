import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from './components/Head'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Delivery from './components/Delivery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"
import Kavsar from './components/Kavsar';
import Calculator from './components/Calculator';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Head />
      <Kavsar />
      <Services />
      <Calculator />
      <Delivery />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App