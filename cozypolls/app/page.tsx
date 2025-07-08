'use client';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`theme-${theme}`}> 
      <header className="top-nav">
        <div className="logo">😊</div>
        <div className="segments">
          <button className="active">For You</button>
          <button>Trending</button>
          <button>Friends</button>
        </div>
        <div className="notify">🔔<span className="badge">1</span></div>
      </header>

      <section className="poll-card">
        <h1>Is pineapple on pizza awesome?</h1>
        <div className="vote-buttons">
          <button>🍍</button>
          <button>🍕</button>
        </div>
        <div className="results">You vibe with 63%</div>
      </section>

      <button className="fab" onClick={toggleTheme}>➕</button>

      <nav className="bottom-nav">
        <button>🏠</button>
        <button>🔍</button>
        <button className="create">➕</button>
        <button>🎖️</button>
        <button>👤</button>
      </nav>
    </div>
  );
}
