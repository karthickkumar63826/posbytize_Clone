import React from "react";
import { GiCheckMark } from "react-icons/gi";

const FeatureBottom = ({ FeatureDatas, Id }) => {
  return (
    <>
      {FeatureDatas.map((FeatureData) => {
        return FeatureData.id === Id ? (
          <div className="feature_bottom" key={FeatureData.id}>
            <div className="feature_bottom_container">
              <div className="feature_content">
                <h4
                  className="feature_heading"
                  style={{ color: `${FeatureData.color}` }}
                >
                  {FeatureData.heading}
                </h4>
                <ul className="feature_points">
                  {FeatureData.points.map((point, index) => {
                    return (
                      <li key={index} className="feature_point">
                        <span className="check_icon">
                          <GiCheckMark />
                        </span>
                        <span className="feature_content">{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="feature_image">
                <img src={FeatureData.mainImage} alt="" />
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default FeatureBottom;
