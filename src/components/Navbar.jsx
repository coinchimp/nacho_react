import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 bg-[#231f20] flex text-white items-center justify-between px-12 py-6">
            <a href="/" className="flex items-center">
                <img
                    src="kaspa_logo_nacho.png"
                    alt="Logo"
                    className="h-8 w-8"
                />
                <p className="ml-4">Nacho the 𐤊at</p>
            </a>

            {/* Desktop View */}
            <div className="hidden md:block">
                <ul className="flex space-x-8 text-gray-300">
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">About</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">Roadmap</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">F.A.Q</a>
                    </li>
                </ul>
            </div>

            <button className="px-4 py-3 hidden rounded-full border-2 border-white md:flex items-center">
                Whitepaper
            </button>

            {/* Mobile View */}
            <div className="md:hidden">
                <IoMenu className="h-8 w-8" onClick={handleMenuOpen} />
            </div>

            <div
                className={`${
                    isMenuOpen === true ? '' : 'hidden'
                } absolute w-full top-20 left-0 right-0 text-center bg-[#231f20] py-8`}
            >
                <ul className="space-y-10 pt-8">
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">About</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">Roadmap</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">F.A.Q</a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a href="/">Whitepaper</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
