import React from "react";
import "./Ceremony.css";

function Ceremony() {
  return (
    <div className="ceremony-container">      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroids/photo8.jpeg" alt="Memory" />
        <p className="polaroid-caption">Portugal</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroids/photo9.jpeg" alt="Memory" />
        <p className="polaroid-caption">The Big House</p>
      </div>
      <div className="ceremony-content">
        <h2 className="ceremony-title">The Ceremony</h2>
        <p className="ceremony-text">The ceremony will take place at Bull Point Estate, the full address can be found in the Details section above.</p>
        <p className="ceremony-text">The ceremony will begin promptly at 3:00 PM. We kindly ask guests to arrive by 2:30 PM to allow time to find seating and get settled before we begin.</p>
        <p className="ceremony-text">The ceremony is planned to be outdoors, weather pending, but can be moved indoors if the weather does not look promising.</p>
      </div>
    </div>
  );
}

export default Ceremony;