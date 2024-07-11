import React from "react";
import "./Reason.css";

const Reason = () => {
  return (
    <section className="reasons">
      <h2 className="reasons--title1">
        Reasons to Choose PosBytz ERP Software
      </h2>
      <h3>
        One of Best Cloud ERP Software for <br />
        Small & Medium businesses
      </h3>
      <h2 className="reasons--title2">PosBytz ERP</h2>
      <div className="reasons--wrapper">
        <div className="reasons--container">
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-2.png"
            alt=""
          />
          <h4 style={{ color: "#ff8c00" }}>POS</h4>
          <strong>Simplifying billing, Empowering Businesses</strong>
          <p>
            Enhance your business efficiency with our cutting-edge{" "}
            <a href="/">Point of Sale</a> solutions works on{" "}
            <span>Windows POS, Android POS</span> and <span>IPAD POS</span>. Our
            Cloud POS system empowers your business for growth and success
          </p>
        </div>
        <div className="reasons--container" style={{ borderColor: "#A90030" }}>
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-1.png"
            alt=""
          />
          <h4 style={{ color: "#A90030" }}>Ecommerce & Online ordering</h4>
          <strong>Omnichannel solution, Unified commerce</strong>
          <p>
            Experience the future of retail with our comprehensive{" "}
            <a href="/">Omnichannel Ecommerce</a> solution. Seamlessly integrate
            your online and offline sales channels, creating a unified commerce
            experience for your customers.
          </p>
        </div>
        <div className="reasons--container" style={{ borderColor: "#24007e" }}>
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-123.png"
            alt=""
          />
          <h4 style={{ color: "#24007e" }}>Inventory Management</h4>
          <strong>Efficient Inventory Control, Amplified Success</strong>
          <p>
            Efficiently manage your inventory with our advanced Inventory
            Management system. Gain real-time visibility into stock levels,
            track product movement, and automate reordering processes for
            optimal efficiency. Streamline operations, reduce costs, and ensure
            inventory accuracy with our powerful solution.
          </p>
        </div>
        <div className="reasons--container" style={{ borderColor: "#1aa480" }}>
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-18.png"
            alt=""
          />
          <h4 style={{ color: "#1aa480" }}>Accounting & Finance</h4>
          <strong>Simplified Accounting and Finances</strong>
          <p>
            From accurate bookkeeping to robust financial reporting, our
            platform provides the tools and insights you need to make informed
            business decisions. Simplify tax compliance, streamline financial
            processes and ERP Financial reports
          </p>
        </div>
        <div className="reasons--container" style={{ borderColor: "#6C0758" }}>
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-19.png"
            alt=""
          />
          <h4 style={{ color: "#6C0758" }}>CRM</h4>
          <strong>Nurturing Relationships, Maximizing Growth</strong>
          <p>
            Unlock the power of customer relationships with our industry-leading
            CRM solution. Seamlessly manage and nurture your customer
            interactions by sending personalised discounts and build your loyal
            customer base.
          </p>
        </div>
        <div className="reasons--container" style={{ borderColor: "brown" }}>
          <img
            src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-11.png"
            alt=""
          />
          <h4 style={{ color: "brown" }}>HR & Payroll</h4>
          <strong>Streamlined HR & Payroll, Empowering People</strong>
          <p>
            Elevate your HR and Payroll processes with our integrated solution.
            Simplify employee management, automate payroll calculations, and
            ensure compliance with ease. Streamline onboarding, time tracking,
            benefits administration, and more, all within a single,
            user-friendly ERP platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reason;
