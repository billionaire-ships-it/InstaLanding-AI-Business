import { checkAccess } from "@/lib/checkAccess";
import dynamic from "next/dynamic";

// Dynamically load the client component after access check
const MarketingClient = dynamic(() => import("./ClientWrapper"), { ssr: false });

export default async function MarketingAIPage() {
  await checkAccess();
  return <MarketingClient />;
}
