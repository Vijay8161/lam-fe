import React, { useState } from "react";
import Button from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Badge from "../ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ArrowLeft,
  Scale,
  Stethoscope,
  FileText,
  MessageCircle,
  Compass,
  Upload,
  Code,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react";

const DocumentationPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("legal");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              {onBack && (
                <Button variant="ghost" onClick={onBack} className="p-2">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              )}
              <div className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Documentation</span>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              Version 1.0
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toggle Switch */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 gap-1 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger 
                value="legal" 
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-all
                        data-[state=active]:bg-purple data-[state=active]:shadow-sm data-[state=inactive]:bg-white data-[state=active]:bg-amber-100
                        hover:bg-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
                <Scale className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Legal Analysis</span>
            </TabsTrigger>
            <TabsTrigger 
                value="medical" 
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-all
                        data-[state=active]:bg-blue data-[state=active]:shadow-sm data-[state=inactive]:bg-white data-[state=active]:bg-amber-100
                        hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
                <Stethoscope className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Medical Analysis</span>
            </TabsTrigger>
            </TabsList>

            {/* Legal Documentation */}
            <TabsContent value="legal" className="mt-8">
              <LegalDocumentation />
            </TabsContent>

            {/* Medical Documentation */}
            <TabsContent value="medical" className="mt-8">
              <MedicalDocumentation />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Legal Documentation Component
const LegalDocumentation = () => {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <span>Legal Analysis Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Legal-Med NER's Legal Analysis suite provides advanced AI-powered document analysis for legal professionals.
            Our system uses state-of-the-art Named Entity Recognition (NER) technology to extract, analyze, and provide
            insights from legal documents with unprecedented accuracy.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Document Types Supported</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Contracts & Agreements</li>
                <li>• Legal Briefs</li>
                <li>• Court Documents</li>
                <li>• Regulatory Filings</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Key Features</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Entity Extraction</li>
                <li>• Document Summarization</li>
                <li>• Q&A Capabilities</li>
                <li>• Legal Guidance</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Accuracy Metrics</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• 99.9% Entity Recognition</li>
                <li>• 98.5% Context Understanding</li>
                <li>• 97.8% Legal Term Accuracy</li>
                <li>• Sub-second Processing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold">Upload Your Document</h4>
                <p className="text-gray-600 text-sm">Support for PDF and Word documents up to 50MB</p>
              </div>
            </div>
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold">Choose Analysis Type</h4>
                <p className="text-gray-600 text-sm">Select from Summarizer, Q&A, or Legal Guidance</p>
              </div>
            </div>
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold">Review Results</h4>
                <p className="text-gray-600 text-sm">Get comprehensive analysis with downloadable reports</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Documentation */}
      <Card>
        <CardHeader>
          <CardTitle>Feature Documentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Document Summarizer */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Document Summarizer</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Automatically extracts key information and provides structured summaries of legal documents.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Extracted Entities Include:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Badge variant="outline">Parties</Badge>
                <Badge variant="outline">Dates</Badge>
                <Badge variant="outline">Legal Terms</Badge>
                <Badge variant="outline">Organizations</Badge>
                <Badge variant="outline">Monetary Values</Badge>
                <Badge variant="outline">Locations</Badge>
                <Badge variant="outline">Contract Clauses</Badge>
                <Badge variant="outline">Obligations</Badge>
              </div>
            </div>
          </div>

          {/* Q&A System */}
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold">Question & Answer</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Interactive chatbot that answers specific questions about your uploaded legal documents.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Example Questions:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "What are the termination conditions in this contract?"</li>
                <li>• "Who are the parties involved in this agreement?"</li>
                <li>• "What are the payment terms and deadlines?"</li>
                <li>• "Are there any penalty clauses mentioned?"</li>
              </ul>
            </div>
          </div>

          {/* Legal Guidance */}
          <div className="border-l-4 border-purple-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <Compass className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Legal Guidance</h3>
            </div>
            <p className="text-gray-700 mb-3">
              AI-powered recommendations for next steps, potential risks, and legal considerations.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Guidance Categories:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-700">Recommended Actions</h5>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Document review priorities</li>
                    <li>• Compliance requirements</li>
                    <li>• Next procedural steps</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-700">Risk Assessment</h5>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Potential legal issues</li>
                    <li>• Missing clauses</li>
                    <li>• Ambiguous terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>File Upload Requirements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Supported Formats
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PDF (.pdf) - Recommended</li>
                <li>• Microsoft Word (.doc, .docx)</li>
                <li>• Text files (.txt)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                File Specifications
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Maximum size: 50MB</li>
                <li>• Text-based documents only</li>
                <li>• English language support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>API Integration</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">Integrate Legal-Med NER into your applications with our RESTful API.</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <div className="mb-2 text-gray-400">// POST /api/legal/analyze</div>
            <div>curl -X POST https://api.legalmedner.com/legal/analyze \</div>
            <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
            <div className="ml-4">-H "Content-Type: multipart/form-data" \</div>
            <div className="ml-4">-F "file=@document.pdf" \</div>
            <div className="ml-4">-F "analysis_type=summarizer"</div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">How accurate is the legal entity extraction?</h4>
              <p className="text-gray-700 text-sm mt-1">
                Our system achieves 99.9% accuracy in legal entity recognition, trained on millions of legal documents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Is my data secure and confidential?</h4>
              <p className="text-gray-700 text-sm mt-1">
                Yes, all documents are encrypted in transit and at rest. We comply with SOC 2 Type II and GDPR
                standards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Can I integrate this with my existing legal software?</h4>
              <p className="text-gray-700 text-sm mt-1">
                We provide comprehensive APIs and webhooks for seamless integration.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Medical Documentation Component
