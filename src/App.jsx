import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="py-[26px] px-[26px] w-full flex flex-col items-center  min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-center fadeIn-anime">
      <Header />
      <main className="container mx-auto p-4  flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <div className="flex gap-4 mt-6">
        <Link
          href="#"
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
          href="#"
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

        <Link
          href="#"
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
      </div>

      <div className="absolute left-10 bottom-20 w-6 h-6 bg-green-300 rounded-full animate-bounce"></div>
      <div className="absolute md:right-10 right-3 top-28 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-300 animate-spin"></div>
      <div
        className="absolute right-20 bottom-10 h-[24px] w-[24px] bg-red-300 rounded-full animate-pulse"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      ></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fadeIn-anime {
          animation: fadeIn 1s ease-out;
        }
                  body {
          overflow: hidden; /* Hide scrollbar during animation */
        }
      `}</style>
    </div>
  );
}

export default App;
