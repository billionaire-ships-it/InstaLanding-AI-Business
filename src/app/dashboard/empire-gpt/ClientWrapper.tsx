"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function EmpireGPTClient() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/access-check")
      .then((res) => res.json())
      .then((data) => {
        setLocked(data.status === "locked");
      });
  }, []);

  const generate = async () => {
    if (locked) return;
    setLoading(true);
    setResponse("");

    await new Promise((r) => setTimeout(r, 2000));

    setResponse(`📈 EmpireGPT Strategy:\n1. Validate market.\n2. Build landing page.\n3. Drive traffic.\n4. Monetize.`);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">EmpireGPT – Business AI</h1>

        {locked && (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
            ⚠️ Trial expired. <a href="/subscribe" className="underline font-semibold">Subscribe to unlock full strategy</a>.
          </div>
        )}

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. How to grow to $10K/month with a digital product?"
          rows={4}
          disabled={locked}
        />

        <Button onClick={generate} disabled={locked || loading}>
          {loading ? "Thinking..." : "Generate Strategy"}
        </Button>

        <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap min-h-[100px]">
          {loading
            ? "EmpireGPT is generating..."
            : response || "Ask a question to begin your empire strategy."}
        </div>
      </div>
    </PageWrapper>
  );
}
