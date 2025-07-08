import React, { useState } from "react";
import Button from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { ArrowLeft, Upload, FileText, MessageCircle, Compass, Download, Scale } from "lucide-react";

const LegalAnalysisPage = ({ onBack }) => {
  const [selectedOption, setSelectedOption] = useState("summarizer");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisResults({
        summary: "This legal document appears to be a contract agreement between two parties...",
        entities: [
          { type: "Person", value: "John Smith", confidence: 0.95 },
          { type: "Date", value: "January 15, 2024", confidence: 0.98 },
          { type: "Legal Term", value: "Force Majeure", confidence: 0.92 },
          { type: "Organization", value: "ABC Corporation", confidence: 0.89 },
        ],
        keyPoints: [
          "Contract duration: 2 years",
          "Payment terms: Net 30 days",
          "Termination clause included",
          "Intellectual property rights defined",
        ],
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const downloadResults = () => {
    // Simulate PDF download
    console.log("Downloading analysis results as PDF...");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2 mr-1.5 bg-amber-100">
                <ArrowLeft className="w-3.5 h-3.5 " />
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-gray-900">Go Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="w-5 h-5 text-blue-400 ml-210 " />
                <span className="font-medium text-lg text-black mr-0">Legal Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Options */}
          <div className="lg:col-span-1">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Analysis Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant={selectedOption === "summarizer" ? "default" : "outline"}
                  className="w-full justify-start mb-2.5"
                  onClick={() => setSelectedOption("summarizer")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Document Summarizer
                </Button>
                <Button
                  variant={selectedOption === "qa" ? "default" : "outline"}
                  className="w-full justify-start mb-2.5"
                  onClick={() => setSelectedOption("qa")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Question & Answer
                </Button>
                <Button
                  variant={selectedOption === "guidance" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedOption("guidance")}
                >
                  <Compass className="w-4 h-4 mr-2" />
                  Legal Guidance
                </Button>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Upload Document</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-4">Upload your legal document (PDF or Word)</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer bg-transparent">
                      Choose File
                    </Button>
                  </label>
                  {uploadedFile && <p className="text-sm text-green-600 mt-2">✓ {uploadedFile.name}</p>}
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={!uploadedFile || isAnalyzing}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  {isAnalyzing ? "Analyzing..." : "Submit for Analysis"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Results */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  {selectedOption === "summarizer" && "Document Summary & Analysis"}
                  {selectedOption === "qa" && "Ask Questions About Your Document"}
                  {selectedOption === "guidance" && "Legal Guidance & Next Steps"}
                </CardTitle>
                {analysisResults && (
                  <Button onClick={downloadResults} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {!analysisResults && !isAnalyzing && (
                  <div className="text-center py-12 text-gray-500">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Upload a document and select an analysis option to get started</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing your document...</p>
                  </div>
                )}

                {analysisResults && selectedOption === "summarizer" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Document Summary</h3>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{analysisResults.summary}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Extracted Entities</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {analysisResults.entities.map((entity, index) => (
                          <div key={index} className="bg-blue-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-blue-900">{entity.type}</span>
                              <span className="text-xs text-blue-600">{Math.round(entity.confidence * 100)}%</span>
                            </div>
                            <p className="text-blue-800 text-sm">{entity.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Points</h3>
                      <ul className="space-y-2">
                        {analysisResults.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {analysisResults && selectedOption === "qa" && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-4">Ask any questions about your uploaded document:</p>
                      <Textarea placeholder="e.g., What are the main obligations of each party?" className="mb-4" />
                      <Button className="bg-blue-600 hover:bg-blue-700">Ask Question</Button>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Previous Questions:</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="font-medium text-blue-900">Q: What is the contract duration?</p>
                          <p className="text-blue-800 text-sm mt-1">
                            A: The contract duration is 2 years, starting from January 15, 2024.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {analysisResults && selectedOption === "guidance" && (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Recommended Next Steps</h3>
                      <ol className="list-decimal list-inside space-y-2 text-green-800">
                        <li>Review the force majeure clause carefully</li>
                        <li>Ensure all parties sign and date the agreement</li>
                        <li>Set up payment processing for Net 30 terms</li>
                        <li>Schedule quarterly review meetings</li>
                      </ol>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-2">Potential Risks</h3>
                      <ul className="list-disc list-inside space-y-1 text-yellow-800">
                        <li>Termination clause may be too broad</li>
                        <li>IP rights section needs clarification</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAnalysisPage;