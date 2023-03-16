import { RandomBook } from "./RandomBook/RandomBook";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import BookRequests from "../../utils/Config";
import { Calendar } from "./Calendar/Calendar";
import { InfoCenter } from "./InfoCenter/InfoCenter";

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
      <div className="dashboard-comp">
        <header>
          <RandomBook books={books} />
        </header>
        <div className="calender-container">
          <Calendar />
        </div>
      </div>
      <div className="infocenter-container">
        <InfoCenter />
      </div>
    </div>
  );
};
