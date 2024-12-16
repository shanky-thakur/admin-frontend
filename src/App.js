import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import VerificationPage from './Components/VerificationPage/VerificationPage';
import WaitingPage from './Components/WaitingPage/WaitingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import HomePage from './Components/HomePage/HomePage';
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import EmployeeAttendance from './Components/EmployeeProfile/EmployeeAttendance';
import RemoveTeacher from './Components/EmployeeProfile/RemoveTeacher';
import Students from './Components/Students/Students';
import StudentProfile from './Components/Students/StudentProfile';
import RemoveStudent from './Components/Students/RemoveStudent';
import GuardianInfo from './Components/Students/GuardianInfo';
import StudentAttendance from './Components/Students/StudentAttendance';
import StudentFee from './Components/Students/StudentFee';
import AllFeeStudent from './Components/Students/AllFeeStudent';
import ExtraCurricular from './Components/Students/ExtraCurricular';
import Sports from "./Components/Students/Sports";
import Achievements from './Components/Students/Achievements';
import Calendar from './Components/Calender/Calender';

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
            <Route path="/employee" element={< Dashboard />}></Route>
            <Route path="/homepage" element={< HomePage />}></Route>
            <Route path="/employee/profile" element={< EmployeeProfile />} ></Route>
            <Route path="/employee/attendance" element={< EmployeeAttendance />} ></Route>
            <Route path="/employee/remove" element={< RemoveTeacher />}></Route>
            <Route path="/students" element={< Students />}></Route>
            <Route path="/student/profile" element={< StudentProfile />} ></Route>
            <Route path="/student/guardian" element={< GuardianInfo />}></Route>
            <Route path="/student/remove" element={< RemoveStudent />}></Route>
            <Route path="/student/attendance" element={< StudentAttendance />} ></Route>
            <Route path="/student/feePayment" element={< StudentFee />} ></Route>
            <Route path="/student/fee/all" element={< AllFeeStudent />} ></Route>
            <Route path="/student/extraCurricular/clubs" element={< ExtraCurricular />} ></Route>
            <Route path="/student/extraCurricular/sports" element={< Sports />} ></Route>
            <Route path="/student/extraCurricular/achievements" element={< Achievements />} ></Route>
            <Route path="/calender" element={< Calendar />}></Route>
          </Routes>
        )}
    </Router>
  );
}

export default App;
