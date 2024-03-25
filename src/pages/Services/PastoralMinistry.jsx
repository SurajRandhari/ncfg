import React, { Fragment } from 'react';
import Frame from '../../assets/Servicces/Frame 25.webp';


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

function PastoralMinistry() {
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
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">National Co-operative for Gospel (NFCG) Pastoral Ministry: Nurturing Souls, Strengthening Communities</h2>
        <p className="text-lg text-gray-700 mb-6">In the diverse and culturally rich landscape of Odisha, National Co-operative for Gospel (NFCG) Pastoral Ministry stands as a beacon of faith and hope, dedicated to shepherding and caring for the spiritual needs of communities across the region. Rooted in the timeless truths of the Bible and fueled by a passion for service, NFCG Pastoral Ministry is committed to equipping and empowering pastors to lead with wisdom, compassion, and integrity.</p>
        <p className="text-lg text-gray-700 mb-6">At NFCG Pastoral Ministry, we believe in the importance of strong and effective pastoral leadership in building vibrant and thriving churches. Guided by biblical principles and examples, we provide pastoral training, mentorship, and support to ministers serving in churches and communities throughout Odisha. Our goal is to equip pastors with the knowledge, skills, and spiritual foundation they need to shepherd God's flock faithfully and effectively.</p>
        <p className="text-lg text-gray-700 mb-6">Drawing inspiration from passages such as 1 Peter 5:2-3, which exhorts pastors to "be shepherds of God's flock that is under your care, watching over them—not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve; not lording it over those entrusted to you, but being examples to the flock," NFCG Pastoral Ministry seeks to cultivate servant-hearted leaders who lead by example and serve with humility.</p>
        <p className="text-lg text-gray-700 mb-6">Through pastoral conferences, seminars, and ongoing mentorship programs, NFCG Pastoral Ministry provides pastors with opportunities for spiritual growth, leadership development, and networking with fellow ministers. We believe that investing in the spiritual health and well-being of pastors is essential for the health and vitality of churches and communities.</p>
        <p className="text-lg text-gray-700 mb-6">We invite pastors from all denominations and backgrounds to partner with us in this important work of pastoral ministry. Together, let us uphold the sacred calling of shepherding God's people, nurturing souls, and strengthening communities for the glory of God.</p>
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

export default PastoralMinistry;