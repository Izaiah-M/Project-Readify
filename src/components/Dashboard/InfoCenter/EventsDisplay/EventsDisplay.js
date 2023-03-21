import "./EventsDisplay.css";
// import format from "date-fns/format";
import { BsX } from "react-icons/bs";

export const EventsDisplay = ({ events, selectedDate, onRemoveEvent }) => {
  const filteredEvents = selectedDate
    ? events.filter(
        (event) =>
          event.start.getFullYear() === selectedDate.getFullYear() &&
          event.start.getMonth() === selectedDate.getMonth() &&
          event.start.getDate() === selectedDate.getDate()
      )
    : [];

  // console.log(events);

  return (
    <div className="contents">
      <div className="img-container">
        {filteredEvents.books ? (
          filteredEvents.map((event) =>
            event.book.img ? (
              <img key={event.id} src={event.book.img} alt="book img" />
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
            <div key={event.id} className="task">
              <ul>
                <li className="event">{event.title}</li>
              </ul>
              <BsX
                className="close-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveEvent(event.id);
                }}
              />
            </div>
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
