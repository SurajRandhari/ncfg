import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Frame from '../../assets/Servicces/Frame 27.webp';

import P1 from '../../assets/Servicess/Bible/P1.webp';
import P2 from '../../assets/Servicess/Bible/P2.webp';
import P3 from '../../assets/Servicess/Bible/P3.webp';



const services = [
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: P1
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: P2
  },
  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: P3
  }
];

const BibleTeaching = () => {
  return (
    <div>
      {/* Banner with Image */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:px-28">

        <Fragment>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 md:px-28 font-taviraj"
        >
          <h2 className="text-3xl font-bold font-taviraj text-center text-gray-900 mb-6 underline">Bible Teaching Ministry: Spreading Light and Truth</h2>
          <p className="text-lg text-gray-700 mb-6">
            At the core of Odisha&apos;s spiritual landscape, the National Co-operative for Gospel (NCFG) shines as a guiding light, committed to disseminating the timeless teachings of the Bible far and wide. With fervent dedication, NCFG&apos;s Bible teaching ministry plays a pivotal role in nurturing spiritual growth and enlightenment across Odisha.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Grounded in the conviction that the Bible is the inspired word of God and the ultimate guide for life, NCFG endeavors to impart its profound truths to individuals from all walks of life. Through dynamic seminars, engaging workshops, community gatherings, and innovative online platforms, NCFG offers comprehensive Bible teaching programs that delve into the depths of scripture, illuminating its relevance to modern-day living and addressing the spiritual hunger of individuals.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Drawing inspiration from passages such as 2 Timothy 3:16-17, which declares, All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work, NCFG emphasizes the transformative power of God&apos;s word in equipping believers for a life of purpose and service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Moreover, NCFG&apos;s Bible teaching ministry fosters a culture of discipleship and mentorship, where seasoned believers come alongside new converts to guide them in their spiritual journey. Through interactive small group studies, personalized mentorship programs, and intentional discipleship relationships, NCFG facilitates deeper understanding of scripture and encourages spiritual growth and maturity among believers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            As NCFG continues its mission of spreading the Gospel throughout Odisha, the Bible teaching ministry remains a cornerstone of its outreach efforts. With unwavering faith in the transformative power of God&apos;s word, NCFG endeavors to witness lives transformed, hearts renewed, and communities revitalized through the faithful proclamation and teaching of the Bible.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Join us in our mission to spread the light and truth of God&apos;s word, making disciples of all nations, starting right here in Odisha.
          </p>
        </motion.div>
        </Fragment>

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

export default BibleTeaching;
