import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex gap-4 mt-6">

    <Link
      to="https://www.facebook.com/Sdfinancialservices.fb"
       target="_blank"
      className="
  w-12 h-12
  flex items-center justify-center
  rounded-full
  border border-[#174F9C]
  text-[#174F9C]
  bg-gradient-radial from-blue-50 to-white
  /* or: bg-[radial-gradient(circle,_#E0F0FF_30%,_#FFFFFF_100%)] */
  shadow-[0_0_5px_rgba(59,130,246,0.3)]
  hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]
  transition-all duration-300
"
    >
      <i className="ri-facebook-line text-xl font-semibold"></i>
    </Link>

    <Link
      to="https://www.instagram.com/sd.financial_services/"
      target="_blank"
      className="
  w-12 h-12
  flex items-center justify-center
  rounded-full
  border border-[#174F9C]
  text-[#174F9C]
  bg-gradient-radial from-blue-50 to-white
  /* or: bg-[radial-gradient(circle,_#E0F0FF_30%,_#FFFFFF_100%)] */
  shadow-[0_0_5px_rgba(59,130,246,0.3)]
  hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]
  transition-all duration-300
"
    >
      <i className="ri-instagram-line text-xl font-semibold"></i>
    </Link>

    <Link
      to="https://www.linkedin.com/company/sdfinancialservices"
      target="_blank"
      className="
  w-12 h-12
  flex items-center justify-center
  rounded-full
  border border-[#174F9C]
  text-[#174F9C]
  bg-gradient-radial from-blue-50 to-white
  /* or: bg-[radial-gradient(circle,_#E0F0FF_30%,_#FFFFFF_100%)] */
  shadow-[0_0_5px_rgba(59,130,246,0.3)]
  hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]
  transition-all duration-300
"
    >
      <i className="ri-linkedin-line text-xl font-semibold"></i>
    </Link>
  </div>
  )
}

export default Footer