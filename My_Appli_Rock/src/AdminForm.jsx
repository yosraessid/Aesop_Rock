import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar"; // supprimé car déjà présent dans App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom'; // utilisé pour le bouton retour et la redirection après ajout
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import './App.css';

function AdminForm() {
  // State pour le formulaire (ville, lieu, date, heure, statut, tournee, pays)
  const [form, setForm] = useState({ ville: '', lieu: '', date: '', heure: '', statut: 'available', tournee: '', pays: '' });
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate(); // pour le bouton retour et la redirection
  const location = useLocation();

  // Récupérer l'id dans l'URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    if (id) {
      setEditId(id);
      // Charger la date depuis Firestore
      getDoc(doc(db, "tourneeDates", id)).then((snap) => {
        if (snap.exists()) {
          setForm(snap.data());
        }
      });
    }
  }, [location]);

  // Gérer le changement dans le formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ajouter ou modifier une date
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.ville || !form.lieu || !form.date || !form.heure || !form.tournee || !form.pays) return;
    if (editId) {
      // Modifier la date existante
      await updateDoc(doc(db, "tourneeDates", editId), { ...form });
    } else {
      // Ajouter une nouvelle date
      await addDoc(collection(db, "tourneeDates"), { ...form });
    }
    setForm({ ville: '', lieu: '', date: '', heure: '', statut: 'available', tournee: '', pays: '' });
    navigate('/admin');
  };

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      {/* Bouton retour */}
      <div className="container mt-4">
        <button
          className="btn btn-secondary mb-3"
          style={{ fontWeight: 600, fontSize: '1.1rem', background: '#444', color: '#fff', border: 'none' }}
          onClick={() => navigate('/admin')}
        >
          ← Retour
        </button>
      </div>
      {/* <Navbar onLogout={onLogout} isAdmin={true} /> */} {/* supprimé */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="rounded shadow p-4" style={{ width: "1000px", minHeight: "80vh", marginTop: "2rem", marginBottom: "2rem", background: "#444" }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '2.2rem', letterSpacing: '1px', textAlign: 'center' }}>
            Administration de la tournée "Black Hole Superette" – Aesop Rock
          </h2>
          <form onSubmit={handleSubmit} style={{ marginBottom: '2.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem 3rem', display: 'grid', gap: '1.2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Nom de la tournée :</label>
                <input name="tournee" value={form.tournee} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Pays :</label>
                <input name="pays" value={form.pays} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Ville :</label>
                <input name="ville" value={form.ville} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Lieu :</label>
                <input name="lieu" value={form.lieu} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Date :</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Heure :</label>
                <input name="heure" type="time" value={form.heure} onChange={handleChange} required style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', marginTop: 4 }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <label style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>Statut :</label>
              <select name="statut" value={form.statut} onChange={handleChange} required style={{ padding: '0.6rem 1.2rem', borderRadius: '6px', border: '1px solid #444', fontSize: '1rem', background: form.statut === 'available' ? '#b6f0c1' : '#ffbdbd', color: form.statut === 'available' ? '#0b5d1e' : '#a12a2a', fontWeight: 700, transition: 'background 0.2s, color 0.2s' }}>
                <option value="available">
                Disponible</option>
                <option value="sold out">Épuisé</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" style={{ marginTop: '1rem', background: 'linear-gradient(90deg, #222, #444)', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.8rem 2.2rem', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(60,60,60,0.08)', letterSpacing: '1px', minWidth: '180px', transition: 'background 0.2s' }}>{editId ? 'Enregistrer' : 'Ajouter'}</button>
            </div>
          </form>
          {/* Liste des dates supprimée ici */}
        </div>
      </div>
    </div>
  );
}

export default AdminForm; 