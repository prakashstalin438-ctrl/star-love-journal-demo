import React from 'react';
import { Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <div className="star-logo-icon" style={{ width: 24, height: 24, borderRadius: 8 }}>
              <Sparkles style={{ width: 14, height: 14 }} />
            </div>
            <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
              STAR Love Journal Concept
            </strong>
          </div>
          <p className="footer-copy">
            Public Demonstration Portfolio Showcase • Crafted by <strong>Stalin AI Studio</strong>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '0.75rem',
              color: 'var(--text-sub)',
              background: 'white',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <ShieldCheck style={{ width: 14, height: 14, color: '#10b981' }} />
            <span>100% Sanitized Mock Data</span>
          </div>

          <a
            href="https://stalin-ai-studio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link-btn"
          >
            <span>Back to Portfolio</span>
            <ExternalLink style={{ width: 13, height: 13 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};
