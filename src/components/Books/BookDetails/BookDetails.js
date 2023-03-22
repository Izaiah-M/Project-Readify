import { useState } from "react";
import "./BookDetails.css";
import ReadMoreReadless from "./ReadMoreReadless";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BookDetails = ({
  image,
  title,
  author,
  description,
  category,
  handleAddSchedule,
  handleSubmit,
  handleCancel,
  newEvent,
  setNewEvent,
  clickSchedule,
}) => {
  // const [clickSchedule, setClickSchedule] = useState(false);

  return (
    <div className="details">
      <div className="grid-container">
        <div className="grid-image">
          <img src={image} alt={title} />
          <p>{title}</p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-details">
          <div className="description">
            <ReadMoreReadless limit={150} text={description} />
          </div>
          <div>
            <p>Authors: {author}</p>
          </div>

          <div>
            <p>Category: {category}</p>
          </div>
          <button onClick={handleAddSchedule}>Add to Schedule</button>

          <div className="scheduleForm">
            {clickSchedule && (
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    required
                    placeholder={`Read ${title}`}
                    value={newEvent.title}
                    onChange={({ target }) =>
                      setNewEvent({
                        ...newEvent,
                        title: target.value,
                        book: {
                          title: title,
                          description: description,
                          img: image,
                        },
                      })
                    }
                  />

                  <div className="selectday">
                    <ReactDatePicker
                      className="start-date"
                      required
                      placeholderText="Start Date"
                      value={newEvent.start}
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
                  <input
                    type="submit"
                    value="Add Event"
                    className="submit-btn"
                  />
                </form>
                <button className="cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
