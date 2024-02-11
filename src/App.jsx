import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <>
        <Header />
        <Navigation />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App