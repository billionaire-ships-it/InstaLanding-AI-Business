"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

export default function EmpireGPTPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function askEmpireGPT() {
    setLoading(true);
    setResponse("");
    // call API here
    await new Promise((r) => setTimeout(r, 1800));
    setResponse(`EmpireGPT says: Your strategy to "${prompt}" is unstoppable! 🚀`);
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
        <h1 className="text-2xl font-semibold text-gray-900">Empire GPT</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            askEmpireGPT();
          }}
          className="space-y-6"
        >
          <label
            htmlFor="empirePrompt"
            className="block text-sm font-semibold text-gray-700"
          >
            Ask your question or request a business strategy
          </label>
          <Textarea
            id="empirePrompt"
            rows={4}
            className="w-full border-gray-300 rounded-md p-3 text-sm resize-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., How to scale my Shopify store quickly?"
            required
          />

          <Button type="submit" variant="primary" size="lg" loading={loading}>
            {loading ? "Thinking..." : "Generate Strategy"}
          </Button>
        </form>

        {response && (
          <div className="bg-gray-100 rounded-2xl shadow-md p-6 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </motion.div>
    </main>
  );
}
