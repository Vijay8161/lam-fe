// src/components/CTA.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Document Analysis?</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Join leading organizations using Legal-Med NER to extract meaningful insights from their most important
          documents.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;