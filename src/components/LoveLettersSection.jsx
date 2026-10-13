import React, { useState } from 'react';
import { Mail, Heart, Sparkles, X, Lock } from 'lucide-react';
import { mockLoveLetters } from '../data/mockData';

export const LoveLettersSection = () => {
  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <section className="letters-section">
      <div className="section-head">
        <div className="section-title-wrap">
          <h2>Sealed Love Letters</h2>
          <p>Private digital correspondence with virtual wax seals. Click any envelope to unlock and read.</p>
        </div>
      </div>

      <div className="letters-grid">
        {mockLoveLetters.map((letter) => (
          <div
            key={letter.id}
            onClick={() => setActiveLetter(letter)}
            className="letter-card"
          >
            <div className="wax-seal">
              <Sparkles style={{ width: 16, height: 16 }} />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-sub)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>
              From {letter.sender} • {letter.date}
            </div>
            <h3 className="letter-title">{letter.title}</h3>
            <p className="letter-preview">"{letter.preview}"</p>
            <span className="read-letter-btn">
              <span>Read Letter</span>
              <Heart style={{ width: 13, height: 13, fill: 'var(--accent-rose)' }} />
            </span>
          </div>
        ))}
      </div>

      {/* Letter Reading Modal */}
      {activeLetter && (
        <div className="modal-overlay" onClick={() => setActiveLetter(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ background: '#fffdf9' }}>
            <button className="close-modal-btn" onClick={() => setActiveLetter(null)}>
              <X style={{ width: 18, height: 18 }} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div className="wax-seal" style={{ margin: '0 auto 12px' }}>
                <Sparkles style={{ width: 18, height: 18 }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: 6 }}>
                {activeLetter.title}
              </h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                Written by {activeLetter.sender} for {activeLetter.recipient} • {activeLetter.date}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-body)',
                whiteSpace: 'pre-wrap',
                background: 'rgba(255, 245, 248, 0.5)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed var(--border-subtle)'
              }}
            >
              {activeLetter.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
