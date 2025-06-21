export default function TrialBanner({ daysLeft = 7 }: { daysLeft: number }) {
  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 text-sm p-3 rounded-md text-center">
      {daysLeft > 0 ? (
        <p>Your trial ends in <strong>{daysLeft}</strong> day(s). Upgrade to keep your access.</p>
      ) : (
        <p>Your trial has ended. Please subscribe to unlock your dashboard.</p>
      )}
    </div>
  );
}
