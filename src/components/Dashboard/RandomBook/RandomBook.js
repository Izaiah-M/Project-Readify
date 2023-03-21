import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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
      <div className="randbook-container">
        {books.slice(startIndex, endIndex).map((book, index) => {
          return (
            <div key={index} className="randbook-card">
              <img src={book.image} alt={book.title} />
            </div>
          );
        })}
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>
            <FaArrowRight />
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </>
  );
};
