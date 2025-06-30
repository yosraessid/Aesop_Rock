import React from 'react';

function HomePage() {
  return (
    <div className="home-global">
      <div className="fond-haut"></div>
      <div className="home-container">
        <header className="home-header">
          <div className="logo-container">
            <img src="/assets/images/aesop-rock-logo.png" alt="Aesop Rock" className="logo" />
          </div>
          <nav className="nav-links">
            <a href="/stream">STREAM</a>
            <a href="/actualites">ACTUALITÉS</a>
          </nav>
        </header>

        <section className="main-content">
          <div className="text-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="image-section">
            <img src="/assets/images/aesop-rock-portrait.png" alt="Aesop Rock Portrait" className="artist-image" />
          </div>
        </section>

        <section className="album-section">
          <div className="album-content">
            <div className="album-text">
              <h2 className="album-title">Black Hole<br />Superette</h2>
              <p className="album-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
              <a href="/ecouter" className="listen-button">ÉCOUTER</a>
            </div>
            <div className="album-cover">
              <img src="/assets/images/black-hole-superette.png" alt="Black Hole Superette Album" className="album-image" />
            </div>
          </div>
        </section>
      </div>
      <div className="fond-bas"></div>
    </div>
  );
}

export default HomePage; 