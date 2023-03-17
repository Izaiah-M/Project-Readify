import "./CalendarCard.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DatePicker } from "react-datepicker";
import { useState } from "react";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

const events = [
  {
    title: "Finish Application",
    allDay: true,
    start: new Date(2023, 2, 23),
    end: new Date(2023, 2, 23),
  },

  {
    title: "Buy sugar",
    start: new Date(2023, 2, 10),
    end: new Date(2023, 2, 10),
  },

  {
    title: "Find Love",
    start: new Date(2023, 2, 15),
    end: new Date(2023, 2, 15),
  },
];

export const CalendarCard = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="calendar-card">
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};
