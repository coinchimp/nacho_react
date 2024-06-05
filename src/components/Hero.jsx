import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="bg-custom-bg bg-cover bg-center bg-no-repeat relative h-screen">
            <Navbar />
            <div
                id="hero"
                className="p-12 text-center flex flex-col justify-center items-center bg-[#231f20] bg-opacity-70 h-[70%] md:w-[40%] mx-auto text-white absolute left-0 right-0 top-[55%] translate-y-[-50%] rounded-3xl"
            >
                <img
                    src="kaspa_logo_nacho_512.png"
                    alt="Nacho"
                    className="h-48 w-48"
                />

                <p className="font-bold text-3xl my-4">Nacho the 𐤊at</p>
                <p className="font-bold text-2xl">
                    Inspired by Shai Wyborski's pet cat Nacho
                </p>
            </div>
        </div>
    )
}

export default Hero
