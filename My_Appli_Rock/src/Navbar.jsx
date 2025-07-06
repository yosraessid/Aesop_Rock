import React from "react";

function Navbar({ onLogout }) {
  return (
    <>
      <style>{`
        .navbar-logo {
          height: 160px !important;
          width: auto;
          margin-right: 1.5rem;
          transition: height 0.2s;
        }
        @media (max-width: 700px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start !important;
            padding: 1rem 1rem;
          }
          .navbar-logo {
            height: 110px !important;
            margin-bottom: 0.7rem;
          }
          .navbar-links {
            gap: 1.2rem !important;
            flex-direction: column;
            width: 100%;
          }
          .navbar-links a {
            font-size: 1rem !important;
            padding: 0.3rem 0;
          }
        }
      `}</style>
      <nav className="navbar" style={{
        background: "#333",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        color: "#fff",
        padding: "0.7rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        minHeight: "70px",
        borderRadius: 0,
        width: "100vw",
        position: "relative",
        left: 0
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/images/aesop-rock-logo.png" alt="Aesop Rock Logo" className="navbar-logo" />
        </div>
        <div className="navbar-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem", transition: "gap 0.2s" }}>
          {onLogout && (
            <button
              onClick={onLogout}
              className="btn btn-danger ms-4"
              style={{
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                padding: '0.5rem',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Déconnexion"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar; 