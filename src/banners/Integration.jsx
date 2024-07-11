import React from "react";
import "./Integration.css";

const Integration = () => {
  const softwareImages = [
    "https://posbytz.com/wp-content/uploads/2021/09/deliveroo.png",
    "https://posbytz.com/wp-content/uploads/2021/09/careem.png",
    "https://posbytz.com/wp-content/uploads/2021/09/sunmi.png",
    "https://posbytz.com/wp-content/uploads/2021/09/zomato.png",
    "https://posbytz.com/wp-content/uploads/2021/09/dunzo.png",
    "https://posbytz.com/wp-content/uploads/2021/09/tally.png",
    "https://posbytz.com/wp-content/uploads/2021/09/tidypay.png",
    "https://posbytz.com/wp-content/uploads/2022/08/swiggy.png",
    "https://posbytz.com/wp-content/uploads/2021/09/talabat.png",
    "https://posbytz.com/wp-content/uploads/2021/09/stripe.png",
    "https://posbytz.com/wp-content/uploads/2021/09/razorpay.png",
    "https://posbytz.com/wp-content/uploads/2021/09/quickbooks.png",
    "https://posbytz.com/wp-content/uploads/2021/09/xero.png",
    "https://posbytz.com/wp-content/uploads/2021/09/cashfree.png",
    "https://posbytz.com/wp-content/uploads/2021/09/amazon.png",
    "https://posbytz.com/wp-content/uploads/2021/09/jahez.png",
    "https://posbytz.com/wp-content/uploads/2021/08/20.png",
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
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Integration;
