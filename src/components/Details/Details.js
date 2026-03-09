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

      <div className="details-content">
        <h2 className="details-title">Wedding Details</h2>

        <p className="details-text">
          Our wedding will take place at <strong>Bull Point Estate</strong>, 1203 SW Port Mouton Rd, Port Mouton, Nova Scotia.
        </p>

        <p className="details-text">
          The ceremony will begin promptly at <strong>3:00 PM</strong>. We kindly ask guests to arrive by <strong>2:30 PM</strong> to allow time to find seating and get settled before we begin.
        </p>

        <p className="details-text">
          The dress code is <strong>Beach Formal</strong>. Think summer suits, dresses, and dressy attire that's comfortable for a coastal setting.
        </p>

        <p className="details-text">
          Following the ceremony, we'll host a cocktail hour with light appetizers while we take a few photos and everyone has a chance to mingle and enjoy the view. Dinner will follow shortly after.
        </p>

        <p className="details-text">
          Dinner will be served family-style, featuring <strong>beef, chicken, and salmon</strong>, along with corn, mac &amp; cheese, cabbage potato salad, and dinner rolls. There will be plenty of each protein option available at every table, so you will not need to select a meal in advance. If you have any dietary restrictions or allergies, please make sure to include them when filling out your RSVP so we can accommodate you.
        </p>

        <p className="details-text">
          A shuttle service will be available for guests staying nearby. Shuttles will begin running at <strong>9:00 PM</strong> and will make trips every hour, with the final trip departing at <strong>12:00 AM</strong>. The shuttle will stop at <strong>The Best Western in Liverpool</strong> and <strong>The Quarterdeck Resort</strong>.
        </p>

        <p className="details-text">
          The reception bar will be a <strong>toonie bar</strong>, so please remember to bring some cash and change.
        </p>

        <p className="details-text">
          Our band for the evening, <strong>The East Enders</strong>, will kick off the dance floor at <strong>9:00 PM</strong> &mdash; so bring your dancing shoes!
        </p>

        <p className="details-text">
          While we do not have a traditional registry, for those who have asked about gifts, we would be grateful for contributions toward our future together.
        </p>

        <p className="details-text">
          Due to venue capacity and planning considerations, we're only able to accommodate the guests listed on your invitation, so we kindly ask that guests attend only if they are named on the RSVP.
        </p>

        <p className="details-text details-closing">
          We can't wait to celebrate with you!
        </p>
      </div>
    </div>
  );
}

export default Details;