import React, { useState } from "react";
import "./Details.css";

const mapsUrl = /iPad|iPhone|iPod/.test(navigator.userAgent)
  ? "https://maps.apple.com/?q=1203+SW+Port+Mouton+Rd,+Port+Mouton,+NS"
  : "https://www.google.com/maps/dir//1203+SW+Port+Mouton+Rd,+Port+Mouton,+NS+B1P+2B4/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4b56d9558cd70857:0xd5477467ceb058fd?sa=X&ved=1t:707&ictx=111";

const sections = [
  {
    title: "📅 Date & Time",
    content: (
      <p>
        The ceremony will be on <time dateTime="2026-07-23"><strong>July 23rd, 2026</strong></time> and will begin promptly at <strong>3:00 PM</strong>. We kindly ask guests to arrive by <strong>2:30 PM</strong> to allow time to find seating and get settled before we begin.
      </p>
    ),
  },
  {
    title: "📍 Venue",
    content: (
      <p>
        Our wedding will take place at <strong>Bull Point Estate</strong>, <a href={mapsUrl} target="_blank" rel="noopener noreferrer">1203 SW Port Mouton Rd, Port Mouton, Nova Scotia</a>.
      </p>
    ),
  },
  {
    title: "👗 Dress Code",
    content: (
      <p>
        The dress code is <strong>Beach Formal</strong>. Think summer suits, dresses, and dressy attire that's comfortable for a coastal setting.
      </p>
    ),
  },
  {
    title: "🥂 Cocktail Hour & Dinner",
    content: (
      <>
        <p>
          Following the ceremony, we'll host a cocktail hour with light appetizers while we take a few photos and everyone has a chance to mingle and enjoy the view. Dinner will follow shortly after.
        </p>
        <p>
          Dinner will be served family-style, featuring <strong>beef, chicken, and salmon</strong>, along with corn, mac &amp; cheese, cabbage potato salad, and dinner rolls. There will be plenty of each protein option at every table — no meal selection needed in advance. If you have dietary restrictions or allergies, please include them in your RSVP.
        </p>
      </>
    ),
  },
  {
    title: "🚌 Shuttle Service",
    content: (
      <p>
        A shuttle service will be available for guests staying nearby. Shuttles will begin running at <strong>9:00 PM</strong> and make trips every hour, with the final trip departing at <strong>12:00 AM</strong>. The shuttle will stop at <strong>The Best Western in Liverpool</strong> and <strong>The Quarterdeck Resort</strong>.
      </p>
    ),
  },
  {
    title: "🍺 Bar",
    content: (
      <p>
        The reception bar will be a <strong>toonie bar</strong>, so please remember to bring some cash and change.
      </p>
    ),
  },
  {
    title: "🎵 Entertainment",
    content: (
      <p>
        Our band for the evening, <strong>The East Enders</strong>, will kick off the dance floor at <strong>9:00 PM</strong> &mdash; so bring your dancing shoes!
      </p>
    ),
  },
  {
    title: "🎁 Gifts",
    content: (
      <p>
        While we do not have a traditional registry, for those who have asked about gifts, we would be grateful for contributions toward our future together.
      </p>
    ),
  },
  {
    title: "👥 Guest List",
    content: (
      <p>
        Due to venue capacity and planning considerations, we're only able to accommodate the guests listed on your invitation, so we kindly ask that guests attend only if they are named on the RSVP.
      </p>
    ),
  },
];

function Details() {
  const [openSections, setOpenSections] = useState(new Set());

  const toggle = (index) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="details-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroids/photo5.jpeg" alt="Memory" />
        <p className="polaroid-caption">Us ♥</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroids/photo6.jpeg" alt="Memory" />
        <p className="polaroid-caption">Cliffs of Moher</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroids/photo7.jpeg" alt="Memory" />
        <p className="polaroid-caption">To Love</p>
      </div>

      <div className="details-content">
        <h2 className="details-title">Wedding Details</h2>
        <p className="details-subtitle">Tap a section to learn more ↓</p>

        <div className="details-accordion">
          {sections.map((section, index) => (
            <div key={index} className={`accordion-item ${openSections.has(index) ? 'open' : ''}`}>
              <button
                className="accordion-header"
                onClick={() => toggle(index)}
                aria-expanded={openSections.has(index)}
              >
                <span>{section.title}</span>
                <span className="accordion-chevron">{openSections.has(index) ? '▲' : '▼'}</span>
              </button>
              {openSections.has(index) && (
                <div className="accordion-body">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="details-text details-closing">
          We can't wait to celebrate with you!
        </p>
      </div>
    </div>
  );
}

export default Details;