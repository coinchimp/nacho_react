import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles
import Hero from './components/Hero'
import Specs from './components/Specs'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <Hero />
            <Specs />
            <About />
            <Faq />
            <Footer />
        </div>
    )
}

export default App
