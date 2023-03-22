import React from "react";
import { BookCard } from "./BookCard/BookCard";

import "./Book.css";

export const Book = ({ data, handleSubmit, newEvent, setNewEvent }) => {
  return (
    <div className="Book">
      {data !== null ? (
        data.map((book, index) => {
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
        })
      ) : (
        <p>:{"("} Oops something went wrong</p>
      )}
    </div>
  );
};
