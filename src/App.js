import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import VerificationPage from './Components/VerificationPage/VerificationPage';
import WaitingPage from './Components/WaitingPage/WaitingPage';
import Dashboard from './Components/Dashboard/Dashboard';

import LandingPage2 from './Components/LandingPage2/LandingPage2';

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
            <Route path="/waiting" element={< WaitingPage />}></Route>
            <Route path="/dashboard" element={< Dashboard />}></Route>
            <Route path="/2" element={< LandingPage2/>}></Route>
          </Routes>
        )}
    </Router>
  );
}

export default App;
