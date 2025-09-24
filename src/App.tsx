import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import History from './pages/History';
import ExplorePaths from './pages/ExplorePaths';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/explore" element={<ExplorePaths />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;