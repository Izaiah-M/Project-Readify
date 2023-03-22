import { RandomBook } from "./RandomBook/RandomBook";
import "./Dashboard.css";
import { Calendar } from "./Calendar/Calendar";
import { InfoCenter } from "./InfoCenter/InfoCenter";

export const Dashboard = ({
  allEvents,
  books,
  onSelectEvent,
  handleSubmit,
  newEvent,
  setNewEvent,
  selectedDate,
  handleRemoveEvent,
}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-comp">
        <div className="rand-book">
          <RandomBook books={books} />
        </div>
        <div className="calender-container">
          <Calendar events={allEvents} onSelectEvent={onSelectEvent} />
        </div>
      </div>
      <div className="infocenter-container">
        <InfoCenter
          handleSubmit={handleSubmit}
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
