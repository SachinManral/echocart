"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    // Add your authentication logic here
  };

  return (
    <main className="py-10 md:py-20">
      <div className="max-w-md mx-auto px-4 xl:px-0">
        <div className="border border-black/10 rounded-[20px] p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-coastal-green"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-coastal-green"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-coastal-green focus:ring-coastal-green border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-black/60">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="text-coastal-green font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full text-sm md:text-base font-medium bg-black rounded-full py-4 h-[54px] md:h-[60px] group mt-6"
            >
              Login{" "}
              <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-black/60">
              Don't have an account?{" "}
              <Link href="/signup" className="text-coastal-green font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}