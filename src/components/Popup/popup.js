import React from "react";
import "./popup.css";
import Button from "../Button/button";
import confimed from "../../assets/confimed.png"

const Popup = ({ title, description, onClose }) => {
  return (
    <>
      <div data-testid="popup-background" className="popup-background" onClick={onClose}></div>
      <div className="popup">
        <h2 className="popup-title">{title}</h2>
        <img className="popup-image" src={confimed} alt="confirmed" />
        <p className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
