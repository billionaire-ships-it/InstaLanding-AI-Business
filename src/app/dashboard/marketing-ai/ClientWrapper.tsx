"use client";

import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function MarketingAIPage() {
  const [type, setType] = useState("ad");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate-marketing", {
      method: "POST",
      body: JSON.stringify({ type, prompt }),
    });
    const data = await res.text();
    setOutput(data);
  };

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-800">Marketing AI Generator</h1>
      <p className="text-gray-600 mb-4">Generate ads, email subject lines, and product descriptions.</p>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mb-3 border border-gray-300 rounded px-3 py-2"
      >
        <option value="ad">Ad Copy</option>
        <option value="email">Email Subject</option>
        <option value="description">Product Description</option>
      </select>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your product or offer..."
        rows={4}
      />

      <Button onClick={generate}>Generate</Button>

      {output && (
        <div className="mt-6 bg-gray-100 rounded p-4 text-sm text-gray-800 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </PageWrapper>
  );
}
