import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

import Frame from '../../assets/Servicces/Frame 24.webp';
import youth1 from '../../assets/Servicess/Youth/youth1.webp';
import youth2 from '../../assets/Servicess/Youth/youth2.webp';
import youth3 from '../../assets/Servicess/Youth/youth3.webp';



const services = [
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: youth1
  },
  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: youth2
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: youth3
  }
];

function YouthMinistry() {
  return (
    <div>
      {/* {/ Banner with Image /} */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* {/ Main Content /} */}
      <div className="container mx-auto mt-4 px-4 md:px-28">
        
        <Fragment>
        <div className="w-full px-4 md:px-28">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">National Co-operative for Gospel (NCFG) Youth Ministry: Empowering the Next Generation</h2>
        <p className="text-lg text-gray-700 mb-6">In the vibrant and dynamic landscape of Odisha, National Co-operative for Gospel (NCFG) Youth Ministry shines as a beacon of hope and empowerment for the young people of the region. Rooted in faith and driven by a passion for transformation, NCFG Youth Ministry is dedicated to equipping and mobilizing the next generation to live out their faith boldly and impact their communities positively.</p>
        <p className="text-lg text-gray-700 mb-6">At NCFG Youth Ministry, we believe in the immense potential of young people to become agents of change in society. Guided by biblical principles and values, we empower youth to discover their identity in Christ, develop their God-given talents, and deepen their relationship with God. Our goal is to cultivate a generation of young leaders who are grounded in faith, passionate about serving others, and committed to making a difference in the world.</p>
        <p className="text-lg text-gray-700 mb-6">Drawing inspiration from passages such as 1 Timothy 4:12, which encourages young believers to set an example in speech, conduct, love, faith, and purity, NCFG Youth Ministry seeks to mentor and disciple young people to live lives that honor God and inspire others. We provide opportunities for spiritual growth, leadership development, and community engagement, equipping youth with the skills and resources they need to fulfill their God-given purpose.</p>
        <p className="text-lg text-gray-700 mb-6">Through youth camps, retreats, workshops, and outreach events, NCFG Youth Ministry creates a supportive and nurturing environment where young people can explore their faith, build meaningful relationships, and discover their calling. We believe that investing in the next generation is essential for the advancement of God's kingdom and the transformation of society.</p>
        <p className="text-lg text-gray-700 mb-6">We invite young people from all walks of life to join us on this journey of faith, growth, and service. Together, let us rise up as a generation of young disciples who are committed to loving God, loving others, and making a difference in the world.</p>
      </div>
        </Fragment>

        {/* {/ Service Cards Section /} */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-4 px-4 md:px-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-4 hover:bg-gray-200 transition-colors duration-300"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={service.image} alt={service.title} className="w-full mb-4 rounded-lg h-25" />
              {/* <h2 className="text-xl font-bold mb-2">{service.title}</h2> */}
              {/* <p>{service.description}</p> */}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default YouthMinistry;