import { useState } from "react";
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
      </div>
    </div>
  );
};
