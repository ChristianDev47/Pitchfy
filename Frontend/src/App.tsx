import './index.css';
import {basic} from './utils/basic.ts';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Principal from './components/Principal';
import { useEffect } from 'react';
import { AuthProvider } from './context/auth';
import PaymentPage from './components/Plan';
import LoginPage from './components/LoginPage';
import { Toaster } from 'react-hot-toast';
import LogPage from './components/LogPage.tsx';

function App() {
  useEffect(() => {
    basic()
  }, [])
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/log" element={<LogPage />} />
          <Route path="/plan/starter" element={<PaymentPage />} />
        </Routes>
      </Router>
    <Toaster position="bottom-right"/>
    </AuthProvider>
  );
}

export default App;
