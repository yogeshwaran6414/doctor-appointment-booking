import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/landingPage';
import DoctorProfile from '../components/doctorProfile'; 







function App() {
  return (
    <div className='container mx-auto p-4'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/doctor/:id' element={<DoctorProfile />} />
      </Routes>
    </div>
  )

}

export default App
