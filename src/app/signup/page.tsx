"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("email", {
      email,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Create Your InstaLanding Account</h1>

      <form onSubmit={handleEmailSignUp} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign up with Email
        </button>
      </form>

      <div className="my-4 text-gray-500">or</div>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
      >
        Sign up with Google
      </button>
    </div>
  );
}

