import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles
import Hero from './components/Hero'
import Specs from './components/Specs'
import About from './components/About'
import Faq from './components/Faq'
import Tutorials from './components/Tutorials'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="dark:bg-[#231f20] dark:text-white">
            <Hero />
            <Specs />
            <About />
            <Faq />
            <Tutorials />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default App
