"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function DashboardPage() {
  const [assetType, setAssetType] = useState("ad-copy");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generateAsset() {
    setLoading(true);
    setResult("");
    await new Promise((r) => setTimeout(r, 1500));
    setResult(`Generated ${assetType} for: "${prompt}"`);
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
        <h1 className="text-2xl font-semibold text-gray-900">Marketing AI Generator</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateAsset();
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="assetType" className="block text-sm font-semibold text-gray-700 mb-2">
              Select asset type
            </label>
            <select
              id="assetType"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="ad-copy">Ad Copy</option>
              <option value="email-subject">Email Subject Line</option>
              <option value="product-description">Product Description</option>
            </select>
          </div>

          <div>
            <label htmlFor="prompt" className="block text-sm font-semibold text-gray-700 mb-2">
              Brief description
            </label>
            <Input
              id="prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What is this asset about?"
              required
              className="w-full"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" loading={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </form>

        {result && (
          <div className="bg-gray-100 rounded-2xl shadow-md p-6 mt-6 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </motion.div>
    </main>
  );
}
