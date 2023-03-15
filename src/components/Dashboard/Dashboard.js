import { RandomBook } from "./RandomBook/RandomBook";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import BookRequests from "../../utils/Config";

export const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const getBookSuggestions = async () => {
    const results = await BookRequests.getRandomBook();

    // Fix the problem
    console.log("getBookSuggestions called");

    console.log(results);
    setBooks(results);

    return results;
  };

  useEffect(() => {
    if (books.length === 0) {
      getBookSuggestions();
    }
  }, [books]);

  return (
    <div className="dashboard">
      <header>
        <RandomBook books={books} />
      </header>
      <p>Readiffy!!</p>
    </div>
  );
};
