import React, { useState } from "react";
import AccordionDatas from "./accordionData.json";
import { FaCaretRight, FaCaretUp } from "react-icons/fa";
import "./Accordion.css";

const Accordion = () => {
  const [openedIndexes, setOpenedIndexes] = useState([]);

  const handleClick = (index) => {
    setOpenedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((ques) => ques !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="accordion-container container">
      <div className="accordion-header">
        <h1> Frequently Asked Questions (FAQ)</h1>
      </div>

      {AccordionDatas.map((accordionData, index) => (
        <div key={index} className="accordion-full">
          <div
            className={
              openedIndexes.includes(index) ? "question-open" : "question"
            }
            onClick={() => handleClick(index)}
          >
            {openedIndexes.includes(index) ? <FaCaretUp /> : <FaCaretRight />}
            {accordionData.question}
          </div>
          {openedIndexes.includes(index) && (
            <div className="answer">
              {accordionData.topic ? (
                <>
                  <div className="topic">{accordionData.topic}</div>
                  <div className="complete-answer">
                    {accordionData.answer.map((accordAnswer, subIndex) => (
                      <p key={subIndex}>
                        <span className="accordAnswer-heading">
                          {accordAnswer.heading}
                        </span>{" "}
                        {accordAnswer.subAnswer}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <p>{accordionData.answer}</p>
              )}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
