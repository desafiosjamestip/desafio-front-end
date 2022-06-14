import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Budget } from '../components/Budget';
import { Table } from '../components/Table';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Budget />} />
        <Route path="/products" element={<Table />} />
      </Routes>
    </Router>
  );
}
