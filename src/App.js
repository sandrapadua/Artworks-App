import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtworkDetail from './components/ArtworkDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;

