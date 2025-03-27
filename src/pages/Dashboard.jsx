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
    <div>
      {done ? (
        <div className="mt-2 shadow-2xl hover:shadow-xl bg-white rounded-2xl p-8  h-[342px] w-[462px]  transition hover:scale-98">
          <div className='h-full w-full flex items-center justify-center flex-col blow-effect'>
          <img src={OK} alt="Done" className='h-[78px]' />
          <h2 className="text-4xl font-bold text-green-500">Thank You!</h2>
          <p className='text-green-500 font-medium leading-tight'>Thank you for getting in touch. We will get back to you soon.</p>
          </div>
        </div>
      ) : (
        <div className="mt-2 shadow-2xl hover:shadow-xl bg-white rounded-2xl py-8 transition hover:scale-98">
          <h1 className="text-4xl font-bold text-[#174F9C] mt-1">Get in Touch</h1>

          <form onSubmit={handleSubmit} className="pt-6 px-6 w-full">
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
              </select>
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
  animation: blowEffect 1s ease-out forwards;
}`}</style>
    </div>
  );
}

export default Dashboard;
