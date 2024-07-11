import React from "react";

const FeatureTop = ({ FeatureDatas, setFeatureId, featureId }) => {
  const handleClick = (id) => {
    setFeatureId(id);
  };

  return (
    <div className="feature_top">
      <div className="feature_heading">
        <h2>Feature of Our ERP Software?</h2>
      </div>
      <div className="feature_list">
        {FeatureDatas.map((featureData, index) => (
          <div
            className={`feature_icon_box ${
              featureId === featureData.id ? "active" : ""
            }`}
            key={index}
            onClick={() => handleClick(featureData.id)}
          >
            <img src={featureData.icon} alt={featureData.iconName} />
            <p style={{ color: `${featureData.color}` }}>
              {featureData.iconName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTop;
