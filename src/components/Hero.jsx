import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="bg-custom-bg bg-cover bg-center bg-no-repeat h-screen">
            <Navbar />
            <div
                id="hero"
                className="p-12 text-center flex flex-col justify-center items-center"
            >
                <h1 className="text-7xl hero-text">
                    Nacho The <span className="text-[#65c0b1]"> 𐤊at</span>
                </h1>
                <p className="py-4">
                    The perfect example of fairness and the true spirit of Kaspa
                    and KRC20!
                </p>
                <p className="">Inspired by Shai Wyborski's pet cat Nacho</p>
            </div>
        </div>
    )
}

export default Hero
