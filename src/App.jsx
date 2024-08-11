import Head from './components/Head'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Buyurtma from './components/Buyurtma'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Scroll from './components/Scroll'
const App = () => {
  return (
    <div>
      <Navbar />
      <Head />
      <Services />
      <Buyurtma page="#3" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App