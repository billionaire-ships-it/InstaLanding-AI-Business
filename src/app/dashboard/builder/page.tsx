import { checkAccess } from "@/lib/checkAccess";
import dynamic from "next/dynamic";

// Dynamically load the UI after access is approved
const BuilderClient = dynamic(() => import("./ClientWrapper"), { ssr: false });

export default async function BuilderPage() {
  await checkAccess();
  return <BuilderClient />;
}
