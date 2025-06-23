import { checkAccess } from "@/lib/checkAccess";
import dynamic from "next/dynamic";

// Dynamically load the client component after access check
const EmpireGPTClient = dynamic(() => import("./ClientWrapper"), { ssr: false });

export default async function EmpireGPTPage() {
  await checkAccess();
  return <EmpireGPTClient />;
}
