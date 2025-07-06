import React from "react";


import './App.css';

function ActualitésPage() {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: "url('/assets/images/fnd 2 1 (1).png')",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      fontFamily: "Roboto Mono",
      position: "relative"
    }}>
      {/* Header identique à StreamPage */}
      <header style={{
        width: '100%',
        background: 'transparent',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0.5rem 3.5rem 1.5rem 3.5rem',
        position: 'relative',
        zIndex: 2,
        fontFamily: 'Roboto Mono'
      }}>
        <img src="/assets/images/aesop-rock-logo.png" alt="Aesop Rock Logo" style={{ height: 180, width: 'auto', display: 'block' }} />
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', height: 180, marginRight: '5rem', marginTop: '2.5rem' }}>
          <a href="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '1px', textDecoration: 'none' }}>ACCUEIL</a>
          <a href="/actualites" style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '1px', textDecoration: 'none' }}>ACTUALITÉS</a>
        </div>
      </header>
      {/* Partie 1 : Titre + bloc texte/image */}
      <div style={{ width: '100vw', padding: '1.5rem 0 0 0', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 0, paddingLeft: '0', marginBottom: '5rem' }}>
        <h1 style={{ color: '#6B5FCF', fontSize: '3.2rem', fontWeight: 900, margin: 0, letterSpacing: 2, textTransform: 'uppercase', paddingLeft: '3.5rem', fontFamily: 'Roboto Mono, monospace' }}>ACTUALITÉS</h1>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', marginTop: '1.2rem', alignItems: 'flex-start', flexWrap: 'nowrap', paddingLeft: '3.5rem', paddingRight: '3.5rem', width: '100%' }}>
          {/* Bloc texte à gauche */}
          <div style={{ flex: 1.2, minWidth: 240, color: '#fff', fontFamily: 'Roboto Mono, monospace', fontSize: '1.05rem', lineHeight: 1.5, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: 0, whiteSpace: 'pre-line', letterSpacing: 0.5, textAlign: 'left', borderRadius: 0, marginTop: 0 }}>
            <b><i>Black Hole Superette</i> : Les rayons d'un autre monde - plonger dans l'univers visuel</b>
            {`

Et s'il existait un supermarché où rien n'avait de prix ?
Un espace étrange, sans produits de consommation, où les rayons s'étendent dans toutes les directions, vers l'intérieur, vers l'espace, vers des souvenirs que l'on n'a jamais eus.

C'est dans cette faille graphique que semble s'installer Black Hole Superette, un lieu imaginaire à mi-chemin entre le rêve et le désastre esthétique. Ici, pas d'offre spéciale ni de soldes de saison.

Le concept visuel s'impose comme une architecture mentale : chaotique, cryptée, volontairement floue...
Le regard se pose, mais ne comprend pas. C'est précisément là que réside sa force.`}
          </div>
          {/* Image à droite */}
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', marginTop: 0 }}>
            <img
              src="/assets/images/Plan de travail 1 copie 2 1.png"
              alt="Aesop Rock – Send Help video"
              style={{
                width: '100%',
                maxWidth: 420,
                height: 'auto',
                border: '4px solid #222',
                borderRadius: 8,
                objectFit: 'cover',
                boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                display: 'block',
                background: '#111',
                margin: 0
              }}
            />
          </div>
        </div>
      </div>
      {/* Bandeau coloré bien visible et vraiment bord à bord */}
      <div
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          height: '220px',
          backgroundImage: "url('/assets/images/Aesop Rock – Send Help video 3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginTop: '0',
          marginBottom: '0',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}
      />
      {/* Bloc principal */}
      <main style={{ padding: 0, width: '100vw' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          alignItems: 'flex-start',
          minHeight: 1100,
          margin: 0,
          marginTop: '8rem',
          marginBottom: '20rem',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          gap: '3rem'
        }}>
          {/* Colonne gauche - fond noir */}
          <div style={{ width: '50%', background: 'none', display: 'flex', flexDirection: 'column', gap: '2.2rem', padding: 0, fontFamily: 'Roboto Mono, monospace', margin: 0 }}>
            {/* Bloc 2 - Imagerie */}
            <section style={{ backgroundImage: "url('/assets/images/Rectangle 23.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 0, padding: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
              <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, margin: 0, marginBottom: '0.7rem', letterSpacing: 0, lineHeight: 1.1, fontFamily: 'Roboto Mono, monospace' }}>Une imagerie qui ne cherche pas à séduire</h3>
              <img src="/assets/images/Hole 1.png" alt="Imagerie" style={{ width: '400px', height: '250px', borderRadius: 0, objectFit: 'cover', margin: '0 auto', display: 'block' }} />
              <p style={{ color: '#fff', fontSize: '1rem', margin: '0.7rem 0 0 0', lineHeight: 1.45, letterSpacing: 0, whiteSpace: 'pre-line', fontFamily: 'Roboto Mono, monospace' }}>
                Loin des codes actuels du visuel lisse et accessible, l'univers graphique autour de Black Hole Superette privilégie la densité, la saturation, l'anomalie. L'esthétique n'est pas décorative, elle est active.

Elle participe à un brouillage volontaire des repères. Comme si chaque image était un bug dans le langage visuel du hip-hop contemporain.

On y retrouve des références éclatées : science-fiction rétro, manuels techniques obsolètes, typographies déformées, objets du quotidien déplacés dans un autre contexte.

