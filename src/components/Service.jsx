import React from 'react';
import bibleMinistry from '../assets/Servicess/bible-ministry-.webp'
import childrenMinistry from '../assets/Servicess/children-ministry.webp'
import evangeismMinistry from '../assets/Servicess/evangelism-ministry.webp'
import womanMinistry from '../assets/Servicess/woman-ministry.webp'
import pastoralMinistry from '../assets/Servicess/pastor-ministry.webp'
import youthMinistry from '../assets/Servicess/youth-ministry.webp'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="flex justify-center items-center h-93 bg-slate-50">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-3">
        {/* Service Card 1 */}
        <Link to="/children-ministry">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={childrenMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Children Ministry</h2>
        </div>
        </Link>

        {/* Service Card 2 */}
        <Link to="/evangelism">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={evangeismMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Evangelism</h2>
        </div>
        </Link>

        {/* Service Card 3 */}
        <Link to="/youth-ministry">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={youthMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Youth Ministry</h2>
        </div>
        </Link>

        {/* Service Card 4 */}
        <Link to="/pastoral-ministry">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={pastoralMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Pastoral Ministry</h2>
        </div>
        </Link>

        {/* Service Card 5 */}
        <Link to="/woman-ministry">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={womanMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Women Ministry</h2>
        </div>
        </Link>

        {/* Service Card 6 */}
        <Link to="/bible-teaching">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-200 transition-colors duration-300 sm:w-full md:w-80 lg:w-96">
          <img className="w-24 h-24 mx-auto mb-4" src={bibleMinistry} alt="Service Icon" />
          <h2 className="text-xl font-bold mb-2 text-center">Bible Teaching</h2>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Service;
