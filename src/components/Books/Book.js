import React from "react";
import { BookCard } from "./BookCard/BookCard";

import "./Book.css";

export const Book = ({ data }) => {
  return (
    <div className="Book">
      {data.map((book, index) => {
        return (
          <div key={index} className="Card">
            <BookCard image={book.image} title={book.title} />
          </div>
        );
      })}
    </div>
  );
};
