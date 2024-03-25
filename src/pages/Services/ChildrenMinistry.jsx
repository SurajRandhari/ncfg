import React, { Fragment } from 'react';
import Frame from '../../assets/Servicces/Frame 22.webp';

const services = [
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function ChildrenMinistry() {
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
              National Co-operative for Gospel (NCFG): Bringing Hope to Orphans in Odisha
            </h1>
            <div className="text-gray-700 text-lg mb-6">
              <ul>
                <li className="mb-4">
                  <strong>Mission and Vision:</strong> At NAFCG, we strive to provide a nurturing environment where orphaned children can thrive emotionally, physically, and spiritually. Our vision is to ensure every child, regardless of their circumstances, has the opportunity to fulfill their potential and contribute positively to society. Guided by Christian values, we believe in the inherent dignity and worth of every individual, aiming to instill these values in the children under our care.
                </li>
                <li className="mb-4">
                  <strong>Our Work:</strong> Since our inception, NAFCG has been committed to serving the most vulnerable members of society – orphaned and abandoned children. We provide them with a loving home, nutritious meals, access to education, and a sense of belonging. Our dedicated team of staff and volunteers tirelessly create a supportive environment where children can heal from past traumas and build a brighter future.
                </li>
                <li className="mb-4">
                  <strong>Biblical Foundation:</strong> The work of NAFCG is deeply rooted in the teachings of the Bible. Inspired by passages such as James 1:27 and Psalm 68:5-6, we uphold principles of caring for the fatherless and oppressed, finding guidance and strength in these verses.
                </li>
                <li className="mb-4">
                  <strong>Impact and Outreach:</strong> Over the years, NAFCG has made a significant impact on the lives of countless children in Odisha. Through our holistic approach, we've witnessed remarkable transformations – from broken and hopeless children to empowered young adults. Many of our alumni have pursued higher education, secured employment, and become leaders in their communities. Additionally, we engage in community outreach programs addressing the root causes of poverty, seeking to uplift entire families and break the cycle of deprivation.
                </li>
                <li className="mb-4">
                  <strong>Join Us in Making a Difference:</strong> We invite individuals, churches, and organizations to partner with us in this noble cause. Whether through financial support, volunteering, or prayer, your contribution can make a tangible difference in the lives of those in need. Together, we can bring hope, healing, and transformation to the lives of orphaned children in Odisha, embodying faith in action.
                </li>
              </ul>
            </div>
          </div>
        </Fragment>

        {/* {/ Service Cards Section /} */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-4 px-4 md:px-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:bg-gray-200 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ChildrenMinistry;