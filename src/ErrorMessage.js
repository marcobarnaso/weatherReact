import React from "react";
import "./SeasonDisplay.css";

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <i class="icon-error massive ban icon" />
      <h1>{props.message}</h1>
    </div>
  );
};

export default ErrorMessage;
