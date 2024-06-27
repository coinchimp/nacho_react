import React from 'react';

const MusicVideos = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#231F20] text-white"
            id="music-videos"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-xl md:text-2xl">
                    <span className="font-bold text-3xl md:text-4xl mr-3">
                        Nacho the Cat Musical Videos
                    </span>
                    Enjoy some fun and entertaining musical videos featuring Nacho the Cat.
                </p>

                <div className="mt-6">
                    <div className="w-full" style={{ paddingBottom: '56.25%', position: 'relative' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/videoseries?list=PLF7xbYwKsS0CCfCq8BhAJ8FB6aSGSXqrO"
                            title="Nacho the Cat Musical Videos"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicVideos;
