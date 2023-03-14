import React from "react";

export const BookCard = ({ data }) => {
  return (
    <div>
      {data.map((book, index) => {
        return (
          <div key={index}>
            <p>{book.title}</p>
            <img src={book.image} alt="" key={index} />
          </div>
        );
      })}
    </div>
  );
};
