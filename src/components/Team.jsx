import React from "react";
import { team } from "../assets/Data/data.js";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-red-600 my-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-red-600">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
