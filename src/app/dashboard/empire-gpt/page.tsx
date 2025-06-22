"use client";

import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

export default function EmpireGPTPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("/api/empire-gpt", {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.text();
    setOutput(data);
  };

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-800">EmpireGPT – Business Strategy AI</h1>
      <p className="text-gray-600">Ask anything about growing your business:</p>

      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. How do I get to $10K/month with digital products?"
        rows={4}
      />

      <Button onClick={handleGenerate}>Generate Strategy</Button>

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap text-sm text-gray-800">
          {output}
        </div>
      )}
    </PageWrapper>
  );
}
