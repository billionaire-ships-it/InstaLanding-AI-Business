"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("email", { email, redirect: false });
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="max-w-md w-full bg-gray-50 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Join InstaLanding AI</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up & Start Free Trial
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}


