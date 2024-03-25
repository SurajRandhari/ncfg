import React from 'react';
import { motion } from 'framer-motion';
import Frame from '../../assets/Servicces/Frame 27.webp';


const BibleTeaching = () => {
  return (
    <div>
      {/* Banner with Image */}
      <div className="bg-gray-800 py-4">
        <img src={Frame} alt="Banner Image" className="mx-auto" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:px-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 md:px-28 font-taviraj"
        >
          <h2 className="text-3xl font-bold font-taviraj text-center text-gray-900 mb-6 underline">Bible Teaching Ministry: Spreading Light and Truth</h2>
          <p className="text-lg text-gray-700 mb-6">
            At the core of Odisha&apos;s spiritual landscape, the National Co-operative for Gospel (NFCG) shines as a guiding light, committed to disseminating the timeless teachings of the Bible far and wide. With fervent dedication, NFCG&apos;s Bible teaching ministry plays a pivotal role in nurturing spiritual growth and enlightenment across Odisha.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Grounded in the conviction that the Bible is the inspired word of God and the ultimate guide for life, NFCG endeavors to impart its profound truths to individuals from all walks of life. Through dynamic seminars, engaging workshops, community gatherings, and innovative online platforms, NFCG offers comprehensive Bible teaching programs that delve into the depths of scripture, illuminating its relevance to modern-day living and addressing the spiritual hunger of individuals.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Drawing inspiration from passages such as 2 Timothy 3:16-17, which declares, All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work, NFCG emphasizes the transformative power of God&apos;s word in equipping believers for a life of purpose and service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Moreover, NFCG&apos;s Bible teaching ministry fosters a culture of discipleship and mentorship, where seasoned believers come alongside new converts to guide them in their spiritual journey. Through interactive small group studies, personalized mentorship programs, and intentional discipleship relationships, NFCG facilitates deeper understanding of scripture and encourages spiritual growth and maturity among believers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            As NFCG continues its mission of spreading the Gospel throughout Odisha, the Bible teaching ministry remains a cornerstone of its outreach efforts. With unwavering faith in the transformative power of God&apos;s word, NFCG endeavors to witness lives transformed, hearts renewed, and communities revitalized through the faithful proclamation and teaching of the Bible.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Join us in our mission to spread the light and truth of God&apos;s word, making disciples of all nations, starting right here in Odisha.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default BibleTeaching;
