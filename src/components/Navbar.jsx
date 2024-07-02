import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import {
    FaDiscord,
    FaTelegram,
    FaXTwitter,
    FaRegNewspaper,
} from 'react-icons/fa6'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 bg-[#231f20] flex text-white items-center justify-between px-12 py-6 z-10">
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
                        <a
                            href="https://discord.gg/EB8VvA9DVf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="https://t.me/nachothecat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegram className="h-6 w-6" />
                        </a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="https://x.com/NachoWyborski"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter className="h-6 w-6" />
                        </a>
                    </li>
                </ul>
            </div>

            <a
                className="px-4 py-3 hidden rounded-full border-2 border-white md:flex items-center"
                href="/Nacho_the_kat_Whitepaper_240605.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Whitepaper
            </a>

            {/* Mobile View */}
            <div className="md:hidden">
                <IoMenu className="h-8 w-8" onClick={handleMenuOpen} />
            </div>

            <div
                className={`${
                    isMenuOpen === true ? '' : 'hidden'
                } absolute w-full top-20 left-0 right-0 text-center bg-[#231f20] py-8 md:hidden`}
            >
                <ul className="space-y-10 pt-8">
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="https://discord.gg/EB8VvA9DVf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaDiscord className="h-6 w-6 mr-2" />
                            <p>Discord</p>
                        </a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="https://t.me/nachothecat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaTelegram className="h-6 w-6 mr-2" />
                            <p>Telegram</p>
                        </a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="https://x.com/NachoWyborski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaXTwitter className="h-6 w-6 mr-2" />
                            <p>Twitter</p>
                        </a>
                    </li>
                    <li className="transition-all ease-in-out hover:text-white">
                        <a
                            href="/Nacho_the_kat_Whitepaper_240605.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <FaRegNewspaper className="h-6 w-6 mr-2" />
                            <p>Whitepaper</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
