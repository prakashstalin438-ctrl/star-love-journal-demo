import React, { useState, useEffect } from 'react';
import { Play, Pause, Mic, Radio, Volume2, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { mockVoiceNotes, coupleInfo } from '../data/mockData';
import { audioSynth } from '../utils/audioSynthesizer';

export const VoiceNotePlayer = () => {
  const [selectedNote, setSelectedNote] = useState(mockVoiceNotes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [isSimulatingRecord, setIsSimulatingRecord] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= selectedNote.duration) {
            setIsPlaying(false);
            audioSynth.stop();
            return 0;
          }
          return prev + 1;
        });
        setActiveBarIndex((prev) => (prev + 1) % 20);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedNote]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioSynth.stop();
    } else {
      setIsPlaying(true);
      audioSynth.startAmbientStream(() => {
        setActiveBarIndex((p) => (p + 1) % 20);
      });
    }
  };

  const handleSelect = (note) => {
    if (isPlaying) {
      audioSynth.stop();
      setIsPlaying(false);
    }
    setSelectedNote(note);
    setCurrentTime(0);
  };

  const handleSimulateRecord = () => {
    setIsSimulatingRecord(true);
    setTimeout(() => {
      setIsSimulatingRecord(false);
    }, 2800);
  };

  const formatSec = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  return (
    <section className="voice-section">
      <div className="section-head">
        <div className="section-title-wrap">
          <h2>Simulated Audio Voice Memos</h2>
          <p>Tap play to hear real soothing synthesized chimes via the Web Audio API with animated waveforms.</p>
        </div>
        <button
          onClick={handleSimulateRecord}
          disabled={isSimulatingRecord}
          className="portfolio-link-btn"
          style={{
            background: isSimulatingRecord ? 'rgba(236, 72, 153, 0.15)' : 'white',
            borderColor: isSimulatingRecord ? 'var(--accent-rose)' : 'var(--border-subtle)'
          }}
        >
          <Mic style={{ width: 15, height: 15, color: 'var(--accent-rose)' }} />
          <span>{isSimulatingRecord ? 'Recording Demo Memo (3s)...' : 'Record New Note (Demo)'}</span>
        </button>
      </div>

      {/* Main Interactive Player Box */}
      <div className="player-main-card">
        <div className="active-voice-header">
          <div className="speaker-badge">
            <span
              className="speaker-dot"
              style={{
                background: selectedNote.speaker === coupleInfo.partner1.nickname ? '#38bdf8' : '#f43f5e'
              }}
            ></span>
            <span>Recorded by {selectedNote.speaker}</span>
          </div>
          <span style={{ fontSize: '0.775rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>
            {selectedNote.date}
          </span>
        </div>

        <h3 className="active-voice-title">{selectedNote.title}</h3>
        <p className="active-voice-transcript">"{selectedNote.preview}"</p>

        {/* Dynamic Waveform Visualizer */}
        <div className="waveform-container">
          {selectedNote.waveform.map((heightVal, idx) => {
            const isBarActive = isPlaying && idx <= activeBarIndex;
            return (
              <div
                key={idx}
                className={`wave-bar ${isBarActive ? 'active' : ''}`}
                style={{
                  height: `${Math.max(12, heightVal * 0.55)}px`
                }}
              ></div>
            );
          })}
        </div>

        {/* Player Controls */}
        <div className="player-controls-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button onClick={togglePlay} className="play-pause-btn" title={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <Pause style={{ width: 22, height: 22 }} /> : <Play style={{ width: 22, height: 22, marginLeft: 2 }} />}
            </button>
            <div className="time-counter">
              {formatSec(currentTime)} / {selectedNote.durationStr}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-sub)' }}>
            <Volume2 style={{ width: 16, height: 16 }} />
            <span>Harmonic Web Audio Engine</span>
          </div>
        </div>
      </div>

      {/* Playlist Grid */}
      <div className="voice-list-grid">
        {mockVoiceNotes.map((note) => {
          const isCurrent = note.id === selectedNote.id;
          return (
            <div
              key={note.id}
              onClick={() => handleSelect(note)}
              className={`voice-item-card ${isCurrent ? 'selected' : ''}`}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: isCurrent ? 'var(--grad-primary)' : 'rgba(244, 114, 182, 0.12)',
                  color: isCurrent ? 'white' : 'var(--accent-rose)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {isCurrent && isPlaying ? <Radio style={{ width: 18, height: 18 }} /> : <Play style={{ width: 16, height: 16 }} />}
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {note.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-sub)', display: 'flex', gap: 8, marginTop: 2 }}>
                  <span>{note.speaker}</span>
                  <span>•</span>
                  <span>{note.durationStr}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
