import React from 'react';
import { Brain, BookOpen, Github, Mail, Users } from 'lucide-react';
import { Link,useLocation } from 'react-router-dom';

const Footer = () => {
  const loc= useLocation();
  const isAuthPage = loc.pathname === '/authPage';
  if(isAuthPage) return null;
  return (
    <footer className="bg-slate-900 text-slate-300 py-5 px-4 rounded-t-2xl my-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">Legal-Med NER</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advanced AI-powered entity recognition for legal and medical document analysis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docsPage" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Docs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm justify-center">
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/contactusPage" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors flex items-center">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 pb-0 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Legal-Med NER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;