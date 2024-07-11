import React, { useEffect } from "react";
import { useState } from "react";

import "./Customer.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Customer = () => {
  const customers = [
    "https://posbytz.com/wp-content/uploads/2023/09/maaza.png",
    "https://posbytz.com/wp-content/uploads/2023/09/Kebab-time.png",
    "https://posbytz.com/wp-content/uploads/2023/02/shero-01.png",
    "https://posbytz.com/wp-content/uploads/2023/07/msfood.png",
    "https://posbytz.com/wp-content/uploads/2023/09/Al-karakand-e1695319053772.png",
    "https://posbytz.com/wp-content/uploads/2023/09/Jazz-cafe.jpg",
    "https://posbytz.com/wp-content/uploads/2023/09/HOT-POT.png",
    "https://posbytz.com/wp-content/uploads/2023/09/Diamond-Restaurant.png",
  ];

  const [swiperIndexes, setSwiperIndexes] = useState({
    swiper1: 0,
    swiper2: 4,
    swiper3: 6,
  });

  const handleNext = (swiper) => {
    setSwiperIndexes((prevIndexes) => ({
      ...prevIndexes,
      [swiper]: (prevIndexes[swiper] + 1) % customers.length,
    }));
  };

  const handlePrev = (swiper) => {
    setSwiperIndexes((prevIndexes) => ({
      ...prevIndexes,
      [swiper]: (prevIndexes[swiper] - 1 + customers.length) % customers.length,
    }));
  };

  const getCustomersToShow = (startIndex) => {
    return [
      customers[startIndex % customers.length],
      customers[(startIndex + 1) % customers.length],
      customers[(startIndex + 2) % customers.length],
      customers[(startIndex + 3) % customers.length],
    ];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSwiperIndexes((prevIndexes) => ({
        swiper1: (prevIndexes.swiper1 + 1) % customers.length,
        swiper2: (prevIndexes.swiper2 + 1) % customers.length,
        swiper3: (prevIndexes.swiper3 + 1) % customers.length,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer container">
      <div className="customer_content">
        <div className="customer_heading">
          <h2>Trusted by </h2>
          <h2 className="bold_heading">great brands</h2>
          <p>
            over 5000+ business in 15 countries have registered with PostBytz.
          </p>
        </div>
        <div className="customer_button">
          <button>Get started for free</button>
        </div>
      </div>
      <div className="customer_list">
        <div className="customers-list__swiper">
          <div className="customer_btn" onClick={() => handlePrev("swiper1")}>
            <MdOutlineKeyboardArrowLeft />
          </div>

          <div className="swipe">
            {getCustomersToShow(swiperIndexes.swiper1).map(
              (customer, index) => (
                <div className="customer_icon" key={index}>
                  <img src={customer} alt="" />
                </div>
              )
            )}
          </div>
          <div className="customer_btn" onClick={() => handleNext("swiper1")}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="customers-list__swiper">
          <div className="customer_btn" onClick={() => handlePrev("swiper2")}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="swipe ">
            {getCustomersToShow(swiperIndexes.swiper2).map(
              (customer, index) => (
                <div className="customer_icon" key={index}>
                  <img src={customer} alt="" />
                </div>
              )
            )}
          </div>
          <div className="customer_btn" onClick={() => handleNext("swiper2")}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="customers-list__swiper">
          <div className="customer_btn" onClick={() => handlePrev("swiper3")}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="swipe ">
            {getCustomersToShow(swiperIndexes.swiper3).map(
              (customer, index) => (
                <div className="customer_icon" key={index}>
                  <img src={customer} alt="" />
                </div>
              )
            )}
          </div>
          <div className="customer_btn" onClick={() => handleNext("swiper3")}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
