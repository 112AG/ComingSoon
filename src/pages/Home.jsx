import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-2xl bg-white shadow-2xl hover:shadow-xl rounded-2xl p-6 sm:p-10 transition-transform transform hover:scale-95">
        <div className="text-center">
          <span className="text-4xl sm:text-5xl">👍</span>
          <h3 className="text-gray-600 uppercase text-sm sm:text-base tracking-wide mt-2">We're still</h3>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#174F9C] mt-2">Cooking Our Website.</h1>
          <p className="text-gray-500 mt-2 sm:text-lg">We are going to launch our website very soon.</p>
          <p className="text-gray-500 sm:text-lg">Stay Tuned.</p>
        </div>

        <div className='flex justify-center w-full mt-6'>
          <Link to='/dashboard' className="px-6 py-3 bg-[#174F9C] text-white rounded-full shadow-lg flex items-center gap-2 hover:shadow-md transition">
            <span className='h-[30px] w-[30px] rounded-full bg-white text-[#174F9C] flex items-center justify-center'><i className="ri-mail-fill"></i></span> 
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
