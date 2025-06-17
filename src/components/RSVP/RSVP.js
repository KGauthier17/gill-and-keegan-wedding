import React from "react";
import "./RSVP.css";

function RSVP() {
  return (
    <div className="rsvp-container">
      <div>
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-text">Let us know if you can join the celebration!</p>
        <button className="rsvp-button">Respond Now</button>
      </div>
    </div>
  );
}

export default RSVP;