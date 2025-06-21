"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { name: "Jan", views: 400, conversions: 40 },
  { name: "Feb", views: 600, conversions: 80 },
  { name: "Mar", views: 500, conversions: 50 },
  { name: "Apr", views: 700, conversions: 90 },
  { name: "May", views: 800, conversions: 100 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-8"
      >
        <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>

        <section className="bg-gray-100 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Page Views & Conversions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#4F46E5" radius={[5, 5, 0, 0]} />
              <Bar dataKey="conversions" fill="#6366F1" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </motion.div>
    </main>
  );
}
