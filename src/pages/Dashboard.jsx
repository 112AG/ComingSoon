import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="mt-2 max-w-2xl shadow-2xl hover:shadow-xl bg-white rounded-2xl p-8 transition hover:scale-98">
        <span className="text-3xl">👍</span>
        <h3 className="text-gray-600 uppercase text-[14px] tracking-wide mt-1">We're still</h3>
        <h1 className="text-4xl font-bold text-[#174F9C] mt-1">Cooking Our Website.</h1>
        <p className="text-gray-500 mt-1">We are going to launch our website very soon.</p>
        <p className="text-gray-500">Stay Tuned.</p>

        <div className='flex justify-center w-full'>
        <Link to='/dashboard' className="mt-6 px-6 py-2 bg-[#174F9C] text-white rounded-full shadow-xl flex items-center gap-2 hover:shadow-md transition">
          <span className='h-[26px] w-[26px] rounded-full bg-white text-[#174F9C]'><i className="ri-mail-fill"></i></span> Get in touch
        </Link>
        </div>
        
      </div>
  )
}

export default Dashboard