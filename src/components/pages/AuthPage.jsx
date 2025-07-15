import { useState } from "react"
import { Card, CardContent } from "../ui/Card"
import { AuthIllustration } from "../auth/AuthIllustration"
import { AuthForm } from "../auth/AuthForm"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const { data } = isSignUp
  //     ? await login(formData)
  //     : await register(formData);
  //     setUser(data);
  //     Navigate('/');
  //   } catch(err){
  //     setError(err.response?.data?.message || 'An error occured');
  //   }
  //   console.log(`${isSignUp ? "Sign up" : "Sign in"} form submitted`)
  // }

  const handleSocialAuth = (provider) => {
    console.log(`${provider} authentication`)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding and Image */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-md text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">
              Legal Med <span className="text-blue-600">NER</span>
            </h1>
            <p className="text-xl text-gray-600">Extract Meaning. Empower Decisions.</p>
          </div>

          <AuthIllustration />

          <div className="text-center space-y-2">
            <p className="text-gray-600 text-sm">
              Advanced AI technology that identifies and extracts key entities from legal and medical documents
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Card className="shadow-xl border border-gray-200">
            <CardContent>
              <AuthForm 
                isSignUp={isSignUp}
                setIsSignUp={setIsSignUp}
                // handleSubmit={handleSubmit}
                handleSocialAuth={handleSocialAuth}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}