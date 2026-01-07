import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b3c53] to-[#234c6a]">
      
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-[#2f4a63]/90 backdrop-blur-lg shadow-2xl p-8 text-gray-200">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <LogIn size={28} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center tracking-wider mb-2">
          WELCOME BACK
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Sign in to your MoveZone account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
              <Mail className="text-gray-400" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-300">Password</label>
            <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
              <Lock className="text-gray-400" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-gray-300" />
              Remember me
            </label>
            <span className="hover:underline cursor-pointer opacity-70">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#5c748c] hover:bg-[#6f8aa3] transition text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?
          <Link
            to="/register"
            className="ml-2 text-white font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;

