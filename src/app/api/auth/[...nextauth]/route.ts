import NextAuth from "next-auth";
import authOptions from "@/lib/auth";
import { handleEmailEvent } from "@/lib/emailEvents";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export default authOptions;