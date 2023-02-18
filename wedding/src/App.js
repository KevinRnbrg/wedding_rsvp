import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import InvitationForm from './pages/InvitationForm';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitation" element={<InvitationForm />} />
    </Routes>
  );
}

export default App;
