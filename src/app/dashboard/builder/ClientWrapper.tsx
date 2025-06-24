"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function BuilderClient() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
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
    await new Promise((r) => setTimeout(r, 2000));
    setOutput(`🚀 AI Copy for: "${prompt}"\n\n[Headline] Your idea just got real.`);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">AI Page Builder</h1>

        {locked && (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
            ⚠️ Trial expired. <a href="/subscribe" className="underline font-semibold">Upgrade to continue</a>.
          </div>
        )}

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. A finance app for freelancers"
          rows={4}
          disabled={locked}
        />
        <Button onClick={generate} disabled={locked || loading}>
          {loading ? "Generating..." : "Generate"}
        </Button>
        <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap min-h-[100px]">
          {output || "Generated copy will appear here..."}
        </div>
      </div>
    </PageWrapper>
  );
}
