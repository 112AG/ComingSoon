import React from "react";
import viteLogo from '../../public/vite.svg'

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-center px-4">
      <div className="bg-white h-[48px] flex items-center gap-2  px-6 py-2 rounded-full shadow-md">
      <img src={viteLogo} className="w-full h-full" alt="Logo" />
        <h2 className="text-4xl whitespace-nowrap font-bold">SD Finance</h2>
      </div>

      <div className="mt-6">
        <span className="text-3xl">👍</span>
        <h3 className="text-gray-600 uppercase text-sm tracking-wide mt-2">We're still</h3>
        <h1 className="text-4xl font-bold text-blue-600 mt-2">Cooking Our Website.</h1>
        <p className="text-gray-500 mt-2">We are going to launch our website very soon.</p>
        <p className="text-gray-500">Stay Tuned.</p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md flex items-center gap-2 hover:bg-gray-800 transition">
          <span>📩</span> Notify Me
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <span className="p-2 bg-white rounded-full shadow-md text-gray-600">🔗</span>
        <span className="p-2 bg-white rounded-full shadow-md text-gray-600">📸</span>
        <span className="p-2 bg-white rounded-full shadow-md text-gray-600">💼</span>
      </div>

      {/* Floating Elements */}
      <div className="absolute left-10 bottom-20 w-6 h-6 bg-green-300 rounded-full animate-bounce"></div>
      <div className="absolute right-10 top-20 w-6 h-6 bg-yellow-300 rounded-full animate-spin"></div>
      <div className="absolute right-20 bottom-10 w-6 h-6 bg-red-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ComingSoon;
