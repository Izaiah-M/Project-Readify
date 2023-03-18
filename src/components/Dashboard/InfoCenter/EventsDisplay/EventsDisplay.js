import "./EventsDisplay.css";
import dummyIgm from "../../../../images/tim-alex-xG5VJW-7Bio-unsplash.jpg";

export const EventsDisplay = ({ events }) => {
  return (
    <div className="contents">
      <div className="img-container">
        <p>No Books scheduled for today</p>
      </div>
      <p className="pa">Today is the day</p>
    </div>
  );
};
