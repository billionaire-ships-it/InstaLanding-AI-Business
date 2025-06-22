"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamically load the certificate button
const DownloadCertificateButton = dynamic(
  () => import("@/components/DownloadCertificateButton"),
  { ssr: false }
);

export default function DashboardCertificateBlock({
  landingPageName,
  launchDate,
}: {
  landingPageName: string;
  launchDate: string;
}) {
  return (
    <div className="mt-6">
      <DownloadCertificateButton
        landingPageName={landingPageName}
        launchDate={launchDate}
      />
    </div>
  );
}
