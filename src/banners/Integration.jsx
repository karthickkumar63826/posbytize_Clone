import React from "react";
import "./Integration.css";
import { motion } from "framer-motion";
import { fadeIn } from "./fadeIn";

const Integration = () => {
  const softwareImages = [
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/deliveroo.png",
      delay: 0.1,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/careem.png",
      delay: 0.2,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/sunmi.png",
      delay: 0.3,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/zomato.png",
      delay: 0.4,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/dunzo.png",
      delay: 0.5,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/tally.png",
      delay: 0.6,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/tidypay.png",
      delay: 0.7,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2022/08/swiggy.png",
      delay: 0.8,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/talabat.png",
      delay: 0.9,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/stripe.png",
      delay: 1.0,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/razorpay.png",
      delay: 1.1,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/quickbooks.png",
      delay: 1.2,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/xero.png",
      delay: 1.3,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/cashfree.png",
      delay: 1.4,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/amazon.png",
      delay: 1.5,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/09/jahez.png",
      delay: 1.6,
    },
    {
      url: "https://posbytz.com/wp-content/uploads/2021/08/20.png",
      delay: 1.7,
    },
  ];

  return (
    <div className="integrations">
      <div className="integrations_content">
        <h1>Integrations</h1>
        <p>
          Connect <strong>third-party software integrations</strong> to PostBytz
          to keep your business running smoothly
        </p>
      </div>
      <div className="integrations_icons">
        {softwareImages.map((image, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            variants={fadeIn(index, image.delay)}
            viewport={{ once: false }}
          >
            <img src={image.url} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
