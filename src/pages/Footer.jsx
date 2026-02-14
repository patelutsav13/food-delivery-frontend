import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-50 via-pink-50 to-red-100 pt-16 pb-10 border-t-4 border-red-200">

      <div className="px-8 lg:px-20 max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Fresh Bites Section */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="relative group">
                <img src={logo} alt="logo" className="w-16 h-16 lg:w-20 lg:h-20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <span className="font-bold text-xl lg:text-4xl text-gray-900 hover:text-red-600 transition-colors duration-300">
                Fresh Bites
              </span>
            </div>
            <p className="text-gray-600 text-sm lg:text-2xl leading-relaxed">
              Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!
            </p>
          </div>

          {/* Delivery Time Section */}
          <div>
            <h3 className="font-bold text-lg lg:text-4xl mb-4 text-gray-900 border-b-2 border-red-300 pb-2 inline-block">
              Delivery Time
            </h3>
            <div className="space-y-3 text-sm lg:text-2xl mt-6">
              <p className="font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Monday - Friday
              </p>
              <p className="text-gray-600 ml-4">10:00am - 11:00pm</p>
              <p className="font-semibold text-gray-800 pt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Saturday - Sunday
              </p>
              <p className="text-gray-600 ml-4">Full Day</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg lg:text-4xl mb-4 text-gray-900 border-b-2 border-red-300 pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-3 text-sm lg:text-2xl text-gray-700 mt-6">
              <p className="hover:text-red-600 transition-colors duration-300"><span className="font-semibold">Location:</span> Kadi, Ahmedabad</p>
              <p className="hover:text-red-600 transition-colors duration-300"><span className="font-semibold">Phone:</span> 6351325402</p>
              <p className="hover:text-red-600 transition-colors duration-300"><span className="font-semibold">Email:</span> patelutsav312@gmail.com</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold text-lg lg:text-4xl mb-4 text-gray-900 border-b-2 border-red-300 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-sm lg:text-2xl mb-4 font-semibold text-gray-700 mt-6">
              Subscribe our newsletter
            </p>
            <div className="flex bg-white border-2 border-red-200 rounded-xl overflow-hidden h-12 lg:h-16 shadow-md hover:shadow-lg transition-shadow duration-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full text-sm lg:text-xl outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 lg:px-6 flex items-center justify-center text-white text-2xl lg:text-4xl font-bold transition-all duration-300 hover:scale-105">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-red-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-red-500 text-xs lg:text-2xl font-bold text-center md:text-left">
            Copyright © 2024, website made by Utsav Patel. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-gray-700 text-sm lg:text-2xl font-bold">
              Follow:
            </span>

            <SocialIcon>
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </SocialIcon>

            <SocialIcon>
              <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.13-4.55-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.03a9.3 9.3 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.43.2 2.49.1 2.75.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.2 10.2 0 0022 12.2C22 6.58 17.52 2 12 2z" />
            </SocialIcon>

            <SocialIcon>
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-1C16.2 4.7 12 4.7 12 4.7h0s-4.2 0-7 .3c-.4 0-1.2.2-2 1-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.3 6.6.3s4.2 0 7-.3c.4 0 1.2-.2 2-1 .6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8zM10 14.7V9.3l5.4 2.7L10 14.7z" />
            </SocialIcon>

            <SocialIcon>
              <path d="M4 3a2 2 0 110 4 2 2 0 010-4zM2 8h4v14H2zM8 8h4v2h.1c.6-1.1 2-2.3 4.1-2.3C20 7.7 22 10 22 14.3V22h-4v-6.5c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V22H8z" />
            </SocialIcon>
          </div>
        </div>

      </div>
    </footer>
  )
}

const SocialIcon = ({ children }) => (
  <a
    href="#"
    className="w-10 h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 lg:w-6 lg:h-6"
    >
      {children}
    </svg>
  </a>
)

export default Footer

