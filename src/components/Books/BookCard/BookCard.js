import React from "react";

export const BookCard = ({ data }) => {
  return (
    <div>
      {data.map((book, index) => {
        return <p key={index}>{book.volumeInfo.title}</p>;
      })}
    </div>
  );
};
