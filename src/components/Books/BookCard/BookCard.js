import { useState } from "react";
import { BookDetails } from "../BookDetails/BookDetails";
import "./BookCard.css";

import "react-datepicker/dist/react-datepicker.css";

import { BsXLg } from "react-icons/bs";

export const BookCard = ({
  image,
  title,
  description,
  author,
  category,
  handleSubmit,
  newEvent,
  setNewEvent,
}) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [clickSchedule, setClickSchedule] = useState(false);

  const handleBookClick = () => {
    setSelectedBook(title);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  const handleAddSchedule = () => {
    setClickSchedule(true);
    console.log("clicked");
  };

  const handleCancel = () => {
    setClickSchedule(false);
    console.log("close");
  };

  return (
    <>
      <div className="book-card" onClick={handleBookClick}>
        <img src={image} alt={title} />
        <p className="p">{title}</p>
      </div>
      {selectedBook && (
        <div className="modal-overlay">
          <div className="modal">
            <BsXLg onClick={handleClose} className="close" />
            <BookDetails
              book={selectedBook}
              image={image}
              title={title}
              description={description}
              author={author}
              category={category}
              handleAddSchedule={handleAddSchedule}
              handleCancel={handleCancel}
              handleSubmit={handleSubmit}
              newEvent={newEvent}
              setNewEvent={setNewEvent}
              clickSchedule={clickSchedule}
            />
          </div>
        </div>
      )}
    </>
  );
};
