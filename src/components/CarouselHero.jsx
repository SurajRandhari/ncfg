import { Carousel } from 'flowbite-react';
import Banner1 from '../assets/BannerImg/Banner1.webp'
import Banner2 from '../assets/BannerImg/Banner2.webp'
import Banner3 from '../assets/BannerImg/Banner3.webp'
import Banner4 from '../assets/BannerImg/Banner4.webp'
import Banner5 from '../assets/BannerImg/Banner5.webp'
import Banner6 from '../assets/BannerImg/Banner6.webp'

function CarouselHero() {
    return (
        <div className="h-[250px] md:h-[550px] ">
            <Carousel>
                <div className="relative ">
                    <img src={Banner1} alt="..." className="w-full " />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-800 opacity-40"></div>
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2  font-poppins font-bold text-white  text-3xl lg:text-7xl  text-center p-4">
                    Every child you encounter is a divine appointment
                    </div>
                </div>
                <div className="relative">
                    <img src={Banner2} alt="..." className="w-full" />
                    <div className="absolute top-1/2 left-0 right-0 font-poppins transform -translate-y-1/2  text-white  text-8xl  text-center p-4">
                    </div>
                </div>
                <div className="relative">
                    <img src={Banner3} alt="..." className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-800 opacity-30"></div>
                    <div className="absolute top-1/2 left-9 right-50 font-taviraj transform -translate-y-1/2 font-medium text-white  text-md lg:text-7xl  text-center p-4">
                    Pure and undefiled religion before God and the Father is this: to visit orphans and widows in their trouble, and to keep oneself unspotted from the world. - James 1:27 
                    </div>
                </div>
                <div className="relative">
                    <img src={Banner4} alt="..." className="w-full" />                   
                    <div className="absolute top-1/2 left-0 right-0 font-poppins transform -translate-y-1/2  text-white  text-8xl  text-center p-4">

                    </div>
                </div>
                <div className="relative">
                    <img src={Banner5} alt="..." className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600 opacity-30"></div>
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 font-taviraj font-medium  text-white text-xl lg:text-6xl  text-center p-4" style={{ lineHeight: '1.5' }}>
                    Behold, children are a heritage from the Lord, the fruit of the womb a reward. - Psalm 127:3 
                    
                    </div>
                </div>
                <div className="relative">
                    <img src={Banner6} alt="..." className="w-full" />
                    
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselHero