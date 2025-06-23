import { checkAccess } from "@/lib/checkAccess";
import ClientWrapper from "./ClientWrapper";

export default async function BuilderPage() {
  await checkAccess();
  return <ClientWrapper />;
}
