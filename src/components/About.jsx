import React from 'react';
import Aktandi from '../assets/MyImg/Aktandi.webp';

function About() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full relative bg-blue-950 flex items-start justify-center flex-wrap">
                <div className="w-full text-center mt-2">
                    <div className="text-orange-700 text-[26px] font-extrabold font-taviraj underline">About Us</div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-0 ">
                    <div className=" overflow-hidden " style={{borderRadius:'50%', border:'5px solid white'}}>
                        <img className="w-[250px] h-[247px] " alt='' src={Aktandi}/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start py-4 px-4 mt-3 lg:mt-0">
                    <div className="text-gray-50 text-3xl lg:text:4xl font-taviraj font-medium mb-2">Rev. A.K. Tandi</div>
                    <div className="text-gray-50 text-xl lg:text:xl font-taviraj font-medium ">President of -</div>
                    <div className="text-gray-50 text-2xl lg:text:2xl font-taviraj font-medium mb-5 ">National Co-operative For Gospel</div>
                    <div className='h-4'></div>
                    <div className="text-gray-50 text-md lg:text:2xl font-taviraj font-medium ">
                        <p>At-Litiguda, P.O-Bharuamunda, Via-Sinapali, Pin-766108</p>
                        <p>Dist-Nuapada (Orissa) INDIA</p>
                        <p>Regd. No. Npd-37 Of 1994-95</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
