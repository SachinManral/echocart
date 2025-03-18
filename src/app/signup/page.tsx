"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Create Account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-coastal-green"
                placeholder="Enter your full name"
              />
            </div>
            
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
                placeholder="Create a password"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-coastal-green"
                placeholder="Confirm your password"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full text-sm md:text-base font-medium bg-black rounded-full py-4 h-[54px] md:h-[60px] group mt-6"
            >
              Create Account{" "}
              <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-black/60">
              Already have an account?{" "}
              <Link href="/login" className="text-coastal-green font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}