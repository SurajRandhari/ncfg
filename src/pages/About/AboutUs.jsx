import about from '../../assets/About/about.webp'
import Hey from '../../assets/About/AKtandifamily.webp'
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <>
    <div className='w-full'>
        <motion.img 
          src={about} 
          alt="" 
          className="w-full max-h-120 lg:h-80 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

    <div className="py-8 bg-white">
      {/* <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"> */}
      <div className="container m-auto px-8 md:px-12 xl:px-16 text-gray-600">
        <div>
          <h2 className="text-2xl text-gray-900 font-taviraj font-semibold md:text-4xl text-center underline">
            TESTIMONY
          </h2>
          <p className="mt-6 text-gray-600 font-taviraj text-xl px-4 md:px-20">
            My self pastor-A.K.Tandi village of Litiguda in the district of Nuapada state of Odisha. I born in a Christian Family but I was nominal in Christ. There was a only one family accepted LORD Jesus Christ in our village.So the village People are opposed and persicuited to our family every day. That time the Christian leaders are came to our home and pray for our family and taught about Jesus and strengthen us.In that time they taught me about Lord Jesus. Who is he? Why did came to this World? And also taught me about Sin And Salvation.I had listen about that matter and broken my heart. From that time I was ready to read the Bible And know about the Lord Jesus more and more.I Thanked Lord and received Lord Jesus Christ as my Personal Saviour and took Baptism On Date-10/5/1981.
          </p>
          <p className="mt-6 text-gray-600 font-taviraj text-xl px-4 md:px-20 ">
            After few month I had taken Bible training under Central India Bible College, Ittarshi(M.P) During The Year Of 1986 to 1988 Regarding (B.Th) Course.after Come back I started the ministry with my life partner Mrs.Martha On the Unreached Area of Nuapada and Kalahandi Districts Of our Odisha State. Where People are totally bounded with their Traditional Activities and Serving the Idols. People are not Knowing about the true Worship Of God. Most of the people of this Area are Uneducated and suffering lot lake of Food, Cloth, Hospital facility and communication facility are also not good. Because of their poor conditions their children are unable to getting the secular education and died by many diseases due to the lake of medical facilities no other organization coming and visit this Area expect our Ministry.I hope you well known about our Odisha Where the Australian Missionary and his two small children are killed by the others people.In this situation we have been following the foot step of Christ and giving our self in the hand of the living God to fight against the devil for the extended the kingdom of our living God.
          </p>
          <p className="mt-6 text-gray-600 font-taviraj text-xl px-4 md:px-20">
            In this way our ministry work is growing on and Still I Continues my service to God in the unreached Area of five Districts Namely-Nuapada, Kalahandi, Nabarangapur, Jaipur and Koraput districts of Odisha State.
          </p>
          
        </div>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 px-4 md:px-20">
          <div className="md:5/12 lg:w-5/12 p-4 bg-white-400">
            <img
              src={Hey}
              alt="image"
              className='w-full h-full object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-taviraj font-regular  md:text-xl">
            It always broke my heart to see the poor, innocent and helpless boys and girls.That&apos;s why I took another decision and left it in God&apos;s hands.And opened an orphanage.At that time I did not have a good house.My older brother and I built a log house for the church house.In that house,I brought some boys and girls and carried everything for them to read,writeand eat,and this was in 2002. Even now,this is still going on, currently 60 boys and girls are studying under God&apos;s blessings.Lord has also provided a small thatched house for him.
            </h2>
            <h4 className="text-2xl text-gray-900 font-bold font-taviraj md:text-xl">
            I am very happy to see the children studying and playing in the house of the Lord.
            </h4>
            
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs