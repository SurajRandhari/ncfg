import React, { Fragment } from 'react';
import Frame from '../../assets/Servicces/Frame 26.webp';


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

function WomanMinistry() {
  return (
    <div>
      {/* Banner with Image */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:px-28">
        
        <Fragment>
          <div className="w-full px-4 md:px-28">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Women's Ministry: Empowering Women, Enriching Lives</h2>
            <p className="text-lg text-gray-700 mb-6"><strong>⁜. </strong>The Women's Ministry at National Co-operative for Gospel (NFCG) is a vibrant community dedicated to nurturing the spiritual growth and well-being of women in Odisha. Grounded in biblical principles and inspired by the example of women in the Bible, our ministry seeks to empower women to live out their faith with courage, compassion, and grace.</p>
            <p className="text-lg text-gray-700 mb-6"><strong>⁜. </strong>Drawing inspiration from passages such as Proverbs 31:30, which declares, "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised," NFCG Women's Ministry emphasizes the importance of cultivating inner beauty, spiritual strength, and godly character. We believe that every woman is uniquely created and gifted by God for a purpose, and our ministry aims to provide opportunities for women to discover and develop their God-given talents and abilities.</p>
            <div className="flex justify-center mb-6">
              <img src="https://example.com/your-image1.jpg" alt="Women's Ministry" className="w-1/2 rounded-lg shadow-lg mr-2" />
              <img src="https://example.com/your-image2.jpg" alt="Women's Ministry" className="w-1/2 rounded-lg shadow-lg ml-2" />
            </div>
            <p className="text-lg text-gray-700 mb-6"><strong>⁜. </strong>Through Bible studies, prayer groups, fellowship events, and outreach activities, NFCG Women's Ministry creates a supportive and nurturing environment where women can grow in their relationship with God, deepen their understanding of Scripture, and build meaningful relationships with one another. We believe in the power of women coming together in community to encourage, support, and uplift one another in their journey of faith.</p>
            <p className="text-lg text-gray-700 mb-6"><strong>⁜. </strong>Our ministry is committed to addressing the unique needs and challenges faced by women in today's world, while also celebrating their God-given strengths and contributions. Whether single or married, young or old, NFCG Women's Ministry welcomes women from all walks of life to join us as we seek to glorify God and make a positive impact in our families, churches, and communities.</p>
          </div>
        </Fragment>

        {/* Service Cards Section */}
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

export default WomanMinistry;
