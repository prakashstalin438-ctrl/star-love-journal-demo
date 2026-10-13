import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const DemoNoticeBanner = () => {
  return (
    <div className="demo-banner">
      <div className="demo-banner-pill">
        <Sparkles style={{ width: 12, height: 12, display: 'inline', marginRight: 4 }} />
        Public Concept Demo
      </div>
      <span>
        Fictional sample couple, sanitized dummy memories & simulated audio. Zero private data or cloud database access.
      </span>
    </div>
  );
};
