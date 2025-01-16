import React, { useState } from "react";
import Button from "../../components/Button/button";
import "./bookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];
  const minGuest = 1;
  const maxGuest = 10;

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    date: "",
    time: defaultTime,
    guests: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => onFormSubmit(e, formValues)}
        className="form-container"
      >
        <div className="inputs-section">
          <div className="input-container">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className={isFormSubmitted && !formValues.fullName ? "error" : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={isFormSubmitted && !formValues.email ? "error" : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className={isFormSubmitted && !formValues.date ? "error" : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <select
              id="time"
              name="time"
              className={isFormSubmitted && !formValues.time ? "error" : ""}
              value={formValues.time}
              onChange={handleInputChange}
            >
              <option value="" hidden>
                Select Time
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="guests" className="form-label">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min={minGuest}
              max={maxGuest}
              className={isFormSubmitted && !formValues.guests ? "error" : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"

              className={isFormSubmitted && !formValues.occasion ? "error" : ""}
              onChange={handleInputChange}
            >
              <option value="" hidden>
                Select Occasion
              </option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="reservation-button">
          <Button title="Confirm Reservation" type="submit" />
        </div>
      </form>

    </>
  );
};

export default BookingForm;