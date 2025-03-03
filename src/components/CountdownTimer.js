import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2026-07-23T15:00:00-03:00'); // 3pm AST on July 23rd, 2026
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="CountdownTimer">
      <h2>Countdown to Our Wedding</h2>
      <div>
        {timeLeft.days !== undefined ? (
          <>
            <span>{timeLeft.days} days </span>
            <span>{timeLeft.hours} hours </span>
            <span>{timeLeft.minutes} minutes </span>
            <span>{timeLeft.seconds} seconds</span>
          </>
        ) : (
          <span>The wedding has started!</span>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;