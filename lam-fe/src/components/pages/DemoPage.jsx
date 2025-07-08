// // import React from 'react';
// // import { Brain } from 'lucide-react';
// // import Button from '../ui/Button';
// // import { Link } from 'react-router-dom';

// // const DemoPage = () => {
// //     return (
// //         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// //             <div className="bg-[#10172A] h-40 w-full p-2 mx-3">
// //             <h2 className='text-3xl text-white-600 font-bold max-w-2xl mx-auto'>Legal Analysis</h2>
// //             <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Here comes the option for Legal Analysis</p>
// //             <Button variant="outline" size="sm" className="demopage-trynow-button">
// //                 Try Now
// //             </Button>
// //             </div>
// //             <div className="bg-[#10172A] h-40 w-full p-2 mx-3">
// //             <h2 className="text-3xl text-white-600 font-bold max-w-2xl mx-auto">Medical Analysis</h2>
// //             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Here comes the option for Medical Analysis</p>
// //             <Button variant="outline" size="sm" className="demopage-trynow-button">
// //                 Try Now
// //             </Button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default DemoPage;

// // "use client"
// import { Brain, Scale, Stethoscope, ArrowRight } from "lucide-react"
// import Button from "../ui/Button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"

// const DemoPage = () => {
//   const analysisOptions = [
//     {
//       id: "legal",
//       title: "Legal Analysis",
//       description: "Advanced AI-powered legal document analysis and case research",
//       icon: Scale,
//       color: "from-blue-600 to-blue-800",
//       hoverColor: "hover:from-blue-700 hover:to-blue-900",
//     },
//     {
//       id: "medical",
//       title: "Medical Analysis",
//       description: "Comprehensive medical data analysis and diagnostic insights",
//       icon: Stethoscope,
//       color: "from-emerald-600 to-emerald-800",
//       hoverColor: "hover:from-emerald-700 hover:to-emerald-900",
//     },
//   ]

//   const handleTryNow = (analysisType) => {
//     console.log(`Starting ${analysisType} analysis...`)
//     // Add your navigation logic here
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 my-5 rounded-2xl">
//       <div className="container mx-auto px-4 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <Brain className="h-12 w-12 text-primary mr-3" />
//             <h1 className="text-4xl font-bold text-slate-900 dark:text-white">AI Analysis Suite</h1>
//           </div>
//           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
//             Choose your analysis type and let our AI provide comprehensive insights
//           </p>
//         </div>

//         {/* Analysis Options */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {analysisOptions.map((option) => {
//             const IconComponent = option.icon
//             return (
//               <Card
//                 key={option.id}
//                 className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${option.color} ${option.hoverColor} transition-all duration-300 z-0`}
//                 />
//                 <div className="relative z-10">
//                   <CardHeader className="text-center pb-4">
//                     <div className="flex justify-center mb-4">
//                       <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
//                         <IconComponent className="h-8 w-8 text-white" />
//                       </div>
//                     </div>
//                     <CardTitle className="text-2xl font-bold text-white mb-2">{option.title}</CardTitle>
//                     <CardDescription className="text-slate-200 text-base leading-relaxed">
//                       {option.description}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="text-center pt-4">
//                     <Button
//                       onClick={() => handleTryNow(option.id)}
//                       variant="secondary"
//                       size="lg"
//                       className="group/button bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3 transition-all duration-200"
//                     >
//                       Try Now
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
//                     </Button>
//                   </CardContent>
//                 </div>
//               </Card>
//             )
//           })}
//         </div>

//         {/* Additional Info Section */}
//         <div className="mt-16 text-center">
//           <Card className="max-w-2xl mx-auto bg-purple dark:bg-gray-800 shadow-lg rounded-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
//                 Why Choose Our AI Analysis?
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid sm:grid-cols-3 gap-6 text-sm">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
//                   <div className="text-gray-700 dark:text-gray-300">Accuracy Rate</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{'<'}1s</div>
//                   <div className="text-gray-700 dark:text-gray-300">Response Time</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
//                   <div className="text-gray-700 dark:text-gray-300">Availability</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DemoPage;

import React, { useState } from "react";
import Button from "../ui/Button";
import { Scale, Stethoscope, Brain } from "lucide-react";
import LegalAnalysisPage from "./LegalAnalysisPage";
import MedicalAnalysisPage from "./MedicalAnalysisPage";

const DemoPage = () => {
  const [currentPage, setCurrentPage] = useState("demo");

  if (currentPage === "legal") {
    return <LegalAnalysisPage onBack={() => setCurrentPage("demo")} />;
  }

  if (currentPage === "medical") {
    return <MedicalAnalysisPage onBack={() => setCurrentPage("demo")} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 my-5 rounded-2xl">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">AI Analysis Suite</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Choose your analysis type and let our AI provide comprehensive insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Legal Analysis Card */}
          <div className="bg-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Legal Analysis</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Advanced AI-powered legal document analysis and case research
            </p>
            <Button
              onClick={() => setCurrentPage("legal")}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
            >
              Try Now →
            </Button>
          </div>

          {/* Medical Analysis Card */}
          <div className="bg-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Stethoscope className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Medical Analysis</h2>
            <p className="text-green-100 mb-8 leading-relaxed">
              Comprehensive medical data analysis and diagnostic insights
            </p>
            <Button
              onClick={() => setCurrentPage("medical")}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
            >
              Try Now →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;