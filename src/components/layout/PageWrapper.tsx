import { ReactNode } from "react"

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 border border-gray-200">
        {children}
      </div>
    </main>
  )
}
