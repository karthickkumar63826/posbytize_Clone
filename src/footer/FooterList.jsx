import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FooterList = ({ footerData }) => {
  return (
    <>
      <div className="footerList-Header">{footerData.title}</div>
      <ul className="footerList-List">
        {footerData.List.map((List, index) => (
          <li key={index} className="footerlist-items">
            <MdKeyboardArrowRight className="arrow-icon"  />
            {List}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterList;
