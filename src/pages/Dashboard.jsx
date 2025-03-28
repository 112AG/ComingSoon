import React, { useState } from 'react';
import OK from '../assets/OK.png';

function Dashboard() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="flex items-center justify-center h-full py-8 px-0 sm:px-6 lg:px-8">
      {done ? (
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-2xl p-8 transition hover:scale-98 w-full max-w-md sm:max-w-lg">
          <div className="flex flex-col items-center justify-center h-full blow-effect">
            <img src={OK} alt="Done" className="h-20 w-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mt-4">Thank You!</h2>
            <p className="text-green-500 font-medium mt-2 text-center">
              Thank you for getting in touch. We will get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-2xl sm:py-8 py-4 transition hover:scale-98 w-full min-w-[318px] sm:max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#174F9C] text-center">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="sm:pt-6 pt-4 sm:px-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="relative w-full">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Services *</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Loan Against Property">Loan Against Property</option>
                  <option value="Auto Loan">Auto Loan</option>
                  <option value="Working Capital">Working Capital</option>
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                </select>
                <svg
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-4 p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>

            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-[#174F9C] text-white rounded-full shadow-xl flex items-center gap-2 hover:shadow-md transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes blowEffect {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .blow-effect {
          animation: blowEffect 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
