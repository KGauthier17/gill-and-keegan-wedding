import React, { useState, useEffect } from 'react';

function CountdownTimer() {

  const [daysLeft, setDaysLeft] = useState(0);


  useEffect(() => {
    const targetDate = new Date('2026-07-23');
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {daysLeft} DAYS TO GO!
    </div>
  );
}

export default CountdownTimer;