import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "brrrrr, it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const test = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${test.iconName} icon`} />
      <h1>{test.text}</h1>
      <i className={`icon-right massive ${test.iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
