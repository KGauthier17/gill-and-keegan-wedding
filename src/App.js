import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Message from "./components/Message/Message";
import OurStory from "./components/OurStory/OurStory";
import Details from "./components/Details/Details";
import Ceremony from "./components/Ceremony/Ceremony";
import RSVP from "./components/RSVP/RSVP";
import PlacesToStay from "./components/PlacesToStay/PlacesToStay";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="message">
        <Message />
      </section>
      <section id="ourstory">
        <OurStory />
      </section>
      <section id="details">
        <Details />
      </section>
      <section id="ceremony">
        <Ceremony />
      </section>
      <section id="rsvp">
        <RSVP />
      </section>
      <section id="places">
        <PlacesToStay />
      </section>
    </div>
  );
}

export default App;
