import { useState } from "react";
import { BookDetails } from "../BookDetails/BookDetails";
import "./BookCard.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BsXLg } from "react-icons/bs";

export const BookCard = ({ image, title, description, author, category }) => {
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
            />
            <button className="add-schedule" onClick={handleAddSchedule}>
              Add to schedule
            </button>
            <div className="scheduleForm">
              {clickSchedule && (
                <div>
                  <form>
                    <input type="text" required placeholder="Add Title" />

                    <div className="selectday">
                      <ReactDatePicker
                        className="start-date"
                        required
                        placeholderText="Start Date"
                      />

                      <ReactDatePicker
                        className="end-date"
                        required
                        placeholderText="End Date"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add Event"
                      className="submit-btn"
                    />
                  </form>
                  <button className="add-schedule" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
