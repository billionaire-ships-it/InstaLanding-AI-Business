import { checkAccess } from "@/lib/checkAccess";
import ClientWrapper from "./ClientWrapper";

export default async function EmpireGPTPage() {
  await checkAccess();
  return <ClientWrapper />;
}

