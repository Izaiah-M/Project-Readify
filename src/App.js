import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Search } from "./components/Books/Search";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MySideNav } from "./components/SideNav/SideNav";
import BookRequests from "./utils/Config";

import { v4 as uuidv4 } from "uuid";

function App() {
  const ROUTES = {
    DASHBOARD: "/",
    BOOKSEARCH: "/book-search",
    UPCOMING: "/upcoming",
  };

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

  const gettingLocalStorage = () => {
    const retrievedEventsStr = localStorage.getItem("events");
    const retrievedEvents = JSON.parse(retrievedEventsStr, (key, value) => {
      if (key === "start" || key === "end") {
        return new Date(value);
      } else {
        return value;
      }
    });
    return retrievedEvents;
  };

  const currentEvents = gettingLocalStorage();

  // const [allEvents, setAllEvents] = useState([]);
  const [allEvents, setAllEvents] = useState(currentEvents || []);

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
    const updatedEvents = allEvents.filter((event) => event.id !== eventId);
    setAllEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
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

  // To handle adding items to our local storage.
  useEffect(() => {
    if (allEvents.length > 0) {
      localStorage.setItem("events", JSON.stringify(allEvents));
    }
  }, [allEvents]);

  return (
    <div className="App">
      <MySideNav />
      <main>
        <Routes>
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <Dashboard
                books={books}
                onSelectEvent={handleSelectEvent}
                handleSubmit={handleAddEvent}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                allEvents={allEvents}
                selectedDate={selectedDate}
                handleRemoveEvent={handleRemoveEvent}
              />
            }
          />
          <Route
            path={ROUTES.BOOKSEARCH}
            element={
              <Search
                handleBookSubmit={handleAddEvent}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
