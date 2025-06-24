// /src/components/layout/ClientNavbar.tsx
"use client";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export default function ClientNavbar() {
  return <Navbar />;
}
