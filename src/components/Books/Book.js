import React from "react";
import { BookCard } from "./BookCard/BookCard";

import "./Book.css";

export const Book = ({ data, handleSubmit, newEvent, setNewEvent }) => {
  if (!data) {
    return <p>Oops, something went wrong :{"("}.</p>;
  }

  return (
    <div className="Book">
      {data.map((book, index) => {
        return (
          <div key={index + 1} className="Card">
            <BookCard
              image={book.image}
              title={book.title}
              description={book.description}
              author={book.author}
              category={book.category}
              handleSubmit={handleSubmit}
              newEvent={newEvent}
              setNewEvent={setNewEvent}
            />
          </div>
        );
      })}
    </div>
  );
};
