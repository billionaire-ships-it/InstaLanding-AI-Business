import "./globals.css";
import ClientNavbar from "@/components/layout/ClientNavbar";
import GlobalToaster from "@/components/ui/Toaster";
import NextAuthProvider from "@/providers/SessionProvider"; // ✅ NEW

export const metadata = {
  title: "InstaLanding AI",
  description: "AI Business Empire Builder",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider> {/* ✅ WRAP EVERYTHING */}
          <ClientNavbar />
          <GlobalToaster />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}



