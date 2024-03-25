import React from 'react';
import Section3 from '../assets/BannerImg/Section3.webp';

function SectionThree() {
    return (
        <div className="w-full h-[400px] md:h-[600px] relative" style={{backgroundImage: `url(${Section3})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="w-full md:w-full h-full md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 absolute bg-stone-900 bg-opacity-40 flex flex-col justify-center items-center">
                <div className="text-white text-[40px] md:text-[62px] font-extrabold font-Lato leading-[127px] text-center mb-4">We Need Your Help</div>
                <div className="text-orange-500 text-[24px] md:text-[40px] font-bold font-Lato mb-8 text-center">Let&apos;s stop this disparity and fulfill their happiness</div>
                <p className="w-full md:max-w-[1200px] px-2 md:px-4  text-white text-[12px] md:text-[18px] font-taviraj leading-[16px] lg:leading-[26px] text-center">
                    NCFG is a registered, non-governmental, non-political, non-profit, secular community-based public welfare & voluntary humanitarian organization having no discrimination of caste, color, or creed. We strongly believe that the people of the world are one big family and the world is our home. We value every human being and we feel that every human being has a right to live in peace with good health, dignity, self-reliance, and availability of opportunities to learn & grow.
                </p>
            </div>
        </div>
    )
}

export default SectionThree;

