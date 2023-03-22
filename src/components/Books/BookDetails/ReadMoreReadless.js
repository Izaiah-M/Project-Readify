import React, { useState } from "react";
import "./BookDetails.css";
import "./BookDetails.js";

const ReadMoreReadless = ({ limit, text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="read-more-read-less">
      {showFullText ? (
        <p>{text}</p>
      ) : (
        <p>
          {text.substr(0, limit)}
          <span className="dots">...</span>
        </p>
      )}
      <button className="btn" onClick={toggleText}>
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreReadless;
