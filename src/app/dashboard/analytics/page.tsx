"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import PageWrapper from "@/components/layout/PageWrapper";

const mockData = [
  { date: "Mon", views: 120, pages: 3, conversions: 1 },
  { date: "Tue", views: 200, pages: 5, conversions: 2 },
  { date: "Wed", views: 180, pages: 4, conversions: 1 },
  { date: "Thu", views: 250, pages: 6, conversions: 3 },
  { date: "Fri", views: 300, pages: 8, conversions: 4 },
  { date: "Sat", views: 190, pages: 2, conversions: 1 },
  { date: "Sun", views: 400, pages: 10, conversions: 5 },
];

export default function AnalyticsPage() {
  return (
    <PageWrapper>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">📊 Empire Analytics</h1>
        <p className="text-sm text-gray-600">
          Visualize your growth, engagement, and conversion over the past 7 days.
        </p>

        {/* Metrics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MetricCard label="Page Views" value="1,640" />
          <MetricCard label="Pages Generated" value="38" />
          <MetricCard label="Conversions" value="17" />
        </div>

        {/* Line Chart */}
        <div className="bg-white border rounded-xl shadow p-4">
          <h2 className="font-semibold text-gray-700 mb-2">Views Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white border rounded-xl shadow p-4">
          <h2 className="font-semibold text-gray-700 mb-2">Pages vs Conversions</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pages" fill="#6366f1" />
              <Bar dataKey="conversions" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </PageWrapper>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-xl font-bold text-gray-800 mt-1">{value}</h3>
    </div>
  );
}

