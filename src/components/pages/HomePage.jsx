import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../Hero';
import Features from '../Features';
import Demo from '../Demo';
import UseCases from '../UseCases';
import CTA from '../CTA';
import '../../App.css';
import '../../index.css';

const HomePage = () => {
  return (
    <div>
      <main>
        <Hero />
        <Features />
        <Demo />
        <UseCases />
        <CTA />
      </main>
    </div>
  );
}

export default HomePage;