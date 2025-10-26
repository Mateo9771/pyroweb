import { useEffect } from 'react'
import Header from './Componets/Header/Header'
import Hero from './Componets/Hero/Hero'
import Services from './Componets/Services/Services'
import './App.css'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import Portfolio from './Componets/Portfolio/Portfolio'
import Whatsapp from './Componets/Buttons/Whatsapp/Whatsapp'
import AboutUs from './Componets/AboutUs/AboutUs'
import FAQ from './Componets/FAQ/FAQ'

function App() {

   useEffect(() => {
    document.dispatchEvent(new Event('render-event'));
  }, []);

  return (
    <>
      <div className="App">
      <Header />
      <Hero id="home"/>
      <AboutUs id="about"/>
      <Services id="services"/>
      <FAQ id="faq"/>
      <Portfolio id="portfolio"/>
      <Contact id="contact"/>
      <Whatsapp/>
      <Footer/>
      </div>
    </>
  )
}

export default App
