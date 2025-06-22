import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserPlanStatus } from "@/lib/plan";
import PageWrapper from "@/components/layout/PageWrapper";
import LogoutButton from "@/components/LogoutButton";
import Button from "@/components/ui/Button";
import DashboardCertificateBlock from "@/components/dashboard/DashboardCertificateBlock"; // ✅ NEW IMPORT

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  const { plan, isActive, isTrial, isExpired } = await getUserPlanStatus(
    session.user.email!
  );

  const accessMessage = isActive
    ? `✅ Active plan: ${plan}`
    : isTrial
    ? "🧪 Trial mode: Upgrade to unlock all features."
    : isExpired
    ? "❌ Trial expired: Please subscribe to continue."
    : "🚫 No active plan: Upgrade required.";

  const landingPageName = "My Awesome Landing Page";
  const launchDate = new Date().toLocaleDateString();

  return (
    <PageWrapper>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg text-sm">
        {accessMessage}
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">Your empire tools will appear here based on your plan.</p>

        <a
          href="/guides/6-figure-launch.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm transition"
        >
          📘 Download the “6-Figure Launch Guide”
        </a>

        {!isActive && (
          <Button variant="premium" className="mt-2">
            Upgrade Now
          </Button>
        )}

        {(isActive || isTrial) && (
          <DashboardCertificateBlock
            landingPageName={landingPageName}
            launchDate={launchDate}
          />
        )}
      </div>
    </PageWrapper>
  );
}

