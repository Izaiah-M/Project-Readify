// import { Calendar } from "rsuite";
import { CalendarCard } from "./CalendarCard/CalendarCard";
import "./Calender.css";

export const Calendar = ({ events, onSelectEvent }) => {
  return (
    <div className="calender-card">
      <CalendarCard events={events} onSelectEvent={onSelectEvent} />
    </div>
  );
};
