import React, { useState } from "react";
import OK from "../assets/OK.png";
import emailjs from '@emailjs/browser';

function Dashboard() {
  const [formDatas, setFormDatas] = useState({
    Date: new Date().toLocaleDateString(),
    Time: new Date().toLocaleTimeString(),
    Name: "",
    Email: "",
    Phone: "",
    Services: "",
    Message: "",
  });
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      Object.keys(formDatas).forEach((key) => {
        formData.append(key, formDatas[key]);
      });
      await fetch(
        "https://script.google.com/macros/s/AKfycbxhqQCOlADdcvLsnEZN-2oKDOF1o-AVdLldMgbgPUiJxQQ2IqVeJcT4g_muM0hNDyU1/exec",
        { method: "POST", body: formData }
      );

      // Email
      const templateParams = {
        name: formDatas.Name,
        message: formDatas.Message,
        email: formDatas.Email,
        phone: formDatas.Phone,
        services: formDatas.Services,
      }
      emailjs.send('service_tdlg4q8', 'template_nckx768', templateParams, {publicKey: 'EEzlADQj6V2NY9ayO',})
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );


      setDone(true);
      setFormDatas({
        Date: new Date().toLocaleDateString(),
        Time: new Date().toLocaleTimeString(),
        Name: "",
        Email: "",
        Phone: "",
        Services: "",
        Message: "",
      });
    } catch (error) {
      setError("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full py-8 px-0 sm:px-6 lg:px-8">
      {done ? (
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-2xl p-8 transition hover:scale-98 w-full max-w-md sm:max-w-lg">
          <div className="flex flex-col items-center justify-center h-full blow-effect">
            <img src={OK} alt="Done" className="h-20 w-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mt-4">
              Thank You!
            </h2>
            <p className="text-green-500 font-medium mt-2 text-center">
              Thank you for getting in touch. We will get back to you soon.
            </p>
            <button
              onClick={() => setDone(false)}
              className="mt-6 px-6 py-2 bg-[#174F9C] text-white rounded-full shadow-xl hover:shadow-md transition"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-2xl sm:py-8 py-4 transition hover:scale-98 w-full min-w-[318px] sm:max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#174F9C] text-center">
            Get in Touch
          </h1>
          <form onSubmit={handleSubmit} className="sm:pt-6 pt-4 sm:px-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="Name"
                placeholder="Full Name*"
                value={formDatas.Name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email *"
                value={formDatas.Email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone *"
                value={formDatas.Phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="Services"
                value={formDatas.Services}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">Services *</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Loan Against Property">
                  Loan Against Property
                </option>
                <option value="Auto Loan">Auto Loan</option>
                <option value="Working Capital">Working Capital</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
              </select>
            </div>

            <textarea
              name="Message"
              placeholder="Your Message"
              value={formDatas.Message}
              onChange={handleChange}
              className="w-full mt-4 p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>

            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}

            <div className="flex justify-center w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 px-6 py-2 bg-[#174F9C] text-white rounded-full shadow-xl flex items-center gap-2 hover:shadow-md transition disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      <style>{`
        @keyframes blowEffect {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .blow-effect {
          animation: blowEffect 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
