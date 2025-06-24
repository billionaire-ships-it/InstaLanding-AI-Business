"use client";

import { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

export default function DownloadCertificateButton({
  landingPageName,
  launchDate,
}: {
  landingPageName: string;
  launchDate: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const heading = "🎓 InstaLanding AI Certificate of Launch";
    const body = `This certifies that you successfully launched "${landingPageName}" on ${launchDate}. You’ve officially entered the Empire Builder's Hall.`;

    page.drawText(heading, {
      x: 50,
      y: 330,
      size: 18,
      font,
      color: rgb(0.2, 0.2, 0.6),
    });

    page.drawText(body, {
      x: 50,
      y: 280,
      size: 12,
      font,
      color: rgb(0.1, 0.1, 0.1),
      maxWidth: 500,
      lineHeight: 16,
    });

    const bytes = await pdfDoc.save();
    saveAs(new Blob([bytes], { type: "application/pdf" }), "InstaLanding-Certificate.pdf");
    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
    >
      {loading ? "Generating..." : "📄 Download Launch Certificate"}
    </button>
  );
}