Le tout évoque un espace en ruine qui refuse la logique, mais impose un style. Tout semble trop plein, trop de détails, trop d'éléments, trop de couches. Et pourtant, chaque élément semble juste.
              </p>
            </section>
            {/* Bloc 4 - Expérience sensorielle */}
            <section style={{ backgroundImage: "url('/assets/images/Rectangle 23.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 0, padding: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, margin: '2.5rem 0 0 0', marginBottom: '0.7rem', letterSpacing: 0, lineHeight: 1.1, fontFamily: 'Roboto Mono, monospace' }}>Une expérience sensorielle plus que visuelle</h3>
              <img src="/assets/images/rob carter - tokyo 1.png" alt="Expérience sensorielle" style={{ width: '400px', height: '250px', borderRadius: 0, objectFit: 'cover', margin: '0 auto', display: 'block' }} />
              <p style={{ color: '#fff', fontSize: '1rem', margin: '0.7rem 0 0 0', lineHeight: 1.45, letterSpacing: 0, whiteSpace: 'pre-line', fontFamily: 'Roboto Mono, monospace' }}>
                Ce que construit Black Hole Superette, c'est moins une identité visuelle qu'une expérience sensorielle complète. Il faut s'y immerger, s'y perdre, accepter de ne pas comprendre. L'image devient une atmosphère.

Elle ne parle pas, elle enveloppe. Il n'y a pas de centre, pas de hiérarchie. Aucun élément ne domine les autres. Le regard glisse, revient, se perd. C'est une invitation à ralentir, à observer autrement. Ce qui est proposé ici n'est pas une communication visuelle, mais une sensation visuelle. Une dérive.

Dans un monde saturé d'images immédiatement lisibles, Black Hole Superette choisit la résistance : celle de l'ambiguïté, du détail, de l'illisible beau. Et dans cette zone trouble entre poésie visuelle et absurdité graphique, quelque chose de rare émerge : un langage propre. Un univers qui ne cherche pas à être compris, mais vécu.
              </p>
            </section>
          </div>
          {/* Colonne droite - fond violet sur toute la hauteur */}
          <div style={{ width: '50%', backgroundImage: "url('/assets/images/Rectangle 23.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: 1100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1.1rem', padding: 0, fontFamily: 'Roboto Mono, monospace', margin: 0 }}>
            <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0 0', marginBottom: '0.7rem', letterSpacing: 0, lineHeight: 1.1, fontFamily: 'Roboto Mono, monospace' }}>Collage, absurdité & narration éclatée</h3>
            <img src="/assets/images/rob carter - tokyo 1.png" alt="Bloc à côté du bloc blanc" style={{ width: '400px', height: '250px', borderRadius: 0, objectFit: 'cover', margin: '0 auto', display: 'block' }} />
       
            <p style={{ color: '#fff', fontSize: '1rem', margin: 0, lineHeight: 1.45, letterSpacing: 0, whiteSpace: 'pre-line', fontFamily: 'Roboto Mono, monospace' }}>
Ce monde visuel n'est pas simplement un décor, c'est une narration fragmentée. On passe d'un étalage d'objets non identifiables à un plan technique d'une machine impossible, puis à un personnage qui semble nous fixer sans nous voir.

Chaque image fonctionne comme une énigme isolée, mais toutes appartiennent à la même langue. Le collage, largement utilisé, permet cette superposition des niveaux de lecture : l'ancien et le futuriste, le technique et l'émotionnel, le réel et le complètement fictif.

On n'est jamais sûr de ce qu'on regarde, mais quelque chose résonne. Il ne s'agit pas d'esthétique gratuite, mais d'un geste artistique de refuser l'évidence, accueillir l'ambigu. L'image n'illustre pas un message, elle le trouble.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer style={{ background: "#111", color: "#fff", padding: "2.5rem 0 1.5rem 0", marginTop: "auto", position: "relative", zIndex: 2, fontFamily: 'Roboto Mono', width: '100vw', marginLeft: 0, marginRight: 0 }}>
        <div style={{ borderTop: "2px solid #888", width: "92%", margin: "-1.2rem auto 2.5rem auto" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap", gap: 24 }}>
          <div style={{ fontSize: "0.95rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: 4, marginLeft: "-2rem" }}>
            <span>Aide et support</span>
            <span>Politique de confidentialité</span>
            <span>Conditions générales</span>
          </div>
          <div style={{ fontSize: "0.95rem", opacity: 0.8, display: "flex", flexDirection: "column", gap: 4 }}>
            <span>Cookies</span>
            <span>Ne vendez pas mes informations personnelles</span>
            <span>Inscrivez-vous à la newsletter</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: "1.2rem" }}>
            {/* Icônes réseaux sociaux - cercle blanc, pictogramme noir */}
            <a href="https://x.com/aesoprockwins?lang=ta" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 36, height: 36 }} title="X" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </a>
            <a href="https://www.instagram.com/aesoprockwins/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 36, height: 36 }} title="Instagram">
              <svg width="18" height="18" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCzVC0z-KheQEV_2H2zg6V9w" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 36, height: 36 }} title="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <rect x="7" y="9" width="18" height="14" rx="5" fill="#111"/>
                <polygon points="16,13 22,16 16,19" fill="#fff"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/AesopRockWins/" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 36, height: 36 }} title="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ActualitésPage;

