import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import img from "../../../assets/user.jpg";
// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Absolutely love the food here! The delivery was super fast, and everything was fresh and delicious. Highly recommend! 🍕🚀",
    rating: 5,
    image: "/assets/user1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    review:
      "Great experience! The discounts and deals make it even better. Will definitely order again. 🥗👌",
    rating: 4,
    image: "/assets/user2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "A must-try! The customer service is excellent, and the food quality is top-notch. 😍",
    rating: 5,
    image: "/assets/user3.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-[4.5vw] py-12 my-32 text-center relative">
      <h2 className="text-3xl lg:text-4xl font-bold text-green-600 mb-6">
        💬 What Our Customers Say
      </h2>

      {/* 3D Flip Effect */}
      <div className="relative max-w-3xl mx-auto min-h-[300px] perspective-1000">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="absolute w-full"
            animate={{
              rotateY: index === current ? 0 : 180,
              opacity: index === current ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg text-gray-800">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-green-600 mb-3 mx-auto" />

              {/* Review Text */}
              <p className="text-lg italic">"{testimonial.review}"</p>

              {/* Star Ratings */}
              <div className="flex justify-center my-4 text-yellow-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-xl" />
                ))}
              </div>

              {/* User Info */}
              <div className="flex flex-col items-center mt-4">
                <img
                  src={img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-green-600"
                />
                <h4 className="mt-2 text-lg font-semibold">{testimonial.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ensure Proper Spacing Below Testimonials */}
      <div className="h-20"></div>
    </section>
  );
};

export default Testimonials;
