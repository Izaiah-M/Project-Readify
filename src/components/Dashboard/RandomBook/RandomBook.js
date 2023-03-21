
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./RandomBook.css";

export const RandomBook = ({ books }) => {
  const booksPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(books.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <p>Reading Ideas</p>
      <div className="randbook-container">
        {currentPage > 1 && (
          <button className="randbook-arrow randbook-arrow-left" onClick={handlePrevPage}>
            <FaArrowLeft />
          </button>
        )}
        {books.slice(startIndex, endIndex).map((book, index) => {
          return (
            <div key={index} className="randbook-card">
              <img src={book.image} alt={book.title} />
            </div>
          );
        })}
        {currentPage < totalPages && (
          <button className="randbook-arrow randbook-arrow-right" onClick={handleNextPage}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </>
  );
};

