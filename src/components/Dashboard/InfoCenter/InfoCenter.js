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
  handleRemoveEvent,
}) => {
  return (
    <div className="infocenter-card">
      <div className="displaying">
        <EventsDisplay
          events={allEvents}
          selectedDate={selectedDate}
          onRemoveEvent={handleRemoveEvent}
        />
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

          <div className="selectday">
            <ReactDatePicker
              className="start-date"
              required
              value={newEvent.start}
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />

            <ReactDatePicker
              className="end-date"
              required
              value={newEvent.end}
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
          <input type="submit" value="Add Event" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};
