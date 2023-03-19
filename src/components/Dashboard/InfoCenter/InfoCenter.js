import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EventsDisplay } from "./EventsDisplay/EventsDisplay";

import "./InfoCenter.css";

export const InfoCenter = ({
  handleSubmit,
  newEvent,
  setNewEvent,
  allEvents,
  selectedDate,
}) => {
  return (
    <div className="infocenter-card">
      <div className="displaying">
        <EventsDisplay events={allEvents} selectedDate={selectedDate} />
      </div>
      <h2 style={{ color: "white" }}>Add New Event</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Add Title"
            value={newEvent.title}
            onChange={({ target }) =>
              setNewEvent({ ...newEvent, title: target.value })
            }
          />
          <ReactDatePicker
            required
            value={newEvent.start}
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />

          <ReactDatePicker
            value={newEvent.end}
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <input type="submit" value="Add Event" />
        </form>
      </div>
    </div>
  );
};
