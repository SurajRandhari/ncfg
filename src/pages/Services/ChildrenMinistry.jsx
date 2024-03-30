import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Frame from '../../assets/Servicces/Frame 22.webp';
import A1 from '../../assets/Servicess/Children/A1.webp';
import A2 from '../../assets/Servicess/Children/A2.webp';
import A3 from '../../assets/Servicess/Children/A3.webp';
import A4 from '../../assets/Servicess/Children/A4.webp';
import A5 from '../../assets/Servicess/Children/A5.webp';
import A6 from '../../assets/Servicess/Children/A6.webp';
import A7 from '../../assets/Servicess/Children/A7.webp';
import A8 from '../../assets/Servicess/Children/A8.webp';
import A9 from '../../assets/Servicess/Children/A9.webp';
import A10 from '../../assets/Servicess/Children/A10.webp';
import A11 from '../../assets/Servicess/Children/A11.webp';
import A13 from '../../assets/Servicess/Children/A13.webp';
import A14 from '../../assets/Servicess/Children/A14.webp';

import img2 from '../../assets/Action/Action2.webp'
import Service1Image from '../../assets/Servicess/Children/child1.webp';
import Service2Image from '../../assets/Servicess/Children/child2.webp';
import Service3Image from '../../assets/Servicess/Children/child3.webp';

const services = [

  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: img2
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A1
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A2
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A3
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A4
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A5
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A6
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A7
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A7
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A8
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A9
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A10
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A11
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A13
  }, 
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: A14
  }, 
 
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Service1Image
  },
  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Service2Image
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Service3Image
  }
];

function ChildrenMinistry() {
  return (
    <div>
      {/* Banner with Image */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:px-28">
        <Fragment>
          <div className="container mx-auto px-4 md:px-16 py-8">
            <h1 className="text-3xl font-semibold font-taviraj text-center text-gray-900 mb-8 underline">
              National Co-operative for Gospel (NCFG): Bringing Hope to Orphans in Odisha
            </h1>
            <div className="text-gray-700 text-lg mb-6">
              <ul>
                <li className="mb-4">
                  <strong>Mission and Vision:</strong> At NCFG, we strive to provide a nurturing environment where orphaned children can thrive emotionally, physically, and spiritually. Our vision is to ensure every child, regardless of their circumstances, has the opportunity to fulfill their potential and contribute positively to society. Guided by Christian values, we believe in the inherent dignity and worth of every individual, aiming to instill these values in the children under our care.
                </li>
                <li className="mb-4">
                  <strong>Our Work:</strong> Since our inception, NCFG has been committed to serving the most vulnerable members of society – orphaned and abandoned children. We provide them with a loving home, nutritious meals, access to education, and a sense of belonging. Our dedicated team of staff and volunteers tirelessly create a supportive environment where children can heal from past traumas and build a brighter future.
                </li>
                <li className="mb-4">
                  <strong>Biblical Foundation:</strong> The work of NCFG is deeply rooted in the teachings of the Bible. Inspired by passages such as James 1:27 and Psalm 68:5-6, we uphold principles of caring for the fatherless and oppressed, finding guidance and strength in these verses.
                </li>
                <li className="mb-4">
                  <strong>Impact and Outreach:</strong> Over the years, NCFG has made a significant impact on the lives of countless children in Odisha. Through our holistic approach, we've witnessed remarkable transformations – from broken and hopeless children to empowered young adults. Many of our alumni have pursued higher education, secured employment, and become leaders in their communities. Additionally, we engage in community outreach programs addressing the root causes of poverty, seeking to uplift entire families and break the cycle of deprivation.
                </li>
                <li className="mb-4">
                  <strong>Join Us in Making a Difference:</strong> We invite individuals, churches, and organizations to partner with us in this noble cause. Whether through financial support, volunteering, or prayer, your contribution can make a tangible difference in the lives of those in need. Together, we can bring hope, healing, and transformation to the lives of orphaned children in Odisha, embodying faith in action.
                </li>
              </ul>
            </div>
          </div>
        </Fragment>

        {/* Service Cards Section */}
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

export default ChildrenMinistry;
