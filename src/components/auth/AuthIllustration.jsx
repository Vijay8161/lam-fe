import { FileText, Brain, Search, Zap } from "lucide-react"

export const AuthIllustration = () => (
  <div className="relative">
    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
      <div className="h-full flex flex-col justify-center items-center space-y-6">
        <div className="relative">
          <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md transform rotate-3"></div>
          <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md absolute top-0 left-0 transform -rotate-3"></div>
          <div className="w-16 h-20 bg-blue-50 border-2 border-blue-300 rounded-lg shadow-md absolute top-0 left-0">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mt-2" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-0.5 bg-blue-400"></div>
          <Brain className="w-8 h-8 text-blue-600 animate-pulse" />
          <div className="w-8 h-0.5 bg-blue-400"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Person</div>
          <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Date</div>
          <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Medical</div>
          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Legal</div>
        </div>
      </div>
    </div>

    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
      <Search className="w-4 h-4 text-white" />
    </div>
    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
      <Zap className="w-4 h-4 text-white" />
    </div>
  </div>
)