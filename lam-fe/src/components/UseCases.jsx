import React from 'react';
import { FileText, Target, CheckCircle } from 'lucide-react';
import Badge from './ui/Badge';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Transform Your Workflow</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how Legal-Med NER can streamline your document analysis across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Legal Contract Analysis</h3>
            <p className="text-slate-600 leading-relaxed">
              Automatically extract key terms, parties, dates, and obligations from contracts, agreements, and legal
              documents to accelerate review processes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">
                Contract Review
              </Badge>
              <Badge variant="outline" className="text-xs">
                Due Diligence
              </Badge>
              <Badge variant="outline" className="text-xs">
                Compliance
              </Badge>
            </div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <Target className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Clinical Report Summarization</h3>
            <p className="text-slate-600 leading-relaxed">
              Extract critical medical information from patient records, lab reports, and clinical notes to support
              healthcare decision-making and research.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">
                Patient Records
              </Badge>
              <Badge variant="outline" className="text-xs">
                Clinical Research
              </Badge>
              <Badge variant="outline" className="text-xs">
                Medical Coding
              </Badge>
            </div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <CheckCircle className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Compliance Automation</h3>
            <p className="text-slate-600 leading-relaxed">
              Ensure regulatory compliance by automatically identifying and tracking required information across legal
              and medical documentation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs">
                HIPAA
              </Badge>
              <Badge variant="outline" className="text-xs">
                FDA
              </Badge>
              <Badge variant="outline" className="text-xs">
                Legal Standards
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;