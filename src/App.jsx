import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme } from './store/slices/themeSlice';
import { store } from './store';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import DiscoveryPage from './pages/DiscoveryPage';
import SchedulingHubPage from './pages/SchedulingHubPage';
import InsightsPage from './pages/InsightsPage';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      store.dispatch(setTheme(savedTheme));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      store.dispatch(setTheme(prefersDark ? 'dark' : 'light'));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/scheduling" element={<SchedulingHubPage />} />
            <Route path="/insights" element={<InsightsPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
