import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "@/lib/auth";
import { getUserPlanStatus } from "@/lib/plan";
import PageWrapper from "@/components/layout/PageWrapper";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import Button from "@/components/ui/Button";
import DashboardClientWrapper from "./ClientWrapper"; // 👈 import the client toast

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");

  const { plan, isActive, isTrial, isExpired } = await getUserPlanStatus(session.user.email);

  const accessMessage = isActive
    ? `✅ Active Plan: ${plan.toUpperCase()}`
    : isTrial
    ? "🧪 Trial Mode: Upgrade to unlock premium features."
    : isExpired
    ? "❌ Trial Expired: Subscribe to continue."
    : "🚫 No Active Plan";

  return (
    <PageWrapper>
      <DashboardClientWrapper isTrial={isTrial} isExpired={isExpired} />

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome, {session.user.name ?? "Entrepreneur"}</h1>
          <p className="text-sm text-gray-500">{accessMessage}</p>
        </div>
        <LogoutButton />
      </div>

      {/* Access Banners */}
      {!isActive && isTrial && (
        <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm p-3 rounded mb-6">
          ⚠️ You're on a free trial. <Link href="/subscribe" className="underline font-medium">Upgrade now</Link> to unlock all features.
        </div>
      )}

      {!isActive && isExpired && (
        <div className="bg-red-50 border border-red-300 text-red-800 text-sm p-3 rounded mb-6">
          🚫 Your trial has ended. <Link href="/subscribe" className="underline font-medium">Subscribe</Link> to continue building your empire.
        </div>
      )}

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FeatureCard
          title="🧠 EmpireGPT AI"
          description="Ask business growth questions and get strategic answers."
          href="/dashboard/empire-gpt"
        />
        <FeatureCard
          title="⚡ AI Page Builder"
          description="Describe your idea and generate high-converting landing pages."
          href="/dashboard/builder"
        />
        <FeatureCard
          title="🎯 Marketing AI"
          description="Get ad copy, email subject lines, and product descriptions."
          href="/dashboard/marketing-ai"
        />
        <FeatureCard
          title="📊 Analytics"
          description="View real-time performance data and page statistics."
          href="/dashboard/analytics"
        />
      </div>

      {!isActive && (
        <div className="mt-8">
          <Link href="/subscribe">
            <Button variant="premium">Upgrade Now</Button>
          </Link>
        </div>
      )}
    </PageWrapper>
  );
}

function FeatureCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="block border border-gray-200 rounded-xl p-5 hover:bg-gray-50 shadow-sm transition"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}



