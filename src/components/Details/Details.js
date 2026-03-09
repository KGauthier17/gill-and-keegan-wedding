import React from "react";
import "./Details.css";

function Details() {
  return (
    <div className="details-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroid/photo5.jpeg" alt="Memory" />
        <p className="polaroid-caption">Us ♥</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroid/photo6.jpeg" alt="Memory" />
        <p className="polaroid-caption">Cliffs of Moher</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroid/photo7.jpeg" alt="Memory" />
        <p className="polaroid-caption">To Love</p>
      </div>

      <div>
        <h2 className="details-title">Wedding Details</h2>
        <p className="details-text">Location, time, dress code, and other information coming soon.</p>
      </div>
    </div>
  );
}

export default Details;