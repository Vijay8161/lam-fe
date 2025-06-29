// src/components/Header.jsx
import React from 'react';
import { Brain } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/data-analysis.png" alt="site-icon" className="header-icon"/>
          <span className="text-xl font-bold text-slate-800">Legal-Med NER</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link to="#demo" className="text-slate-600 hover:text-blue-600 transition-colors">
            Demo
          </Link>
          <Link to="#use-cases" className="text-slate-600 hover:text-blue-600 transition-colors">
            Use Cases
          </Link>
          <Button variant="outline" size="sm" className="sign-in-button">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;