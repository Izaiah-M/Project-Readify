import React from "react";
import "./BookDetails.css";
import ReadMoreReadless from "./ReadMoreReadless";

export const BookDetails = ({
  image,
  title,
  author,
  description,
  category,
}) => {
  return (
    <div className="details">
      <div class="grid-container">
      <div class="grid-image"></div>
      <div className="book-img">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
      </div>

      <div class="grid-container">
      <div class="grid-details"></div>
      <div className="description">
        <ReadMoreReadless limit={150} text={description} />
      </div>

      <div>
        <p>Authors: {author}</p>
      </div>

      <div>
        <p>Category: {category}</p>
      </div>
    </div>
    </div>
  );
};
