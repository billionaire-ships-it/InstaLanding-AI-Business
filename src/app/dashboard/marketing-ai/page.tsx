import { checkAccess } from "@/lib/checkAccess";
import ClientWrapper from "./ClientWrapper"; // ✅ Direct import, no dynamic()

export default async function MarketingAIPage() {
  await checkAccess(); // ✅ Only runs on the server
  return <ClientWrapper />; // ✅ Render client-side UI normally
}

