'use client';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaBell, FaHome, FaSearch, FaPlus, FaMedal, FaUser } from 'react-icons/fa';

const polls = [
  { question: 'Is pineapple on pizza awesome?', mood: 'fresh' },
  { question: 'Are AI companions the future?', mood: 'chill' },
  { question: 'Is coding at 2am the best vibe?', mood: 'hype' },
];

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [segment, setSegment] = useState('For You');
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setIndex((index + 1) % polls.length),
    onSwipedDown: () => setIndex((index - 1 + polls.length) % polls.length),
    trackMouse: true,
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const poll = polls[index];

  return (
    <div className={`theme-${theme}`}>
      <header className="top-nav">
        <div className="logo">😊</div>
        <div className="segments">
          {['For You', 'Trending', 'Friends'].map((s) => (
            <button
              key={s}
              className={segment === s ? 'active' : ''}
              onClick={() => setSegment(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="notify">
          <FaBell />
          <span className="badge">1</span>
        </div>
      </header>

      <section className={`poll-card ${poll.mood}`} {...handlers}>
        <h1>{poll.question}</h1>
        <div className="vote-buttons">
          <button onClick={toggleTheme}>👍</button>
          <button onClick={toggleTheme}>👎</button>
        </div>
        <div className="results">You vibe with 63%</div>
      </section>

      {menuOpen && (
        <div className="fab-menu">
          <button>📝</button>
          <button>😊</button>
          <button>🎛️</button>
        </div>
      )}

      <button className="fab" onClick={toggleMenu}>
        <FaPlus />
      </button>

      <nav className="bottom-nav">
        <button className="active">
          <FaHome />
        </button>
        <button>
          <FaSearch />
        </button>
        <button className="create">
          <FaPlus />
        </button>
        <button>
          <FaMedal />
        </button>
        <button>
          <FaUser />
        </button>
      </nav>
    </div>
  );
}
