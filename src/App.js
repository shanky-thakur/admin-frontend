import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import VerificationPage from './Components/VerificationPage/VerificationPage';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (<LoadingPage />) :
        (
          <Routes>
            <Route path="/" element={< LandingPage />} ></Route>
            <Route path="/verification" element={< VerificationPage />}></Route>
          </Routes>
        )}
    </Router>
  );
}

export default App;
