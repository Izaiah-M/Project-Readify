import { useState } from "react";
import { BookDetails } from "../BookDetails/BookDetails";
import "./BookCard.css";

export const BookCard = ({ image, title, description, author, category }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = () => {
    setSelectedBook(title);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <div className="book-card" onClick={handleBookClick}>
        <img src={image} alt={title} />
        <p className="p">{title}</p>
      </div>
      {selectedBook && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal">
            <BookDetails
              book={selectedBook}
              image={image}
              title={title}
              description={description}
              author={author}
              category={category}
            />
            <button onClick={handleClose}>Close</button>
            <button>Add to schedule</button>
          </div>
        </div>
      )}
    </>
  );
};
