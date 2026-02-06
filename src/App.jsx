import React, { useState } from 'react';
import Login from './login';
import About from './About';
import Contact from './Contact';
import './App.css';
import './About.css';

const NavBar = ({ onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    if (link === 'About') {
      onViewChange('about');
    } else if (link === 'Contact Us☎️') {
      onViewChange('contact');
    } else {
      onViewChange('home');
      window.location.hash = link.replace(/[^a-zA-Z]/g, '').toLowerCase();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">DAWNSEAS 🪿</div>
      <button 
        className="mobile-menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        {['About', 'Contact Us☎️'].map((link, index) => (
          <a 
            key={index} 
            href="#"
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </a>
        ))}
        <button 
          className="login-button" 
          aria-label="Login or sign up"
          onClick={() => {
            onViewChange('login');
            setIsMenuOpen(false); 
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="main-title">ANIMATIONS</h1>
        <p className="subtitle">Dive Into Epic Stories !</p>
        <button className="cta-button">MANGAS🪶</button>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const animeLinks = {
    "DemonSlayer": "https://mangafire.to/read/kimetsu-no-yaiba22.4jy2k/en/chapter-1",
    "TokyoRevengers": "https://mangafire.to/read/tokyorevengerss.pmlx/en/chapter-1",
    "Naruto": "https://mangafire.to/read/narutoo.l33/en/chapter-1",
    "DeathNote": "https://mangafire.to/read/death-notee.p46/en/chapter-1"
  };

  const features = Object.keys(animeLinks);

  return (
    <section className="features-section" id="features">
      <h2>EPIC STORIES, ONE PAGE AWAY</h2>
      <p className="section-motto">Explore Your Next Favorite Manga</p>
      <p>⬇</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            🪿 
            <a 
              href={animeLinks[feature]} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {feature}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <p>DAWNSEAS</p>
      <p>&copy; 2025 All rights reserved. </p>
    </footer>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    if (currentView === 'login') {
      return <Login onBackToHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'about') {
      return <About onBackToHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'contact') {
      return <Contact onBackToHome={() => setCurrentView('home')} />;
    }
    return (
      <>
        <HeroSection />
        <FeaturesSection />
        <AppFooter />
      </>
    );
  };

  return (
    <div className="App">
      <NavBar onViewChange={setCurrentView} /> 
      {renderContent()}
    </div>
  );
};

export default App;
