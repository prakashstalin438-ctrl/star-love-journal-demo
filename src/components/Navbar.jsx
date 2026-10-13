import React from 'react';
import { Sparkles, Heart, Mic, Image, Mail, Calendar } from 'lucide-react';
import { coupleInfo } from '../data/mockData';

export const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <header className="navbar">
      <div className="container nav-wrapper">
        {/* Brand */}
        <div className="logo-brand">
          <div className="star-logo-icon">
            <Sparkles style={{ width: 22, height: 22 }} />
          </div>
          <div className="logo-text-box">
            <div className="logo-title">
              STAR <span className="star-sparkle">Journal</span>
            </div>
            <div className="logo-sub">Private Couple Universe</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`nav-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <Calendar style={{ width: 15, height: 15 }} />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`nav-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          >
            <Image style={{ width: 15, height: 15 }} />
            <span>Memories</span>
          </button>
          <button
            onClick={() => setActiveTab('voice')}
            className={`nav-tab-btn ${activeTab === 'voice' ? 'active' : ''}`}
          >
            <Mic style={{ width: 15, height: 15 }} />
            <span>Voice Notes</span>
          </button>
          <button
            onClick={() => setActiveTab('letters')}
            className={`nav-tab-btn ${activeTab === 'letters' ? 'active' : ''}`}
          >
            <Mail style={{ width: 15, height: 15 }} />
            <span>Letters</span>
          </button>
        </nav>

        {/* Fictional Couple Pill */}
        <div className="couple-pill">
          <div className="avatars-overlap">
            <img src={coupleInfo.partner1.avatar} alt={coupleInfo.partner1.name} className="avatar-mini" />
            <img src={coupleInfo.partner2.avatar} alt={coupleInfo.partner2.name} className="avatar-mini" />
          </div>
          <div className="couple-names">
            {coupleInfo.partner1.nickname} & {coupleInfo.partner2.nickname}
          </div>
        </div>
      </div>
    </header>
  );
};
