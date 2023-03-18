import { RandomBook } from "./RandomBook/RandomBook";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import BookRequests from "../../utils/Config";
import { Calendar } from "./Calendar/Calendar";
import { InfoCenter } from "./InfoCenter/InfoCenter";

export const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allEvents, setAllEvents] = useState([]);

  const handleAddEvent = (e) => {
    e.preventDefault();

    setAllEvents([...allEvents, newEvent]);

    setNewEvent({
      title: "",
      start: "",
      end: "",
    });

    console.log(`Event: ${newEvent.title} Successfully added`);
  };

  const getBookSuggestions = async () => {
    const results = await BookRequests.getRandomBook();

    // TODO: Fix the problem
    // console.log("getBookSuggestions called");

    // console.log(results);
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
          <Calendar events={allEvents} />
        </div>
      </div>
      <div className="infocenter-container">
        <InfoCenter
          handleSubmit={handleAddEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          // ToDO: Takes in All events to showcase them for that specific day
        />
      </div>
    </div>
  );
};
