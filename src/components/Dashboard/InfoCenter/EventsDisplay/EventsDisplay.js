import "./EventsDisplay.css";
// import format from "date-fns/format";

export const EventsDisplay = ({ events, selectedDate }) => {
  const filteredEvents = selectedDate
    ? events.filter(
        (event) =>
          event.start.getFullYear() === selectedDate.getFullYear() &&
          event.start.getMonth() === selectedDate.getMonth() &&
          event.start.getDate() === selectedDate.getDate()
      )
    : [];

  return (
    <div className="contents">
      <div className="img-container">
        {filteredEvents.length ? (
          filteredEvents.map((event) => (
            <img key={event.id} src={event.book.img} alt="" />
          ))
        ) : (
          <p>
            No books scheduled for {selectedDate && selectedDate.toDateString()}
          </p>
        )}
      </div>
      <div className="event-container">
        {filteredEvents.length ? (
          filteredEvents.map((event) => <p key={event.id}>{event.title}</p>)
        ) : (
          <p>
            No events to display for today
            {selectedDate && selectedDate.toDateString()}
          </p>
        )}
      </div>
      {!filteredEvents.length && (
        <p>
          No events scheduled for {selectedDate && selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};
