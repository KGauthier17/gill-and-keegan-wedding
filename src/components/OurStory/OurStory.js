import React from "react";
import "./OurStory.css";

const storyEvents = [
  {
    img: "/assets/images/ourStory/ourStory1.jpeg",
    date: "2018",
    title: "We Met at St.FX University",
    description: "We met at a Halloween party where Gill was dressed as Pitbull... Yes, bald cap and all.",
    side: "left"
  },
  {
    img: "/assets/images/ourStory/ourStory2.jpeg",
    date: "2021",
    title: "First Date",
    description: "Our first date took place at the Brownstone Café in Antigonish." + 
    " As we arrived, Keegan was so captivated by Gill that he nearly walked straight into oncoming traffic while getting out of the car." + 
    " Thankfully, nothing serious happened—but it was clear from the very beginning that he couldn’t take his eyes off her, and that hasn’t changed since.",
    side: "right"
  },
  {
    img: "/assets/images/ourStory/ourStory3.jpeg",
    date: "2022",
    title: "We Moved In",
    description: "Our move-in story is a bit of an adventure." + 
    " Near the end of COVID, U-Hauls were nearly impossible to find, so we made do with what we had." + 
    " That meant driving from Antigonish to Amherst with our very carsick cat Wallie, back to Antigonish, and then to Halifax the next day." + 
    " It was a long and chaotic move, but by the end we knew that if we could handle that together, we could handle anything.",
    side: "left"
  },
  {
    img: "/assets/images/ourStory/ourStory4.jpeg",
    date: "2024",
    title: "The Proposal",
    description: 
      "Keegan proposed to Gill at her favourite place in the world... The Cottage. " +
      "Somehow keeping it a complete secret from her, he managed to get both his and her family there to surprise her. " +
      "It was a perfect day.",
    side: "right"
  }
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