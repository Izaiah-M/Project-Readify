import React from "react";

export const BookCard = ({ data }) => {
  return (
    <div>
      {data.map((book, index) => {
        return (
          <div key={index}>
            <p>{book.volumeInfo.title}</p>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt=""
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};
