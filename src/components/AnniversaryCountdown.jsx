import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Heart, BellRing } from 'lucide-react';
import { coupleInfo } from '../data/mockData';

export const AnniversaryCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [celebrationStars, setCelebrationStars] = useState([]);

  useEffect(() => {
    const targetDate = new Date(coupleInfo.anniversaryDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = () => {
    const newStars = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
      top: Math.random() * 50 + 30,
      size: Math.random() * 16 + 14,
      char: ['✨', '💖', '⭐', '🌸', '🎉'][Math.floor(Math.random() * 5)]
    }));
    setCelebrationStars(newStars);
    setTimeout(() => setCelebrationStars([]), 2600);
  };

  return (
    <section className="countdown-card">
      {celebrationStars.map((s) => (
        <span
          key={s.id}
          className="floating-star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`
          }}
        >
          {s.char}
        </span>
      ))}

      <div className="countdown-badge">
        <Calendar style={{ width: 14, height: 14 }} />
        <span>Fictional Demo Milestone</span>
      </div>

      <h2 className="countdown-title">{coupleInfo.anniversaryTitle}</h2>
      <p className="countdown-subtitle">
        Counting down every heartbeat until October 24, 2026. A real-time anniversary counter with precision down to the second.
      </p>

      <div className="countdown-grid">
        <div className="countdown-unit-box">
          <div className="countdown-digits">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-unit-box">
          <div className="countdown-digits">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-unit-box">
          <div className="countdown-digits">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-unit-box">
          <div className="countdown-digits">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>

      <button onClick={triggerCelebration} className="celebrate-btn">
        <Sparkles style={{ width: 16, height: 16 }} />
        <span>Celebrate Milestone ✨</span>
      </button>
    </section>
  );
};
