import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

import Frame from '../../assets/Servicces/Frame 23.webp';
import env1 from '../../assets/Servicess/Evangelism/evn1.webp';
import env2 from '../../assets/Servicess/Evangelism/evn2.webp';
import env3 from '../../assets/Servicess/Evangelism/evn3.webp';


const services = [
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: env1
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: env3
  },
  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: env2
  }
];

function EvangeismMinistry() {
  return (
    <div>
      {/* {/ Banner with Image /} */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* {/ Main Content /} */}
      <div className="container mx-auto mt-4 px-4 md:px-28">
        
      <Fragment>
          <div className="container mx-auto px-4 md:px-16 py-8">
          <h1 className="text-3xl font-semibold font-taviraj text-center text-gray-900 mb-8 underline">
              National Co-operative for Gospel (NCFG): Spreading the Message of Hope in Odisha
            </h1>
            <div className="text-gray-700 text-lg mb-6">
              <p className='mb-4'>
                In the heart of Odisha, amidst the diverse cultural landscape, National Co-operative for Gospel (NCFG) stands as a beacon of light, dedicated to spreading the transformative message of hope and redemption. Established with a fervent commitment to evangelism, NCFG embodies the principles of cooperation, community, and above all, the Gospel message of love and salvation.
              </p>
              <p className='mb-4'>
                <strong>Mission and Vision:</strong> At NCFG, our mission is clear: to proclaim the Good News of Jesus Christ to the people of Odisha and beyond. We envision a future where every individual has the opportunity to encounter the life-changing power of the Gospel and experience the boundless love of God. Guided by our Christian faith, we are driven by a passion to share the message of salvation and to lead others into a personal relationship with Jesus Christ.
              </p>
              <p className='mb-4'>
                <strong>Our Work:</strong> Since our inception, NCFG has been committed to spreading the Gospel through various evangelistic initiatives. From conducting open-air crusades and street evangelism to organizing Bible studies and discipleship programs, we actively engage with communities across Odisha, sharing the hope and joy found in Christ. Our dedicated team of evangelists and volunteers tirelessly sow seeds of faith, believing in the promise of Matthew 28:19-20, where Jesus commands us to "go and make disciples of all nations."
              </p>
              <p className='mb-4'>
                <strong>Biblical Foundation:</strong> The work of NCFG is deeply rooted in the teachings of the Bible. We draw inspiration from passages such as Mark 16:15, where Jesus instructs his disciples to "go into all the world and preach the gospel to all creation." Additionally, we find encouragement in Romans 10:14-15, which highlights the importance of preaching the Gospel so that all may have the opportunity to believe and be saved.
              </p>
              <p className='mb-4'>
                <strong>Impact and Outreach:</strong> Over the years, NCFG has witnessed the transformative impact of the Gospel in the lives of countless individuals. We have seen hearts softened, lives restored, and communities transformed through the power of God's Word. Our evangelistic efforts extend beyond geographical boundaries, reaching remote villages, urban centers, and tribal communities, bringing hope and healing to those in need.
              </p>
              <p  className='mb-4'>
                <strong>Join Us in Making a Difference:</strong> We invite individuals, churches, and organizations to join us in this vital mission of spreading the Gospel. Whether through prayer support, financial contributions, or active participation in evangelistic activities, your partnership can make a significant difference in advancing the Kingdom of God. Together, let us continue to shine the light of Christ in the darkness and bring hope to the people of Odisha and beyond.
              </p>
            </div>
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

export default EvangeismMinistry;