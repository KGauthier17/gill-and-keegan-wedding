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
      <div>
        <h2 className="ceremony-title">The Ceremony</h2>
        <p className="ceremony-text">Join us as we say “I do” at a beautiful location.</p>
      </div>
    </div>
  );
}

export default Ceremony;