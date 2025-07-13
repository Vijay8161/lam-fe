import React, { useState } from "react";
import Button from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { ArrowLeft, Upload, FileText, MessageCircle, Compass, Download, Stethoscope, Pill } from "lucide-react";

const MedicalAnalysisPage = ({ onBack }) => {
  const [selectedOption, setSelectedOption] = useState("summarizer");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [prescriptions, setPrescriptions] = useState("");
  const [concerns, setConcerns] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0 && !prescriptions && !concerns) return;

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisResults({
        summary: "Based on your medical reports and information, here's a comprehensive analysis...",
        conditions: [
          { name: "Hypertension", severity: "Moderate", confidence: 0.92 },
          { name: "Type 2 Diabetes", severity: "Mild", confidence: 0.87 },
          { name: "High Cholesterol", severity: "Moderate", confidence: 0.94 },
        ],
        medications: [
          { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
          { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
        ],
        recommendations: [
          "Regular blood glucose monitoring",
          "Low-sodium diet recommended",
          "30 minutes of exercise daily",
          "Follow-up appointment in 3 months",
        ],
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const downloadResults = () => {
    console.log("Downloading medical analysis results...");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2 mr-1.5 bg-amber-100">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-gray-900">Go Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-green-400 ml-210 " />
                <span className="font-medium text-lg text-black mr-0">Medical Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Options and Input */}
          <div className="lg:col-span-1 space-y-6">
            {/* Analysis Options */}
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
                  Medical Summarizer
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
                  Medical Guidance
                </Button>
              </CardContent>
            </Card>

            {/* Upload Medical Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Upload Medical Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-4">Upload reports (JPEG, PNG, PDF)</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="medical-file-upload"
                  />
                  <label htmlFor="medical-file-upload">
                    <Button variant="outline" className="cursor-pointer bg-transparent">
                      Choose Files
                    </Button>
                  </label>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {uploadedFiles.map((file, index) => (
                        <p key={index} className="text-sm text-green-600">
                          ✓ {file.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Prescriptions Input */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Pill className="w-5 h-5 mr-2" />
                  Current Prescriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List your current medications, dosages, and frequency..."
                  value={prescriptions}
                  onChange={(e) => setPrescriptions(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Personal Concerns */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Personal Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe any symptoms, concerns, or questions you have..."
                  value={concerns}
                  onChange={(e) => setConcerns(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            <Button
              onClick={handleSubmit}
              disabled={(uploadedFiles.length === 0 && !prescriptions && !concerns) || isAnalyzing}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isAnalyzing ? "Analyzing..." : "Submit for Analysis"}
            </Button>
          </div>

          {/* Right Content - Results */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  {selectedOption === "summarizer" && "Medical Summary & Analysis"}
                  {selectedOption === "qa" && "Ask Medical Questions"}
                  {selectedOption === "guidance" && "Medical Guidance & Recommendations"}
                </CardTitle>
                {analysisResults && (
                  <Button onClick={downloadResults} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {!analysisResults && !isAnalyzing && (
                  <div className="text-center py-12 text-gray-500">
                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Upload medical reports or enter information to get started</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing your medical information...</p>
                  </div>
                )}

                {analysisResults && selectedOption === "summarizer" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Medical Summary</h3>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{analysisResults.summary}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Identified Conditions</h3>
                      <div className="grid gap-4">
                        {analysisResults.conditions.map((condition, index) => (
                          <div key={index} className="bg-red-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-red-900">{condition.name}</span>
                              <span className="text-xs text-red-600">
                                {Math.round(condition.confidence * 100)}% confidence
                              </span>
                            </div>
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                condition.severity === "Mild"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : condition.severity === "Moderate"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {condition.severity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Current Medications</h3>
                      <div className="space-y-3">
                        {analysisResults.medications.map((med, index) => (
                          <div key={index} className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                            <div>
                              <span className="font-medium text-blue-900">{med.name}</span>
                              <p className="text-blue-700 text-sm">
                                {med.dosage} - {med.frequency}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {analysisResults && selectedOption === "qa" && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-4">Ask questions about your medical condition or reports:</p>
                      <Textarea placeholder="e.g., What do my blood test results indicate?" className="mb-4" />
                      <Button className="bg-green-600 hover:bg-green-700">Ask Question</Button>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Previous Questions:</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="font-medium text-green-900">
                            Q: Should I be concerned about my blood pressure?
                          </p>
                          <p className="text-green-800 text-sm mt-1">
                            A: Your blood pressure readings indicate mild hypertension. Continue monitoring and follow
                            your doctor's medication plan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {analysisResults && selectedOption === "guidance" && (
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Recommended Actions</h3>
                      <ol className="list-decimal list-inside space-y-2 text-green-800">
                        {analysisResults.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-2">Important Notes</h3>
                      <p className="text-yellow-800 text-sm">
                        This analysis is for informational purposes only. Always consult with your healthcare provider
                        for medical decisions.
                      </p>
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

export default MedicalAnalysisPage;