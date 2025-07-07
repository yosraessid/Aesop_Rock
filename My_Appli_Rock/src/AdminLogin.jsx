import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (onLogin) onLogin();
      navigate('/admin');
    } catch {
      setError("Email ou mot de passe incorrect, ou utilisateur inexistant.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <div style={{
        background: "linear-gradient(135deg, #444)",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        padding: "3rem 3rem 2.5rem 3rem",
        maxWidth: "400px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', letterSpacing: '1px' }}>Connexion</h2>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={{ marginBottom: "1.2rem" }}>
            <label htmlFor="email" style={{ color: "#fff", fontWeight: "bold", display: "block", marginBottom: 6 }}>Identifiant</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                borderRadius: "10px",
                border: "1px solid #444",
                background: "#eaf1fb",
                color: "#18191a",
                fontSize: "1.1rem"
              }}
            />
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <label htmlFor="password" style={{ color: "#fff", fontWeight: "bold", display: "block", marginBottom: 6 }}>Mot de passe</label>
            <div style={{ position: "relative" }}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid #444",
                  background: "#eaf1fb",
                  color: "#18191a",
                  fontSize: "1.1rem",
                  paddingRight: "1rem",
                  boxSizing: "border-box",
                  marginRight: "0.5rem"
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0.7rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#18191a",
                  fontSize: "1.2rem"
                }}
                title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18191a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="8" ry="5"/><circle cx="12" cy="12" r="2.5"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18191a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7 1.21-2.61 3.16-4.77 5.66-6.11"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.93 0 3.5-1.57 3.5-3.5 0-.47-.09-.92-.26-1.33"/></svg>
                )}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
            <button type="submit" style={{
              marginLeft: "auto",
              background: "#fff",
              color: "#18191a",
              border: "none",
              borderRadius: "6px",
              padding: "0.7rem 1.5rem",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer"
            }}>Se connecter</button>
          </div>
          {error && <p style={{color: "#ff4b2b", marginTop: "1rem"}}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin; 