import React, { useState } from 'react';
import { Heart, MapPin, Sparkles, Plus, Image as ImageIcon, X } from 'lucide-react';
import { mockMemories as initialMemories } from '../data/mockData';

export const MemoryTimeline = () => {
  const [memories, setMemories] = useState(initialMemories);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalMemory, setActiveModalMemory] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newCaption, setNewCaption] = useState('');

  const categories = ['All', 'Adventures', 'Cozy Moments', 'Milestones'];

  const filtered = selectedFilter === 'All'
    ? memories
    : memories.filter((m) => m.category === selectedFilter);

  const handleLike = (e, id) => {
    e.stopPropagation();
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newMem = {
      id: 'mem-' + Date.now(),
      title: newTitle,
      category: 'Cozy Moments',
      date: 'Today',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
      location: newLocation || 'Sweet Sanctuary',
      caption: newCaption || 'A spontaneous cozy moment logged during this live demo session.',
      likes: 1,
      tag: 'Demo Addition'
    };

    setMemories([newMem, ...memories]);
    setNewTitle('');
    setNewLocation('');
    setNewCaption('');
    setShowAddModal(false);
  };

  return (
    <section className="memories-section">
      <div className="section-head">
        <div className="section-title-wrap">
          <h2>Interactive Memory Timeline</h2>
          <p>Chronological milestones and photo journal cards. Click any memory for detail preview or tap the heart to react.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="portfolio-link-btn">
          <Plus style={{ width: 15, height: 15, color: 'var(--accent-rose)' }} />
          <span>Add Moment (Demo)</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="memory-filters-row">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Memory Cards */}
      <div className="memories-grid">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalMemory(item)}
            className="memory-card"
          >
            <div className="memory-thumb-box">
              <img src={item.image} alt={item.title} className="memory-img" loading="lazy" />
              <span className="memory-category-tag">{item.category}</span>
            </div>
            <div className="memory-body">
              <span className="memory-date">{item.date}</span>
              <h3 className="memory-title">{item.title}</h3>
              <p className="memory-caption">{item.caption}</p>

              <div className="memory-footer">
                <div className="memory-location">
                  <MapPin style={{ width: 13, height: 13, color: 'var(--accent-rose)' }} />
                  <span>{item.location}</span>
                </div>
                <button onClick={(e) => handleLike(e, item.id)} className="like-heart-btn">
                  <Heart style={{ width: 14, height: 14, fill: 'var(--accent-rose)' }} />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Memory Modal */}
      {activeModalMemory && (
        <div className="modal-overlay" onClick={() => setActiveModalMemory(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setActiveModalMemory(null)}>
              <X style={{ width: 18, height: 18 }} />
            </button>
            <img
              src={activeModalMemory.image}
              alt={activeModalMemory.title}
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
              <span className="memory-category-tag" style={{ position: 'static' }}>{activeModalMemory.category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>{activeModalMemory.date}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: 12 }}>
              {activeModalMemory.title}
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 20 }}>
              {activeModalMemory.caption}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-sub)' }}>
                <MapPin style={{ width: 15, height: 15, color: 'var(--accent-rose)' }} />
                <span>{activeModalMemory.location}</span>
              </div>
              <button onClick={(e) => handleLike(e, activeModalMemory.id)} className="like-heart-btn">
                <Heart style={{ width: 15, height: 15, fill: 'var(--accent-rose)' }} />
                <span>{activeModalMemory.likes} Likes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowAddModal(false)}>
              <X style={{ width: 18, height: 18 }} />
            </button>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: 16 }}>
              Add Demo Memory
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', marginBottom: 20 }}>
              Adds an interactive memory card to the local live session. Uses safe royalty-free placeholder image.
            </p>
            <form onSubmit={handleAddSubmit}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>
                  Moment Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Picnic by the botanical gardens"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontFamily: 'inherit', fontSize: '0.9rem' }}
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>
                  Location Tag
                </label>
                <input
                  type="text"
                  placeholder="e.g. Conservatory of Flowers"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontFamily: 'inherit', fontSize: '0.9rem' }}
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>
                  Caption / Memory Note
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe the moment..."
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontFamily: 'inherit', fontSize: '0.9rem' }}
                ></textarea>
              </div>
              <button type="submit" className="celebrate-btn" style={{ width: '100%', justifyContent: 'center' }}>
                Save Memory to Timeline ✨
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
