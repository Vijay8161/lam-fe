import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import DemoPage from './components/pages/DemoPage';
import AuthPage from './components/pages/AuthPage';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import DocumentationPage from './components/pages/DocumentationPage';
import ContactUsPage from './components/pages/ContactusPage';

function App() {
  return (
    // <p>hello</p>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demoPage" element={<DemoPage />} />
            <Route path="/authPage" element={<AuthPage />} />
            <Route path="/docsPage" element={<DocumentationPage />} />
            <Route path="/contactusPage" element={<ContactUsPage />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
            <Route path="/errorPage" element={<h1>Under Maintenance</h1>} />
          </Routes>
        </main>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
