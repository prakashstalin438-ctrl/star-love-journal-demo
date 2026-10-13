import React from 'react';
import { Sparkles, Heart, Compass, MapPin, Quote } from 'lucide-react';
import { coupleInfo, mockDailyQuote } from '../data/mockData';

export const HeroSection = ({ memoriesCount, voiceCount, lettersCount, onExplore }) => {
  return (
    <section>
      <div className="hero-card">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div>
            <div className="hero-tag">
              <Sparkles style={{ width: 14, height: 14 }} />
              <span>{coupleInfo.statusMessage}</span>
            </div>
            <h1 className="hero-title">
              {coupleInfo.partner1.nickname} & {coupleInfo.partner2.nickname}'s Constellation
            </h1>
            <p className="hero-subtitle">
              A private digital sanctuary crafted for two. Documenting milestones, audio voice memos, shared travel memories, and love letters in one safe corner of the web.
            </p>
            <div className="hero-stats-row">
              <div className="stat-chip">
                <span className="stat-number">1,085+</span>
                <span className="stat-label">Days Together</span>
              </div>
              <div className="stat-chip">
                <span className="stat-number">{memoriesCount}</span>
                <span className="stat-label">Moments Saved</span>
              </div>
              <div className="stat-chip">
                <span className="stat-number">{voiceCount}</span>
                <span className="stat-label">Voice Notes</span>
              </div>
              <div className="stat-chip">
                <span className="stat-number">{lettersCount}</span>
                <span className="stat-label">Sealed Letters</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'var(--grad-blue-pink)',
                border: '2px dashed rgba(236, 72, 153, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Heart style={{ width: 32, height: 32, color: 'var(--accent-rose)', marginBottom: 6 }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)' }}>Sanctuary Mode</span>
              <span style={{ fontSize: '0.675rem', color: 'var(--text-sub)' }}>{coupleInfo.locationTag}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Quote Prompt */}
      <div className="daily-quote-card">
        <div className="quote-icon-box">
          <Quote style={{ width: 22, height: 22 }} />
        </div>
        <div>
          <div className="quote-body">"{mockDailyQuote.quote}"</div>
          <span className="quote-author">— {mockDailyQuote.author}</span>
        </div>
      </div>
    </section>
  );
};
