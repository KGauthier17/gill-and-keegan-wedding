import React from "react";
import "./PlacesToStay.css";

function PlacesToStay() {
  return (
    <div className="places-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroids/photo10.jpeg" alt="Memory" />
        <p className="polaroid-caption">Nashville</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroids/photo11.jpeg" alt="Memory" />
        <p className="polaroid-caption">Sugarloaf</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroids/photo12.jpeg" alt="Memory" />
        <p className="polaroid-caption">Nashville</p>
      </div>
      <div className="polaroid polaroid-4">
        <img src="/assets/images/polaroids/photo13.jpeg" alt="Memory" />
        <p className="polaroid-caption">Coldplay</p>
      </div>

      <div className="places-content">
        <h2 className="places-title">Places to Stay</h2>
        <p className="places-text">Here are some recommendations for accommodations nearby:</p>
        <ul className="places-list">
          <li>We've created a room block at The Best Western in Liverpool, NS. You can book <a href="https://www.bestwestern.com/en_US/book/hotel-rooms.65014.html?groupId=J72JR5B7" target="_blank" rel="noopener noreferrer">here</a> for a discounted rate.</li>
          <li><a href="https://www.quarterdeck.ca/" target="_blank" rel="noopener noreferrer">The QuarterDeck</a></li>
          <li><a href="https://www.whitepoint.com/" target="_blank" rel="noopener noreferrer">White Point Beach Resort</a> (No shuttle service)</li>
          <li><a href="https://www.airbnb.ca/s/Bull-Point-Estate--Port-Mouton--NS/homes?flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-04-01&monthly_length=3&monthly_end_date=2026-07-01&place_id=ChIJu4ukjQHZVksRmOMcr_QOcfQ&refinement_paths%5B%5D=%2Fhomes&location_bb=Qi%2BO88KBmJ9CL4wwwoGaAA%3D%3D&acp_id=t-g-ChIJu4ukjQHZVksRmOMcr_QOcfQ&date_picker_type=calendar&checkin=2026-07-23&checkout=2026-07-24&search_type=autocomplete_click" target="_blank" rel="noopener noreferrer">Airbnb</a> (No shuttle service)</li>
        </ul>
      </div>
    </div>
  );
}

export default PlacesToStay;