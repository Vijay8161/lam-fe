import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { SocialAuthButton } from "./SocialAuthButton";
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export const AuthForm = ({ isSignUp, setIsSignUp, handleSubmit, handleSocialAuth }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Reset form data when toggling between sign-in and sign-up
  useEffect(() => {
    setFormData(initialFormData);
  }, [isSignUp]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-600">
          {isSignUp
            ? "Join Legal Med NER to start analyzing your documents"
            : "Sign in to your Legal Med NER account"}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {isSignUp && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="First Name" 
                  className="h-11" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Last Name" 
                  className="h-11" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                Organization
              </Label>
              <Input 
                id="organization" 
                type="text" 
                placeholder="Your organization" 
                className="h-11" 
                value={formData.organization}
                onChange={handleChange}
                required 
              />
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@gmail.com" 
            className="h-11" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <Input 
            id="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            className="h-11 pr-10" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          {/* <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-600 hover:text-blue-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button> */}
          <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-gray-600 hover:text-blue-600 cursor-pointer"
            >
                {showPassword ? (
                <EyeOff className="w-5 h-5" />
                ) : (
                <Eye className="w-5 h-5" />
                )}
            </div>
        </div>

        {isSignUp && (
          <div className="space-y-2 relative">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="h-11 pr-10"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {/* <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-600 hover:text-blue-600"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button> */}
            <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-9 right-3 text-gray-600 hover:text-blue-600 cursor-pointer"
            >
                {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
                ) : (
                <Eye className="w-5 h-5" />
                )}
            </div>
          </div>
        )}

        {!isSignUp && (
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="#forgotPassoword" className="text-sm">Forgot Password?</Link>
          </div>
        )}

        {isSignUp && (
          <div className="flex items-start space-x-2">
            <input 
              type="checkbox" 
              className="mt-1 mr-1 h-4 w-4 bg-white border border-black checked:bg-black" 
              required
            />
            <label className="text-sm text-gray-600 leading-relaxed">
              I agree to the{" "}
              <Link to="#" className="font-medium">Terms of Services</Link>{" "}
              and{" "}
              <Link to="#" className="font-medium">Privacy Policy</Link>
            </label>
          </div>
        )}

        <Button type="submit" className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <SocialAuthButton provider="google" onClick={() => handleSocialAuth("google")} />
          <SocialAuthButton provider="facebook" onClick={() => handleSocialAuth("facebook")} />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-white hover:text-white font-medium"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
        <p className="my-0 bg-white px-2 text-gray-500"><Link to="/">Guest login</Link></p>
      </div>
    </div>
  );
};