const MedicalDocumentation = () => {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Stethoscope className="w-5 h-5 text-green-600" />
            <span>Medical Analysis Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Legal-Med NER's Medical Analysis suite leverages advanced AI to analyze medical reports, prescriptions, and
            patient data. Our HIPAA-compliant system provides comprehensive insights for healthcare professionals and
            patients while maintaining the highest standards of data security.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Document Types Supported</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Lab Reports</li>
                <li>• Medical Records</li>
                <li>• Prescription Data</li>
                <li>• Diagnostic Images</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Key Features</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Medical Entity Extraction</li>
                <li>• Symptom Analysis</li>
                <li>• Drug Interaction Checks</li>
                <li>• Health Recommendations</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Compliance & Security</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• HIPAA Compliant</li>
                <li>• End-to-End Encryption</li>
                <li>• Audit Logging</li>
                <li>• Data Anonymization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-medium">Upload Medical Reports</h4>
                <p className="text-gray-600 text-sm">Support for PDF, JPEG, PNG formats up to 25MB</p>
              </div>
            </div>
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold">Add Prescription Information</h4>
                <p className="text-gray-600 text-sm">Input current medications and dosages</p>
              </div>
            </div>
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold">Describe Concerns</h4>
                <p className="text-gray-600 text-sm">Share symptoms and health concerns</p>
              </div>
            </div>
            <div className="flex items-start justify-center space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold">Get Analysis</h4>
                <p className="text-gray-600 text-sm">Receive comprehensive medical insights</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Documentation */}
      <Card>
        <CardHeader>
          <CardTitle>Feature Documentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Medical Summarizer */}
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold">Medical Summarizer</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Analyzes medical reports and extracts key health information, conditions, and recommendations.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Extracted Medical Entities:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Badge variant="outline">Conditions</Badge>
                <Badge variant="outline">Medications</Badge>
                <Badge variant="outline">Symptoms</Badge>
                <Badge variant="outline">Test Results</Badge>
                <Badge variant="outline">Dosages</Badge>
                <Badge variant="outline">Allergies</Badge>
                <Badge variant="outline">Procedures</Badge>
                <Badge variant="outline">Vital Signs</Badge>
              </div>
            </div>
          </div>

          {/* Medical Q&A */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Medical Q&A</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Ask specific questions about your medical reports, test results, and health conditions.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Example Questions:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "What do my blood test results indicate?"</li>
                <li>• "Are there any drug interactions with my medications?"</li>
                <li>• "What lifestyle changes are recommended?"</li>
                <li>• "Should I be concerned about these symptoms?"</li>
              </ul>
            </div>
          </div>

          {/* Medical Guidance */}
          <div className="border-l-4 border-purple-500 pl-4">
            <div className="flex items-center space-x-2 mb-2">
              <Compass className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Medical Guidance</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Personalized health recommendations and guidance based on your medical data and concerns.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Guidance Categories:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-700">Health Recommendations</h5>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Lifestyle modifications</li>
                    <li>• Dietary suggestions</li>
                    <li>• Exercise recommendations</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-700">Health Alerts</h5>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Critical value notifications</li>
                    <li>• Drug interaction warnings</li>
                    <li>• Follow-up reminders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>File Upload Requirements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Supported Formats
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• PDF (.pdf) - Lab reports, medical records</li>
                <li>• JPEG (.jpg, .jpeg) - Medical images, prescriptions</li>
                <li>• PNG (.png) - Screenshots, digital reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Info className="w-4 h-4 mr-2" />
                File Specifications
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Maximum size: 25MB per file</li>
                <li>• Multiple file upload supported</li>
                <li>• HIPAA-compliant processing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-yellow-800">
            <AlertCircle className="w-5 h-5" />
            <span>Important Medical Disclaimer</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-800 text-sm leading-relaxed">
            <strong>This tool is for informational purposes only and does not constitute medical advice.</strong>
            Always consult with qualified healthcare professionals for medical decisions. Our AI analysis should
            supplement, not replace, professional medical judgment. In case of medical emergencies, contact emergency
            services immediately.
          </p>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Is my medical data secure and private?</h4>
              <p className="text-gray-700 text-sm mt-1">
                Yes, we are fully HIPAA compliant with end-to-end encryption and strict data privacy protocols.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Can this replace my doctor's advice?</h4>
              <p className="text-gray-700 text-sm mt-1">
                No, our tool provides informational insights only. Always consult healthcare professionals for medical
                decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">What types of medical documents work best?</h4>
              <p className="text-gray-700 text-sm mt-1">
                Clear, text-based reports like lab results, medical summaries, and prescription lists provide the best
                analysis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentationPage;