import React, { useState, useRef } from "react";
import "./Testimonials.css";
import TestimonialsData from "./testimonialsData.json";
import TestimonialCard from "./TestimonialCard";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="testimonials">
        <div className="testimonials-container container">
          <div className="testimonials-heading">
            <h1>Customer Testimonials</h1>
            <div className="testimonials-arrow">
              <div className="testimonials-arrow-box" onClick={handlePrevClick}>
                <MdOutlineKeyboardArrowLeft size={35} />
              </div>
              <div className="testimonials-arrow-box" onClick={handleNextClick}>
                <MdOutlineKeyboardArrowRight size={35} />
              </div>
            </div>
          </div>
          <div className="testimonials-carousel">
            <div className="inner-carousel">
              {TestimonialsData.slice(currentIndex, currentIndex + 2).map(
                (testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
