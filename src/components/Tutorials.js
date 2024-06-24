import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Tutorials = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#ffcc00]"
            id="tutorials"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-3xl">
                    <span className="font-bold text-4xl mr-3">
                        Learn with Nacho
                    </span>
                    Explore our collection of YouTube tutorials focused on Nacho the cat and the KRC20 standard in Kasplex. These tutorials offer a deep dive into the world of Kasplex, showcasing the possibilities and innovations within the Kaspa network.
                </p>
                <p className="text-3xl mt-4">
                    From understanding the basics of KRC20 tokens to advanced topics, our tutorials cater to enthusiasts and developers alike.
                </p>
                <p className="text-3xl mt-4">
                    Stay updated with the latest tutorials by subscribing to our YouTube channel.
                </p>                
                <div className="mt-6 hidden md:flex md:justify-center space-x-4">
                    <a
                        className="px-4 py-3 rounded-full border-2 border-black dark:border-white flex items-center"
                        href="https://youtube.com/channel/UCxxxxxx" // Replace with your YouTube channel link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="w-6 h-6 mr-1" />
                        Subscribe on YouTube
                    </a>
                </div>
            </div>

            <div className="md:hidden my-4 space-y-4 flex flex-col items-center">
                <a
                    className="px-4 py-3 rounded-full border-2 dark:border-white border-black flex items-center"
                    href="https://youtube.com/channel/UCxxxxxx" // Replace with your YouTube channel link
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="w-6 h-6 mr-1" />
                    Subscribe on YouTube
                </a>
            </div>
        </div>
    )
}

export default Tutorials;
