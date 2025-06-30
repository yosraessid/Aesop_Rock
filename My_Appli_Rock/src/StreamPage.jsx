import React from "react";

function StreamPage() {
  return (
    <div className="stream-container">
      <header className="stream-header">
        <h1 className="stream-title">ÉCOUTER</h1>
      </header>
      <div className="streaming-buttons">
        <a href="#" className="stream-button">
          <img src="/deezer-logo.png" alt="Deezer" />
          Deezer
        </a>
        <a href="#" className="stream-button">
          <img src="/spotify-logo.png" alt="Spotify" />
          Spotify
        </a>
        <a href="#" className="stream-button">
          <img src="/apple-music-logo.png" alt="Apple Music" />
          Apple Music
        </a>
        <a href="#" className="stream-button">
          <img src="/youtube-logo.png" alt="YouTube" />
          YouTube
        </a>
        <a href="#" className="stream-button">
          <img src="/tidal-logo.png" alt="Tidal" />
          Tidal
        </a>
      </div>
    </div>
  );
}

export default StreamPage;

