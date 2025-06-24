import "./globals.css";
import ClientNavbar from "@/components/layout/ClientNavbar";
import GlobalToaster from "@/components/ui/Toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InstaLanding AI – Build Your Empire",
  description: "Launch a profitable business with AI-powered tools. InstaLanding AI gives you page builders, GPT strategy, analytics, and marketing AI in one dashboard.",
  keywords: [
    "InstaLanding AI",
    "business builder",
    "AI landing page",
    "GPT for entrepreneurs",
    "startup launch AI",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "InstaLanding AI",
    description: "Launch your empire with AI – pages, analytics, GPT, and more.",
    url: "https://yourdomain.com",
    siteName: "InstaLanding AI",
    images: [{ url: "/opengraph.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <ClientNavbar />
        <GlobalToaster />
        {children}
      </body>
    </html>
  );
}


