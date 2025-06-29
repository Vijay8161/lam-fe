// src/components/Demo.jsx
import React from 'react';
import Badge from './ui/Badge';

const Demo = () => {
  return (
    <section id="demo" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">See It In Action</h2>
          <p className="text-lg text-slate-600">
            Watch how Legal-Med NER identifies and extracts entities from complex documents
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Input Document</h3>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm leading-relaxed">
                <p className="text-slate-700">
                  {"The patient, "}
                  <span className="bg-blue-200 px-1 rounded">John Smith</span>
                  {", was admitted on "}
                  <span className="bg-green-200 px-1 rounded">March 15, 2024</span>
                  {" with symptoms of "}
                  <span className="bg-red-200 px-1 rounded">acute myocardial infarction</span>
                  {". Treatment included "}
                  <span className="bg-purple-200 px-1 rounded">aspirin 325mg</span>
                  {" and "}
                  <span className="bg-purple-200 px-1 rounded">metoprolol 50mg</span>
                  {". The attending physician "}
                  <span className="bg-blue-200 px-1 rounded">Dr. Sarah Johnson</span>
                  {" recommended immediate "}
                  <span className="bg-yellow-200 px-1 rounded">cardiac catheterization</span>
                  {"."}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Extracted Entities</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Person
                  </Badge>
                  <span className="text-sm text-slate-600">John Smith, Dr. Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Date
                  </Badge>
                  <span className="text-sm text-slate-600">March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    Condition
                  </Badge>
                  <span className="text-sm text-slate-600">acute myocardial infarction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Medication
                  </Badge>
                  <span className="text-sm text-slate-600">aspirin 325mg, metoprolol 50mg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Procedure
                  </Badge>
                  <span className="text-sm text-slate-600">cardiac catheterization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;