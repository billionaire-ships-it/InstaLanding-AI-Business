"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

type OutputType = "ad" | "email" | "description";

export default function MarketingClient() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState<OutputType>("ad");
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
    setOutput("");

    await new Promise((r) => setTimeout(r, 1500));

    const outputs = {
      ad: `🔥 Try ${prompt} — the fastest way to grow!`,
      email: `Subject: Unlock success with ${prompt}`,
      description: `${prompt} helps you automate and scale effortlessly.`,
    };

    setOutput(outputs[type]);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Marketing AI Generator</h1>

        {locked && (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
            ⚠️ Trial expired. <a href="/subscribe" className="underline font-semibold">Upgrade to unlock</a>.
          </div>
        )}

        <div className="flex gap-3 text-sm">
          {["ad", "email", "description"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t as OutputType)}
              className={`px-3 py-1 rounded-lg border ${
                type === t ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
              }`}
              disabled={locked}
            >
              {t}
            </button>
          ))}
        </div>

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. A simple CRM tool for solopreneurs"
          rows={3}
          disabled={locked}
        />

        <Button onClick={generate} disabled={locked || loading}>
          {loading ? "Generating..." : "Generate Content"}
        </Button>

        <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap min-h-[100px]">
          {output || "Your AI output will appear here."}
        </div>
      </div>
    </PageWrapper>
  );
}
