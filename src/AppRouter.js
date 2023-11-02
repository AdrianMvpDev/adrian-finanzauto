import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Create from './components/pages/Create';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
