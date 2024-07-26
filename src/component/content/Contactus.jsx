import React from 'react';
import 'tailwindcss/tailwind.css';
import './ContactUs.css';
import ContactDetails from "./ContactDetails"
import Map from "./Map"
const ContactUs = () => {
  return (
    <section>
    <div className="form-container ">
      <div className="form-box flex justify-center items-center min-h-screen">
        <div className="container-main shadow p-6 rounded-lg max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text text-shadow text-primary text-center mb-6">Get In Touch</h2>
          <form action="#">
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="text"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Your Name</label>
                <div className="underline"></div>
              </div>
              <div className="input-data w-full relative">
                <input
                  type="tel"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Contact No.</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="email"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Email</label>
                <div className="underline"></div>
              </div>
              <div className="input-data w-full relative">

                <label for="countries" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white pl-4 ">Select your country</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 border-t-0 border-x-0   dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                  <option></option>
                  <option>India</option>
                  
                </select>
                {/* <input
                  type="tel"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Contact No.</label> */}
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white pl-4 ">What Do You Do</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 border-t-0 border-x-0   dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                  <option></option>
                  <option>Student</option>
                  <option>Pvt. Job</option>
                  <option>Govt. Job</option>
                 
                </select>
                <div className="underline"></div>
              </div>
              <div className="input-data w-full relative">

                <label for="countries" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white pl-4 ">What is your Query about?</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 border-t-0 border-x-0   dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                  <option></option>
                  <option>Admission Process</option>
                  <option>Courses Offered</option>
                  <option>Financial Assistance</option>
                  <option>Accommodation</option>
                  <option>Other</option>
                </select>
                {/* <input
                  type="tel"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Contact No.</label> */}
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="text"
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Subject</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative textarea">
                <textarea
                  className="block w-full focus:border-red-500 outline-none"
                  required
                ></textarea>
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">Message</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row submit-btn flex justify-center">
              <button
                type="submit"
                className="relative inline-block text-white bg-gradient-to-r p-4 px-14 from-red-700 to-red-400 hover:from-red-400 hover:to-red-700 font-semibold py-2 px-4 rounded-full transition-ease-out "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ContactDetails/>
    <Map/>
    </section>
  );
};

export default ContactUs;
