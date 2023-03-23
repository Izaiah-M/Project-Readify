import React from "react";
import { BookCard } from "./BookCard/BookCard";

import "./Book.css";

export const Book = ({
  data,
  handleSubmit,
  newEvent,
  setNewEvent,
  searched,
}) => {
  if (!data) {
    return (
      <p style={{ margin: "200px", fontWeight: "bolder" }}>
        Sorry, no results for your search :{"("}
      </p>
    );
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
              searched={searched}
            />
          </div>
        );
      })}
    </div>
  );
};
