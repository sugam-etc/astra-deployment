import { useState } from "react";
import {
  FaTicketAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
} from "react-icons/fa";
import Footer from "./Footer";
import ktaharuposter from "../assets/Events/ktaharu.jpg";
import liljhola from "../assets/Events/liljhola.png";
import rumafest from "../assets/Events/rumafest.png";
import shreepanch from "../assets/Projects/shreepaanch.jpg";
import womensdayhighlight from "../assets/Highlights/womensday1.jpg";
//Women's Day Highlights
import womensday1 from "../assets/Highlights/womensday1.jpg";
import womensday2 from "../assets/Highlights/womensday2.jpg";
import womensday3 from "../assets/Highlights/womensday3.jpg";

//LilJhola Highlights
import liljhola1 from "../assets/Highlights/liljhola1.jpg";
import liljhola2 from "../assets/Highlights/liljhola2.jpg";
import liljhola3 from "../assets/Highlights/liljhola3.jpg";

//Ktaharu Highlights
import ktaharu1 from "../assets/Highlights/ktaharu1.jpg";
import ktaharu2 from "../assets/Highlights/ktaharu2.jpg";
import ktaharu3 from "../assets/Highlights/ktaharu3.jpg";
import { Link } from "react-router-dom";
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample event data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "TOO TURNT NO CAP",
      venue: "Club Sixteen",
      artists: "LIL JHOLA, KRIZN",
      date: "FEB 22, 2025",
      time: "11:00 PM ONWARDS",
      poster: liljhola,
      ticketUrl: "#",
      description: "Annual music festival featuring top Nepali artists",
      expired: true,
    },
    {
      id: 2,
      title: "Kta Haru - Prasthuti",
      venue: "Rolling Stone Rock Bar",
      artists: "Kta Haru Band",
      date: "April 10, 2025",
      time: "9:00 PM ONWARDS",
      poster: ktaharuposter,
      ticketUrl: "https://revelarena.com/qr/single-event/KqEx7C",
      description: "Shree Paanch First Live Event",
    },
    {
      id: 3,
      title: "Ruma Music Fest",
      venue: "Ruma Village, Myagdi",
      artists: "Various Artists - More than 25",
      date: "April 3-5, 2025",
      time: "DAYTIME",
      poster: rumafest,
      ticketUrl: "https://revelarena.com/qr/single-event/k2Qtofz",
      description: "Music For Education",
    },
  ];

  // Recent Event Highlights
  const recentHighlights = [
    {
      id: 1,
      title: "KTA HARU EVENT",
      date: "October 26, 2024",
      stats: "800+ attendees | 8 hours of live music",
      image: ktaharu2,
      videoUrl: "#",
      photos: [ktaharu1, ktaharu2, ktaharu3],
    },
    {
      id: 2,
      title: "TOO TURNT NO CAP",
      date: "FEB 22, 2025",
      stats: "1,500 participants | 5 hosts",
      image: liljhola1,
      videoUrl: "#",
      photos: [liljhola1, liljhola2, liljhola3],
    },
    {
      id: 3,
      title: "Women's Day",
      date: "March 19, 2025",
      stats: "250+ climbers",
      image: womensday1,
      videoUrl: "#",
      photos: [womensday1, womensday2, womensday3],
    },
  ];

  // Production Portfolio
  const productions = [
    {
      id: 1,
      title: "Shree Paanch Music Production",
      client: "Kta Haru Band",
      services: ["Cinematography", "Editing", "Color Grading"],
      image: shreepanch,
      videoUrl: "#",
    },
    {
      id: 2,
      title: "Women's Day - Highlights",
      client: "West Indoor Sport Hub Pvt. Ltd",
      services: ["Full Production", "Drone Cinematography", "Sound Design"],
      image: womensdayhighlight,
      videoUrl: "#",
    },
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigatePoster = (direction) => {
    const currentIndex = events.findIndex((e) => e.id === selectedEvent.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === events.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedEvent(events[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Events Header */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Discover our upcoming productions and events
        </p>
      </header>

      {/* Events Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Clickable Poster */}
              <div
                className="relative h-80 cursor-pointer group"
                onClick={() => openModal(event)}
              >
                <img
                  src={event.poster}
                  alt={`${event.title} poster`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full">
                    View Full Poster
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{event.title}</h2>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                    <p>{event.venue}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaUserAlt className="text-red-500 mt-1 flex-shrink-0" />
                    <p>{event.artists}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCalendarAlt className="text-red-500 mt-1 flex-shrink-0" />
                    <p>
                      {event.date} | {event.time}
                    </p>
                  </div>
                </div>

                <Link
                  disabled={event.expired}
                  to={event.ticketUrl}
                  className={`
    mt-6 inline-flex items-center 
    bg-red-600 text-white font-bold 
    py-2 px-6 rounded-full transition-colors
    ${event.expired ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"}
  `}
                >
                  <FaTicketAlt className="mr-2" />
                  {event.expired ? "Expired" : "Get Tickets"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Poster Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-red-500 z-10"
              aria-label="Close modal"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigatePoster("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-red-600 z-10"
              aria-label="Previous poster"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => navigatePoster("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-red-600 z-10"
              aria-label="Next poster"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Poster Content */}
            <div className="bg-gray-800 rounded-lg overflow-hidden max-h-[90vh]">
              <img
                src={selectedEvent.poster}
                alt={`${selectedEvent.title} full poster`}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedEvent.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedEvent.date} | {selectedEvent.time}
                </p>
                <a
                  href={selectedEvent.ticketUrl}
                  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  <FaTicketAlt className="inline mr-2" /> Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Event Highlights Section */}
      <section className="py-20 bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Highlights from Recent Events
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Relive the excitement from our most successful productions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentHighlights.map((event) => (
              <div
                key={event.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <FaPlayCircle className="text-red-500 text-5xl" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{event.date}</p>
                  <p className="text-red-400 text-sm mb-4">{event.stats}</p>

                  <div className="flex space-x-2 mb-4">
                    {event.photos.map((photo, index) => (
                      <div key={index} className="w-1/3 h-20">
                        <img
                          src={photo}
                          alt={`${event.title} ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={event.videoUrl}
                      className="text-red-500 hover:text-red-400 font-medium flex items-center"
                    >
                      Watch Highlights <span className="ml-1">→</span>
                    </a>
                    <button className="text-gray-400 hover:text-white text-sm">
                      View All Photos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Portfolio Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Production Portfolio
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcase of our professional production work across various genres
          </p>
        </div>

        <div className="grid sm:grid-cols-2  gap-6">
          {productions.map((production) => (
            <div
              key={production.id}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={production.image}
                alt={production.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-xl font-bold">{production.title}</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Client: {production.client}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {production.services.map((service) => (
                    <span
                      key={service}
                      className="bg-red-600 text-white text-xs px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={production.videoUrl}
                  className="mt-3 inline-block text-red-500 hover:text-red-400 font-medium text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
