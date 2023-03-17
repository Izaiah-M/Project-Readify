import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./InfoCenter.css";

export const InfoCenter = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allEvents, setAllEvents] = useState(null);

  const handleAddEvent = () => {
    setAllEvents(newEvent);
  };

  return (
    <div className="infocenter-card">
      <h2 style={{ color: "white" }}>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={({ target }) =>
            setNewEvent({ ...newEvent, title: target.value })
          }
        />
        <ReactDatePicker
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />

        <ReactDatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button onClick={handleAddEvent}>Add event</button>
      </div>
    </div>
  );
};
