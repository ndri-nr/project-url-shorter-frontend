import React from "react";
import { Routes, Route } from 'react-router-dom';
import MasterPage from './pages/MasterPage';
import UrlDetail from './pages/UrlDetail/UrlDetail';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MasterPage />} />
        <Route path="/:slug" element={<UrlDetail />} />
      </Routes>
    </div>
  );
}

export default App;
