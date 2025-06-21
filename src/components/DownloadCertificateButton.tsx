"use client";

import React, { useState } from "react";

interface DownloadCertificateButtonProps {
  landingPageName: string;
  launchDate: string;
}

export default function DownloadCertificateButton({
  landingPageName,
  launchDate,
}: DownloadCertificateButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        pageName: landingPageName,
        date: launchDate,
      });

      const res = await fetch(`/api/certificate?${params.toString()}`, {
        method: "GET",
      });

      if (!res.ok) throw new Error("Failed to generate certificate");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate-${landingPageName
        .replace(/\s+/g, "-")
        .toLowerCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert((error as Error).message || "Error downloading certificate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="w-full sm:w-auto px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition disabled:opacity-50"
    >
      {loading ? "Generating..." : "Download Launch Certificate"}
    </button>
  );
}
