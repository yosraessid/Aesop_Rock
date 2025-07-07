import React, { useState } from 'react';
import './App.css';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="home-global" style={{
      backgroundImage: "url('/assets/images/fnd 2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
    }}>
      {/* Overlay foncé sur le fond */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="stream-header">
          <img src="/assets/images/aesop-rock-logo.png" alt="Aesop Rock Logo" />
          <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
          </div>
          <div className={menuOpen ? "stream-header-links open" : "stream-header-links"}>
            <a href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>ACCUEIL</a>
            <a href="/stream" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>STREAM</a>
            <a href="/actualites" style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', textDecoration: 'none' }}>ACTUALITÉS</a>
          </div>
        </div>

        <section className="main-content">
          <div className="text-section">
            <p>
              Rappeur et producteur new-yorkais, Aesop Rock une figure majeure du hip-hop underground américain. Reconnnu pour son flow dense et son écriture labyrinthique.<br />
              Il mêle introspection, absurdité et science-fiction dans des textes singuliers et puissants.<br />
              Fidèle au label indépendant Rhymesayers, Aesop Rock revient avec un tout nouvel album qui confirme sa place à part dans le paysage rap, loin des codes mainstream.
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
                <h2>  sortie le 30 mai 2025  </h2> <br />
                Black Hole Superette est un album concept aussi étrange que fascinant. Aesop Rock y construit un monde parallèle, entre supermarché intersidéral et hallucination urbaine.<br /><br />
                Chaque morceau est une allée sonore, remplie d'images tordues, de mots rares, de souvenirs flous.<br />
                Musicalement, l'album mêle production lo-fi, glitches analogiques, beats rugueux et voix nasale reconnaissable entre mille.<br /><br />
                Black Hole Superette est une œuvre qui demande à être explorée lentement, comme un rêve récurrent.
              </p>
            </div>
            <div className="album-cover">
              <img src="/assets/images/image1.png" alt="Black Hole Superette Album" className="album-image" />
            </div>
          </div>
        </section>

        {/* Bandeau image pleine largeur sous le bouton ÉCOUTER avec bouton dessus */}
        <section className="bandeau-board" style={{ position: 'relative', width: '100vw', overflow: 'hidden', margin: 0, padding: 0 }}>
          <img src="/assets/images/band1.png" alt="Bandeau" style={{ width: '100vw', display: 'block', margin: 0, padding: 0, maxWidth: '100vw' }} />
          {/* Overlay foncé sur le bandeau */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1,
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
            <a href="/stream" className="ecouter-button">
              <span className="arrow">&#9658;</span> ÉCOUTER
            </a>
          </div>
        </section>

        <section className="tour-section" style={{ position: 'relative', zIndex: 1 }}>
          {/* Overlay foncé sur la section tournée */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="tour-title">TOURNÉE</h2>

            <div className="tour-city">
              <h3>Las Vegas, Nevada</h3>
              <p>T-Mobile Arena</p>
              <ul>
                <li>16 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>18 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>19 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
              </ul>
            </div>

            <div className="tour-city">
              <h3>Paris, France</h3>
              <p>Accor Arena</p>
              <ul>
                <li>09 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>10 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>12 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
              </ul>
            </div>

            <div className="tour-city">
              <h3>Los Angeles, Californie</h3>
              <p>Walt Disney Concert Hall</p>
              <ul>
                <li>09 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>10 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
                <li>12 Juillet 2025 <span>&gt;</span> 
                  <a href="https://www.ticketmaster.com/search?q=aesop+rock" target="_blank" rel="noopener noreferrer">BILLETS</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

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
    </div>
  );
}

export default HomePage;