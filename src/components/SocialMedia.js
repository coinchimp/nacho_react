import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const SocialMedia = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#231F20] text-white"
            id="social-media"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-xl md:text-2xl">
                    <span className="font-bold text-3xl md:text-4xl mr-3">
                        Stay Updated
                    </span>
                    Follow us on Twitter for the latest updates and tutorials.
                </p>

                <div className="mt-6 flex flex-col items-center">
                    <div className="w-full md:w-auto">
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'NachoWyborski'
                            }}
                            options={{
                                height: '500',
                                width: '500',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
