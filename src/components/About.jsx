import React from 'react'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'

const About = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-gradient-to-b from-white to-[#65c0b1]"
            id="about"
        >
            <p className="hero-text text-center text-5xl">
                What is <span className="text-[#65c0b1]">Nacho?</span>
            </p>

            <div className="flex pt-12 flex-col md:flex-row">
                <div className="flex justify-center">
                    <img
                        src="hero-cat-mobile.png"
                        alt="Nacho"
                        className="w-[60%] md:w-[40%]"
                    />
                </div>
                <div className="mt-8 md:mt-0 md:max-w-[50%]">
                    <p>
                        Nacho is the name of the cat owned by Shai Wyborski, a
                        member of the core team behind Kaspa. This project pays
                        homage to Shai, and his cat Nacho and was created to
                        champion the amazing work of the Kasplex team in
                        creating the KRC20 token standard.
                    </p>
                    <p className="mt-4">
                        Nacho is more than just a memecoin, it is proof of what
                        is capable on the Kaspa network. With the Kasplex
                        protocol coming soon, it’s time for Nacho to set the
                        standard for tokens on Kaspa.
                    </p>
                    <div className="mt-4 hidden md:flex space-x-4">
                        <a
                            className="px-4 py-3 rounded-full border-2 border-black flex items-center"
                            href="https://discord.gg/EB8VvA9DVf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="w-6 h-6 mr-1" />
                            Join Discord
                        </a>
                        <a
                            className="px-4 py-3 rounded-full border-2 border-black flex items-center"
                            href="https://x.com/NachoWyborski"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter className="w-6 h-6 mr-1" />
                            Follow Twitter
                        </a>
                    </div>
                </div>
            </div>

            <div className="md:hidden my-4 space-y-4 flex flex-col items-center">
                <a
                    className="px-4 py-3 rounded-full border-2 border-black flex items-center"
                    href="https://discord.gg/EB8VvA9DVf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDiscord className="w-6 h-6 mr-1" />
                    Join Discord
                </a>
                <a
                    className="px-4 py-3 rounded-full border-2 border-black flex items-center"
                    href="https://x.com/NachoWyborski"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter className="w-6 h-6 mr-1" />
                    Follow Twitter
                </a>
            </div>
        </div>
    )
}

export default About
