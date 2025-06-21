export default function LockedFeature({ message = "Upgrade your plan to access this feature." }) {
  return (
    <div className="border border-red-300 bg-red-50 p-4 rounded text-center text-red-700 text-sm">
      🔒 {message}
    </div>
  );
}
