"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PageWrapper from "@/components/layout/PageWrapper";



const sampleData = [
  { name: "Mon", pages: 2 },
  { name: "Tue", pages: 5 },
  { name: "Wed", pages: 3 },
  { name: "Thu", pages: 7 },
  { name: "Fri", pages: 4 },
  { name: "Sat", pages: 6 },
  { name: "Sun", pages: 3 },
];

export default function AnalyticsPage() {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-800">Analytics Overview</h1>
      <p className="text-gray-600">Your recent landing page generation activity:</p>

      <div className="h-72 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pages" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </PageWrapper>
  );
}
