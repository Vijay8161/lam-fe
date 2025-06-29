import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;