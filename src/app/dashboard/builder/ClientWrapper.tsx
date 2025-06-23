"use client";

import { useState } from "react";
import { checkAccess } from "@/lib/checkAccess";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

export default function BuilderPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateLandingPage() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-8"
      >
        <h1 className="text-2xl font-semibold text-gray-900">
          AI Landing Page Builder
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateLandingPage();
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="prompt" className="block text-sm font-semibold text-gray-700 mb-2">
              Describe your landing page idea
            </label>
            <Textarea
              id="prompt"
              rows={5}
              className="w-full border-gray-300 rounded-md p-3 text-sm resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A SaaS landing page for productivity app..."
              required
            />
          </div>

          <Button type="submit" variant="primary" size="lg" loading={loading}>
            {loading ? "Generating..." : "Generate Landing Page"}
          </Button>
        </form>

        <div className="bg-gray-100 rounded-2xl shadow-md p-6 min-h-[200px]">
          <p className="text-gray-600 italic">
            Generated landing page will appear here...
          </p>
        </div>
      </motion.div>
    </main>
  );
}
