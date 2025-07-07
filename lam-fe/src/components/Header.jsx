import React from 'react';
import { Brain, HomeIcon } from 'lucide-react';
import Button from './ui/Button';
import { Link,useLocation } from 'react-router-dom';

const Header = () => {
  const loc = useLocation();
  const isHomePage = loc.pathname === '/';
  const isAuthPage = loc.pathname === '/authPage';
  if (isAuthPage) return null;
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 rounded-2xl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/data-analysis.png" alt="site-icon" className="header-icon"/>
          <span className="text-xl font-bold text-slate-800">Legal-Med NER</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {!isHomePage && (
            <Link to="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors group">
              <HomeIcon className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
              Home
            </Link>
          )}
          <Link to="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link to="/demoPage" className="text-slate-600 hover:text-blue-600 transition-colors">
            Demo
          </Link>
          <Link to="#use-cases" className="text-slate-600 hover:text-blue-600 transition-colors">
            Use Cases
          </Link>
          <Link to="/authPage" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors group">
            <Button variant="outline" size="sm" className="sign-in-button bg-black-600">Sign-in</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;