export default function PlanSelectButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">Subscribe to Starter</button>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">Subscribe to Pro</button>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow">Subscribe to Empire</button>
    </div>
  );
}
