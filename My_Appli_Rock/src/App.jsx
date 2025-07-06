import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import StreamPage from './StreamPage';
import AdminForm from './AdminForm';
import AdminTournee from './AdminTournee';
import AdminLogin from './AdminLogin';
import ActualitésPage from './ActualitésPage';

import Navbar from './Navbar';
import './App.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        navigate('/admin-login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) return null;
  return isAuth ? children : null;
}

function App() {
  // Fonction de déconnexion pour Navbar
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    window.location.href = '/admin-login';
  };

  return (
    <Router>
      <Routes>
        <Route path="/stream" element={<StreamPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/actualites" element={<ActualitésPage />} />
        {/* Navbar sur toutes les autres pages */}
        <Route path="*" element={
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<ProtectedRoute><AdminTournee /></ProtectedRoute>} />
              <Route path="/admin-form" element={<ProtectedRoute><AdminForm /></ProtectedRoute>} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
