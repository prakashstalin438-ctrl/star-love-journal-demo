import React, { useState } from 'react';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AnniversaryCountdown } from './components/AnniversaryCountdown';
import { VoiceNotePlayer } from './components/VoiceNotePlayer';
import { MemoryTimeline } from './components/MemoryTimeline';
import { LoveLettersSection } from './components/LoveLettersSection';
import { Footer } from './components/Footer';
import { mockMemories, mockVoiceNotes, mockLoveLetters } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      <DemoNoticeBanner />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container" style={{ paddingTop: 10 }}>
        {activeTab === 'overview' && (
          <>
            <HeroSection
              memoriesCount={mockMemories.length}
              voiceCount={mockVoiceNotes.length}
              lettersCount={mockLoveLetters.length}
              onExplore={() => setActiveTab('timeline')}
            />
            <AnniversaryCountdown />
            <VoiceNotePlayer />
            <MemoryTimeline />
            <LoveLettersSection />
          </>
        )}

        {activeTab === 'timeline' && (
          <div style={{ paddingTop: 20 }}>
            <MemoryTimeline />
          </div>
        )}

        {activeTab === 'voice' && (
          <div style={{ paddingTop: 20 }}>
            <VoiceNotePlayer />
          </div>
        )}

        {activeTab === 'letters' && (
          <div style={{ paddingTop: 20 }}>
            <LoveLettersSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
