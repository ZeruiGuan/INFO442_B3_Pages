import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebHeader } from './components/WebHeader';
import { JobList } from './components/JobList';
import { Discussion } from './components/Discussion';
import { VisaInfo } from './components/VisaInfo';
import { Login } from './components/Login';
import { SignUp } from './components/Signup';
import { Logout } from './components/Logout';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <WebHeader />
        <div className='container-fluid d-flex flex-column'>
        <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/visainfo" element={<VisaInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
