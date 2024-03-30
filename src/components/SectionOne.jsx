import React from 'react';
import { motion } from 'framer-motion';
import Action1 from '../assets/Action/Action1.webp';
import Action2 from '../assets/Action/Action2.webp';
import Action3 from '../assets/Action/Action3.webp';
import Action4 from '../assets/Action/Action4.webp';

function SectionOne() {
    const mainBackgroundStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the alpha value (0.7) to change opacity
        backgroundImage: `url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="flex flex-col items-center justify-center mb-4" style={mainBackgroundStyle}>
            {/* Heading */}
            <div className="text-center mt-8 ">
                <div className="text-orange-700 text-2xl md:text-2xl font-extrabold font-taviraj underline">TAKE ACTION</div>
            </div>

            {/* Image divs */}
            <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-8 mt-8 mb-5 w-full max-w-screen-lg">
                {/* Image 1 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg flex items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.15 }}
                >
                    <img src={Action4} alt="" className="w-full h-auto" />
                </motion.div>

                {/* Image 2 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.15 }}
                >
                    <img src={Action1} alt="" className="w-full h-auto" />
                </motion.div>

                {/* Image 3 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg flex items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.15 }}
                >
                    <img src={Action2} alt="" className="w-full h-auto" />
                </motion.div>

                {/* Image 4 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.15 }}
                >
                    <img src={Action3} alt="" className="w-full h-auto" />
                </motion.div>
            </div>
        </div>
    );
}

export default SectionOne;
