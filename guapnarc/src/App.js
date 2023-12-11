import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseTracker from './pages/ExpenseTracker';
import Login from './pages/Login';
import Register from './pages/Register';
import TermsAgreement from './components/TermsAgreement';
import Dashboard from './pages/Dashboard';
import InvalidPage from './pages/InvalidPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/terms' element={ <TermsAgreement /> } />
            <Route path='/expensetracker' element={ <ExpenseTracker /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='*' element={ <InvalidPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
