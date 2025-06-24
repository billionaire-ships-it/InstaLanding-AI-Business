// /src/app/_not-found/page.tsx
export const dynamic = "force-dynamic";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-3xl font-bold text-red-600">404 – Not Found</h1>
        <p className="mt-2 text-gray-600">This page doesn’t exist, Commander.</p>
      </div>
    </div>
  );
}

