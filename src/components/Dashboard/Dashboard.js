import { RandomBook } from "./RandomBook/RandomBook";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import BookRequests from "../../utils/Config";
import { Calendar } from "./Calendar/Calendar";
import { InfoCenter } from "./InfoCenter/InfoCenter";

import { v4 as uuidv4 } from "uuid";

export const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    book: {
      title: "",
      description: "",
      img: "",
    },
    start: "",
    end: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [allEvents, setAllEvents] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();

    const newEventWithId = {
      id: uuidv4(),
      title: newEvent.title,
      book: {
        title: newEvent.book.title,
        description: newEvent.book.description,
        img: newEvent.book.img,
      },
      start: newEvent.start,
      end: newEvent.end,
    };

    setAllEvents([...allEvents, newEventWithId]);

    setNewEvent({
      title: "",
      book: {
        title: "",
        description: "",
        img: "",
      },
      start: "",
      end: "",
    });

    console.log(
      `Event: ${newEventWithId.title} with id:${newEventWithId.id} Successfully added`
    );
  };

  const handleRemoveEvent = (eventId) => {
    setAllEvents(allEvents.filter((event) => event.id !== eventId));
    console.log("Clicked");
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
          <Calendar events={allEvents} onSelectEvent={handleSelectEvent} />
        </div>
      </div>
      <div className="infocenter-container">
        <InfoCenter
          handleSubmit={handleAddEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          allEvents={allEvents}
          selectedDate={selectedDate}
          handleRemoveEvent={handleRemoveEvent}
        />
      </div>
    </div>
  );
};
