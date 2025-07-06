import React, { useEffect, useState } from 'react';
// import Navbar from "./Navbar"; // supprimé car déjà présent dans App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

function AdminTournee() {
  const navigate = useNavigate();
  const [dates, setDates] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Charger les dates depuis Firestore en temps réel
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tourneeDates"), (snapshot) => {
      const datesArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDates(datesArray);
    });
    return () => unsubscribe();
  }, []);

  // Supprimer une date dans Firestore
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tourneeDates", id));
    setConfirmDeleteId(null);
  };

  // Éditer une date
  const handleEdit = (id) => {
    navigate(`/admin-form?id=${id}`);
  };

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      {/* <Navbar onLogout={onLogout} /> */} {/* supprimé */}
      <div className="container mt-4 d-flex flex-column align-items-center">
        <button
          className="btn btn-primary btn-lg mb-5"
          style={{ 
            minWidth: '220px', 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            background: '#fff', 
            color: '#222', 
            border: '2px solid #222',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.background='#f1f1f1'; e.currentTarget.style.color='#111'; }}
          onMouseOut={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='#222'; }}
          onClick={() => navigate('/admin-form')}
        >
          Ajouter
        </button>
        <div className="d-flex justify-content-center w-100">
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              width: "90%",
              maxWidth: "900px",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: dates.length === 0 ? "center" : "flex-start",
              margin: "0 auto",
              padding: "2rem 1.5rem"
            }}
          >
            {/* Titre du bloc blanc */}
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#222', marginBottom: '1.5rem', letterSpacing: '1px', textAlign: 'center' }}>
              Liste des dates de tournée
            </h2>
            {dates.length === 0 ? (
              <span style={{ color: "#222", fontSize: "1.1rem" }}>
                Aucune date de tournée enregistrée.
              </span>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {dates.map((d) => (
                  <li key={d.id} style={{
                    marginBottom: '1.5rem',
                    background: '#f7f7f7',
                    padding: '1.1rem 1.2rem',
                    borderRadius: '8px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                    position: 'relative'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#222' }}>{d.tournee} — {d.ville}, {d.pays}</div>
                      <div>
                        {/* Icône éditer */}
                        <span onClick={() => handleEdit(d.id)} title="Modifier" style={{ cursor: 'pointer', marginRight: '1.2rem', fontSize: '1.35rem', verticalAlign: 'middle', background: '#f1f1f1', borderRadius: '50%', padding: '0.2rem', border: 'none' }} onMouseOver={e => e.currentTarget.style.background='#e0e0e0'} onMouseOut={e => e.currentTarget.style.background='#f1f1f1'}>
                          ✏️
                        </span>
                        {/* Confirmation suppression */}
                        {confirmDeleteId === d.id ? (
                          <div style={{
                            background: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            padding: '1rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            minWidth: '260px',
                          }}>
                            <span style={{ color: '#a12a2a', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>
                              Voulez-vous vraiment supprimer ?
                            </span>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                              <button onClick={() => setConfirmDeleteId(null)} className="btn btn-secondary btn-sm" style={{ fontWeight: 600, minWidth: '90px' }}>
                                Annuler
                              </button>
                              <button onClick={() => handleDelete(d.id)} className="btn btn-danger btn-sm" style={{ fontWeight: 600, minWidth: '90px' }}>
                                Supprimer
                              </button>
                            </div>
                          </div>
                        ) : (
                          <span onClick={() => setConfirmDeleteId(d.id)} title="Supprimer" style={{ cursor: 'pointer', fontSize: '1.35rem', verticalAlign: 'middle', background: '#f1f1f1', borderRadius: '50%', padding: '0.2rem', border: 'none', color: '#e74c3c' }} onMouseOver={e => e.currentTarget.style.background='#ffeaea'} onMouseOut={e => e.currentTarget.style.background='#f1f1f1'}>
                            🗑️
                          </span>
                        )}
                      </div>
                    </div>
                    <div style={{ color: '#444', fontSize: '1rem' }}>
                      <span style={{ fontWeight: 500 }}>{d.lieu}</span> — {d.date} à {d.heure}
                    </div>
                    <span style={{
                      background: d.statut === 'available' ? '#b6f0c1' : '#ffbdbd',
                      color: d.statut === 'available' ? '#0b5d1e' : '#a12a2a',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      borderRadius: '999px',
                      padding: '0.2rem 0.7rem',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      marginTop: '0.5rem',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                      border: 'none',
                      letterSpacing: '0.5px'
                    }}>{d.statut === 'available' ? 'available' : 'sold out'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTournee;