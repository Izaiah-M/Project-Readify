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
        {filteredEvents.books ? (
          filteredEvents.map((event) =>
            event.book.img ? (
              <img key={event.id} src={event.book.img} alt="" />
            ) : (
              <p>No book Image to display</p>
            )
          )
        ) : (
          <p>
            No books scheduled for {selectedDate && selectedDate.toDateString()}
          </p>
        )}
      </div>
      <div className="event-container">
        {filteredEvents.length ? (
          filteredEvents.map((event) => (
            <ul>
              <li key={event.id} className="event">
                {event.title}
              </li>
            </ul>
          ))
        ) : (
          <p className="no-events">
            No events scheduled for{" "}
            {selectedDate && selectedDate.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
};
