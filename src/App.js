import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage.js';
import PlatformPage from './PlatformPage';
import ChannelsPage from './ChannelsPage';
import AutomationPage from './AutomationPage';
import IndustriesPage from './IndustriesPage';
import ObservabilityPage from './ObservabilityPage';
import ContactPage from './ContactPage';
import DevelopersPage from './DevelopersPage';
import PricingPage from './PricingPage';

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#0b5cff' },
      secondary: { main: '#ff6b35' },
      background: { default: '#f5f7fa' },
    },
    typography: {
      fontFamily: "'Manrope', 'Space Grotesk', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="page">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/channels" element={<ChannelsPage />} />
              <Route path="/automation" element={<AutomationPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/observability" element={<ObservabilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/developers" element={<DevelopersPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
