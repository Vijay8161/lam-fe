import React from 'react';
import { FileText, Target, Settings } from 'lucide-react';
import { Card } from './ui/Card';

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Powerful Features for Professional Analysis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our advanced NER technology delivers precise entity extraction across legal and medical domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <div className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Accurate Legal Entity Extraction</h3>
            </div>
            <p className="text-center text-slate-600 leading-relaxed">
              Identify parties, dates, clauses, legal references, and contractual terms with industry-leading
              precision across various legal document types.
            </p>
          </Card>

          <Card className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
            <div className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Advanced Medical Term Recognition</h3>
            </div>
            <p className="text-center text-slate-600 leading-relaxed">
              Extract medical conditions, medications, procedures, and clinical data from reports, research papers,
              and patient records with clinical accuracy.
            </p>
          </Card>

          <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
            <div className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Customizable for Any Domain</h3>
            </div>
            <p className="text-center text-slate-600 leading-relaxed">
              Adapt and fine-tune the model for specific use cases, terminology, and organizational requirements
              with our flexible training pipeline.
            </p>
            <p className="font-bold text-center text-slate-600 leading-relaxed">
              *For more info Check our <a href="#">Use-Cases</a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;