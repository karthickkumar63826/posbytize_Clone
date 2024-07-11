import React, { useEffect, useState } from "react";
import FeatureDatas from "./FeatureData.json";
import FeatureTop from "./FeatureTop";
import "./Feature.css";
import FeatureBottom from "./FeatureBottom";

const Feature = () => {
  const [featureId, setFeatureId] = useState(1);

  return (
    <>
      <div className="feature_box">
        <FeatureTop
          FeatureDatas={FeatureDatas}
          setFeatureId={setFeatureId}
          featureId={featureId}
        />
        <FeatureBottom FeatureDatas={FeatureDatas} Id={featureId} />
      </div>
    </>
  );
};

export default Feature;
