// NOT IN USE BUT LET IT BE

// import React, { useState } from 'react';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Eye, EyeOff } from 'lucide-react';

// const PasswordField = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="space-y-2 relative">
//       <Label htmlFor="password" className="text-sm font-medium text-gray-700">
//         Password
//       </Label>
//       <Input
//         id="password"
//         type={showPassword ? 'text' : 'password'}
//         placeholder="Enter your password"
//         className="h-11 pr-10 bg-white"
//         required
//       />
//       <div
//         onClick={() => setShowPassword(!showPassword)}
//         className="absolute top-[38px] right-3 text-gray-600 hover:text-blue-600 cursor-pointer"
//       >
//         {showPassword ? <EyeOff className="w-5 h-5 mb-2 items-center justify-center" /> : <Eye className="w-5 h-5 mb-2 items-center justify-center" />}
//       </div>
//     </div>
//   );
// };

// {/* <div className="space-y-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" placeholder="Enter your password" className="h-11" value={formData.password} onChange={handleChange} required />
//         </div> */}

// export default PasswordField;
