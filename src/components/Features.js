import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <div className="Features">
      <h1>POLARIS FEATURES</h1>
      <div className="FeaturesList">
        <div className="FeaturesListCard">
          <img src="./f1.png" alt="FeaturesCard" />
        </div>

        <div className="FeaturesListCard">
          <img className="pcBuilder" src="./f2.jpg" alt="FeaturesCard" />
        </div>

        <div className="FeaturesListCard">
          <img src="./f3.png" alt="FeaturesCard" />
        </div>
      </div>
    </div>
  );
}

export default Features;
