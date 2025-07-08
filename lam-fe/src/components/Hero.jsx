import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="secondary" className="mb-4 bg-blue-100 text-white-700 border-blue-200">
          AI-Powered Entity Recognition
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Legal-Med <span className="text-blue-600">NER</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">Extract Meaning. Empower Decisions.</p>
        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          Advanced AI technology that identifies and extracts key entities from legal and medical documents with
          unprecedented accuracy and speed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demoPage">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Try Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </Link>
          <Link to="/docsPage">
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                View Documentation
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;