import React from "react";
import "./OurStory.css";

const storyEvents = [
  {
    img: "/assets/images/our_story1.jpeg",
    date: "2018",
    title: "We Met at St.FX University",
    description: "We met in college...",
    side: "left"
  },
  {
    img: "/assets/images/our_story2.jpeg",
    date: "2019",
    title: "First Trip",
    description: "Our first trip together...",
    side: "right"
  },
  {
    img: "/assets/images/our_story3.jpeg",
    date: "2022",
    title: "We Moved In",
    description: "We moved into our first apartment together...",
    side: "left"
  },
  {
    img: "/assets/images/our_story4.jpeg",
    date: "2024",
    title: "The Proposal",
    description: 
    "Keegan proposed to Gill at her favourite place in the world... The Cottage. \
    Somehow keeping it a complete secret from her, he managed to get both his and her family there to surprise her. \
    It was a perfect day.",
    side: "right"
  },
];

function OurStory() {
  return (
    <div className="ourstory-section">
      <h2 className="ourstory-title">Our Story</h2>
      <div className="ourstory-timeline">
        {storyEvents.map((event, i) => (
          <div
            key={i}
            className={`ourstory-row ${event.side === "right" ? "row-reverse" : ""}`}
          >
            <div className="ourstory-center">
              <div className="ourstory-bubble">
                <img src={event.img} alt={event.title} className="ourstory-img" />
              </div>
            </div>
            <div className={`ourstory-bubble-text ${event.side}`}>
              <div className="ourstory-date">{event.date}</div>
              <div className="ourstory-event-title">{event.title}</div>
              <div className="ourstory-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStory;