// Real-time Web Audio API Synthesizer for safe, dependency-free audio simulation.
// Generates soft, relaxing ambient chimes and harmonic chords when playing voice notes.

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.frequencies = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C major pentatonic
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq, duration = 0.8) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn('Audio synthesis not supported or muted:', e);
    }
  }

  startAmbientStream(onTick) {
    this.init();
    this.isPlaying = true;
    let step = 0;

    const tick = () => {
      if (!this.isPlaying) return;
      const freq = this.frequencies[step % this.frequencies.length];
      this.playChime(freq, 0.9);
      if (onTick) onTick(step);
      step++;
      const nextDelay = 380 + (step % 3) * 120;
      this.timer = setTimeout(tick, nextDelay);
    };

    tick();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export const audioSynth = new AudioSynthesizer();
