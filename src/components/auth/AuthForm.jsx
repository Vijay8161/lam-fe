import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { SocialAuthButton } from "./SocialAuthButton";
import { Link,useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { login, register, googleLogin, facebookLogin } from '../../Api';

export const AuthForm = ({ 
  isSignUp, 
  setIsSignUp, 
  // handleSubmit, 
  handleSocialAuth,
  isLoading,
  error 
}) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    organization: 'General-User', // Default value
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  // Reset form data when toggling between sign-in and sign-up
  useEffect(() => {
    setFormData(initialFormData);
    setFormErrors({});
  }, [isSignUp]);

  // Password strength calculator
  useEffect(() => {
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength += 1;
      if (/[A-Z]/.test(formData.password)) strength += 1;
      if (/[0-9]/.test(formData.password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Clear error when user types
    if (formErrors[id]) {
      setFormErrors({ ...formErrors, [id]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    if(isSignUp){
      if (!formData.firstName) errors.firstName = 'First name is required';
      if (!formData.lastName) errors.lastName = 'Last name is required';
      if (!formData.organization) errors.organization = 'Organization is required';
      
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();  
    try {
      let data;
      if (isSignUp) {
        const response = await register(formData);  
        data = response.data;                    
        navigate('/authPage');
      } else {
        const response = await login(formData);    
        data = response.data;
        navigate('/');
      }
      setUser(data); 
    } catch (err) {
      console.log('AN OCCURED');
      // Optionally show specific error
      // setError(err.response?.data?.message || 'An error occurred');
    }
    console.log(`${isSignUp ? "Sign up" : "Sign in"} form submitted`);
  };


  const onSubmit = (e) => {
    if (validateForm()) {
      e.preventDefault();  
      handleSubmit(formData);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
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

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        {isSignUp && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="First Name" 
                  className="h-11" 
                  value={formData.firstName}
                  onChange={handleChange}
                  hasError={!!formErrors.firstName}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Last Name" 
                  className="h-11" 
                  value={formData.lastName}
                  onChange={handleChange}
                  hasError={!!formErrors.lastName}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <select
                id="organization"
                className="w-full h-11 px-3 py-2 border rounded-md text-sm"
                value={formData.organization}
                onChange={handleChange}
              >
                <option value="General-User">General User</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Advocate">Advocate</option>
              </select>
              {formErrors.organization && (
                <p className="text-red-500 text-xs mt-1">{formErrors.organization}</p>
              )}
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@gmail.com" 
            className="h-11" 
            value={formData.email}
            onChange={handleChange}
            hasError={!!formErrors.email}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            className="h-11 pr-10" 
            value={formData.password}
            onChange={handleChange}
            hasError={!!formErrors.password}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3 text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </div>
          {formErrors.password && (
            <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
          )}
          
          {isSignUp && formData.password && (
            <div className="mt-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className={`h-1 flex-1 rounded-sm ${
                      passwordStrength >= i 
                        ? i > 2 ? 'bg-green-500' : 'bg-yellow-500'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {passwordStrength === 0 ? 'Very weak' :
                 passwordStrength === 1 ? 'Weak' :
                 passwordStrength === 2 ? 'Moderate' :
                 passwordStrength === 3 ? 'Strong' : 'Very strong'}
              </p>
            </div>
          )}
        </div>

        {isSignUp && (
          <div className="space-y-2 relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="h-11 pr-10"
              value={formData.confirmPassword}
              onChange={handleChange}
              hasError={!!formErrors.confirmPassword}
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-9 right-3 text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </div>
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
            )}
          </div>
        )}

        {!isSignUp && (
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
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
              <Link to="/terms" className="font-medium text-blue-600 hover:underline">Terms of Services</Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-medium text-blue-600 hover:underline">Privacy Policy</Link>
            </label>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : isSignUp ? "Sign Up" : "Sign In"}
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
          <SocialAuthButton 
            provider="google" 
            onClick={() => handleSocialAuth("google")} 
            disabled={isLoading}
          />
          <SocialAuthButton 
            provider="facebook" 
            onClick={() => handleSocialAuth("facebook")} 
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
            disabled={isLoading}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
        <p className="mt-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            Continue as guest
          </Link>
        </p>
      </div>
    </div>
  );
};