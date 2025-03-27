import React from "react";
import {
  FaPlay,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind? Reach out to discuss how we can help bring
              your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MdEmail className="text-red-600 text-xl mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300">
                    inquiryastraproduction@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdPhone className="text-red-600 text-xl mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-300">+977 9863539501</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdLocationOn className="text-red-600 text-xl mt-1" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-300">
                    20th Street, Lakeside, Pokhara 33700
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/productionastra/"
                className="text-gray-400 hover:text-red-600"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@astra.production"
                className="text-gray-400 hover:text-red-600"
              >
                <FaTiktok className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/productionastra"
                className="text-gray-400 hover:text-red-600"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
