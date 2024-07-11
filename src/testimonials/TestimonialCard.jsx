import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="item">
      <div className="feedback_item">
        <div className="feedback_author">
          <div className="author">
            <div className="img">
              <img src={testimonial.image} alt="" />
            </div>

            {Array.isArray(testimonial.title) ? (
              <div className="authorSub_name">
                <h5>{testimonial.title[0]}</h5>
                <h6>{testimonial.title[1]}</h6>
              </div>
            ) : (
              <div className="author_name">
                <h5>{testimonial.title}</h5>
              </div>
            )}
          </div>
          <div className="rating">
            <div className="stars">
              {stars.map((_, index) => (
                <FaRegStar key={index} style={{ color: "gold" }} />
              ))}
            </div>
          </div>
        </div>
        <p className="testimonial_content">{testimonial.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
