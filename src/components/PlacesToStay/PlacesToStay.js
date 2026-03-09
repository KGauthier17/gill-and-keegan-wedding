import React from "react";
import "./PlacesToStay.css";

function PlacesToStay() {
  return (
    <div className="places-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroid/photo10.jpeg" alt="Memory" />
        <p className="polaroid-caption">Nashville</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroid/photo11.jpeg" alt="Memory" />
        <p className="polaroid-caption">Sugarloaf</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroid/photo12.jpeg" alt="Memory" />
        <p className="polaroid-caption">Nashville</p>
      </div>
      <div className="polaroid polaroid-4">
        <img src="/assets/images/polaroid/photo13.jpeg" alt="Memory" />
        <p className="polaroid-caption">Coldplay</p>
      </div>

      <div>
        <h2 className="places-title">Places to Stay</h2>
        <p className="places-text">Here are some recommendations for hotels and rentals nearby.</p>
      </div>
    </div>
  );
}

export default PlacesToStay;