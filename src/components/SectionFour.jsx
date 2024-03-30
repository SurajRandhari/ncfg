import React, { useState, useEffect } from 'react';

function SectionFour() {
    const [colorIndex, setColorIndex] = useState(0);
    const [bgColorIndex, setBgColorIndex] = useState(0);
    const colors = ["text-red-600", "text-black-500", "text-purple-600", "text-blue-800"]; // Example Tailwind CSS color classes
    const bgColors = ["bg-red-600", "bg-black", "bg-purple-900", "bg-blue-800"]; // Example Tailwind CSS background color classes
    const colorChangeInterval = 2000; // Change color every 2 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
            setBgColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
        }, colorChangeInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`w-full h-[169px] relative flex flex-col justify-center items-center ${bgColors[bgColorIndex]}`}>
            <div className={`text-2xl md:text-[40px] font-bold font-taviraj text-center text-white mb-2 md:mb-4 ${colors[colorIndex]}`}>
                How you can help Us
            </div>
            <div className={`text-xl font-bold font-taviraj text-center text-white mb-2 md:mb-4 ${colors[colorIndex]}`}>
                Just Call at +91 <span className='font-bold underline'>9938447929</span> to make a Donation
            </div>
            <div className={`text-2xl md:text-[40px] font-bold font-taviraj text-center text-white ${colors[colorIndex]}`}>
                Or ⇓
            </div>
        </div>
    );
}

export default SectionFour;


// ------------------------------------
// import React, { useState, useEffect } from 'react';

// function SectionFour() {
//     const [colorIndex, setColorIndex] = useState(0);
//     const colors = ["text-red-600", "text-black-500","text-purple-600", "text-blue-800"]; // Example Tailwind CSS color classes
//     const colorChangeInterval = 2000; // Change color every 3 seconds

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//         }, colorChangeInterval);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="w-full h-[169px] bg-[#F7FAFC] relative flex flex-col justify-center items-center">
//             <div className={`text-[40px] font-bold font-taviraj text-center ${colors[colorIndex]}`}>How you can help Us</div>
//             <div className={`text-xl font-bold font-taviraj text-center ${colors[colorIndex]}`}>Just Call at +91 <span className='font-bold underline'>9938447929</span> to make a Donation</div>
//             <div className={`text-[40px] font-bold font-taviraj text-center ${colors[colorIndex]}`}>Or</div>
//         </div>
//     );
// }

// export default SectionFour;
