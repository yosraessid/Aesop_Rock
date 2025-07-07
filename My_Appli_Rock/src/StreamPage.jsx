import React, { useState } from "react";
import './App.css';

function StreamPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "Roboto Mono",
        backgroundImage: "url('/assets/images/fontst.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center -200px",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden"
      }}
    >
      {/* Motif en overlay, transparent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/images/fondstream.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.18,
          pointerEvents: "none",
          zIndex: 1
        }}
      />
      <div style={{ flex: 1 }}>
        <div className="stream-header">
          <img src="/assets/images/aesop-rock-logo.png" alt="Aesop Rock Logo" />
          {/* Icône burger visible sur mobile */}
          <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
          </div>
          {/* Liens visibles sur desktop/tablette OU si menu burger ouvert */}
          <div className={menuOpen ? "stream-header-links open" : "stream-header-links"}>
            <a href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>ACCUEIL</a>
            <a href="/stream" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>STREAM</a>
            <a href="/actualites" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>ACTUALITÉS</a>
          </div>
        </div>
        {/* Bloc titre + description */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", minHeight: "60vh", margin: 0, width: "100%", marginBottom: 0, padding: 0, marginTop: 0 }}>
          <h1 className="stream-title">ÉCOUTER</h1>
          <p className="stream-description">Plongez dans l'univers d'Aesop en un clic</p>
        </div>
        {/* Logos plateformes */}
        <div className="stream-logos">
          <div className="stream-logos-list">
            {/* Deezer */}
            <div className="stream-logo-item">
              <a href="https://www.deezer.com/fr/artist/1260" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/Deezer.png" alt="Deezer" style={{ maxWidth: '70%', maxHeight: 90, width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
              </a>
            </div>
            {/* Spotify */}
            <div className="stream-logo-item">
              <a href="https://open.spotify.com/intl-fr/artist/2fSaE6BXtQy0x7R7v9IOmZ" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/sportify.png" alt="Spotify" style={{ maxWidth: '70%', maxHeight: 90, width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
              </a>
            </div>
            {/* Apple Music */}
            <div className="stream-logo-item">
              <a href="https://music.apple.com/fr/artist/aesop-rock/3858833" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/music.png" alt="Apple Music" style={{ maxWidth: '70%', maxHeight: 90, width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
              </a>
            </div>
            {/* YouTube */}
            <div className="stream-logo-item">
              <a href="https://www.youtube.com/results?search_query=l'artist+aesop+rock" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/youtube.png" alt="YouTube" style={{ maxWidth: '70%', maxHeight: 90, width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
              </a>
            </div>
            {/* Tidal */}
            <div className="stream-logo-item">
              <a href="https://tidal.com/browse/artist/3568872" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/tidal.png" alt="Tidal" style={{ maxWidth: '70%', maxHeight: 90, width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer-global" style={{ background: "#111", color: "#fff", padding: "0 0 3rem 0", marginTop: "auto", position: "relative", zIndex: 2, fontFamily: 'Roboto Mono' }}>
        <div style={{ borderTop: "2px solid #888", width: "100%", margin: "0 auto 2.5rem auto" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap", gap: 24 }}>
          <div style={{ fontSize: "1rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: 8, marginLeft: 0, alignItems: 'flex-start', textAlign: 'left', paddingRight: 0 }}>
            <span>Aide et support</span>
            <span>Politique de confidentialité</span>
            <span>Conditions générales</span>
          </div>
          <div style={{ fontSize: "1rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: 8, alignItems: 'flex-start', textAlign: 'left', paddingRight: 0 }}>
            <span>Cookies</span>
            <span>Ne vendez pas mes informations personnelles</span>
            <span>Inscrivez-vous à la newsletter</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: "1.2rem" }}>
            {/* Icônes réseaux sociaux - cercle blanc, pictogramme noir */}
            <a href="https://x.com/aesoprockwins?lang=ta" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 44, height: 44 }} title="X" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </a>
            <a href="https://www.instagram.com/aesoprockwins/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 44, height: 44 }} title="Instagram">
              <svg width="22" height="22" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCzVC0z-KheQEV_2H2zg6V9w" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 44, height: 44 }} title="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <rect x="7" y="9" width="18" height="14" rx="5" fill="#111"/>
                <polygon points="16,13 22,16 16,19" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/AesopRockWins/" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 44, height: 44 }} title="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="22" height="22" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StreamPage;

