"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.replace("/dashboard");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login to InstaLanding AI</h1>

        {error && (
          <p className="mb-4 text-red-600 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Or continue with</p>
          <button
            onClick={handleGoogleSignIn}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8c0-17.4-1.5-34-4.4-50.1H249v95.1h134.8c-5.8 31.4-23.1 57.8-49.2 75.7v62.8h79.6c46.7-43 73.6-106.4 73.6-183.5z"
              />
              <path
                fill="currentColor"
                d="M249 492c67.5 0 124-22.3 165.3-60.7l-79.6-62.8c-22.1 14.8-50.4 23.6-85.7 23.6-65.9 0-121.7-44.5-141.7-104.3H25.9v65.5C67.6 440.7 152.6 492 249 492z"
              />
              <path
                fill="currentColor"
                d="M107.3 293.8c-4.8-14.5-7.6-30-7.6-45.8s2.7-31.3 7.6-45.8v-65.5H25.9c-15.1 29.9-23.7 63.8-23.7 100.6s8.6 70.7 23.7 100.6l81.4-65.5z"
              />
              <path
                fill="currentColor"
                d="M249 97.2c35.9 0 68 12.3 93.3 36.5l69.9-69.9C371 26.7 311.3 0 249 0 152.6 0 67.6 51.3 25.9 128.6l81.4 65.5c20-59.8 75.8-104.3 141.7-104.3z"
              />
            </svg>
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
