import React from "react";
import { reviews } from "../assets/Data/data.js";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  return (
    <section id="reviews" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reviews From Our Clients
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          What our clients say about working with us.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {/* Star Rating (simplified) */}
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-red-500 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-4">
              <FaQuoteLeft className="inline-block mr-2 text-red-500" />
              {review.review}
            </p>
            <p className="text-gray-400 font-medium">
              - {review.name}, {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
