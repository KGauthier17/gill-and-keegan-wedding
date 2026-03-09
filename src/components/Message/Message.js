import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message-container">
      {/* Scattered polaroid photos */}
      <div className="polaroid polaroid-1">
        <img src="/assets/images/polaroid/photo1.jpeg" alt="Memory" />
        <p className="polaroid-caption">Always</p>
      </div>
      <div className="polaroid polaroid-2">
        <img src="/assets/images/polaroid/photo2.jpeg" alt="Memory" />
        <p className="polaroid-caption">Forever</p>
      </div>
      <div className="polaroid polaroid-3">
        <img src="/assets/images/polaroid/photo3.jpeg" alt="Memory" />
        <p className="polaroid-caption">Love You</p>
      </div>
      <div className="polaroid polaroid-4">
        <img src="/assets/images/polaroid/photo4.jpeg" alt="Memory" />
        <p className="polaroid-caption">Cheers!</p>
      </div>

      <div className="message-content">
        <h2 className="message-title">A Message from Us</h2>
        <p className="message-text">To our friends and family: We're so excited to celebrate our special day with you.
            We can't wait to see you all there and make unforgettable memories together.
            Find all the details you need to know about our big day here!
        </p>
      </div>
    </div>
  );
}

export default Message;