import { ChevronLeft, ChevronRight } from "lucide-react";

type Period = "Today" | "Week" | "Month";

export default function PlantSalesChart({ period }: { period?: Period }) {
  const salesBase = [
    { name: "Option A", value: 60, color: "bg-blue-600" },
    { name: "Option B", value: 20, color: "bg-orange-400" },
    { name: "OptionC", value: 20, color: "bg-orange-300" },
  ];

  const scale = period === "Today" ? 0.08 : period === "Week" ? 0.6 : 1;
  const salesData = salesBase.map((s) => ({
    ...s,
    value: Math.max(1, Math.round(s.value * scale)),
  }));

  // Calculate total for percentage calculation
  //   const total = salesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Sales</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="size-4 text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-700">March</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="size-4 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="size-4 text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-700">2025</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="size-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        {/* Donut Chart */}
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="40"
              strokeDasharray={`${(60 / 100) * 502.4} 502.4`}
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FB923C"
              strokeWidth="40"
              strokeDasharray={`${(20 / 100) * 502.4} 502.4`}
              strokeDashoffset={`-${(60 / 100) * 502.4}`}
              transform="rotate(-90 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FDBA74"
              strokeWidth="40"
              strokeDasharray={`${(20 / 100) * 502.4} 502.4`}
              strokeDashoffset={`-${(80 / 100) * 502.4}`}
              transform="rotate(-90 100 100)"
            />
            <circle cx="100" cy="100" r="50" fill="white" />

            {/* Percentage labels on the chart */}
            <text
              x="100"
              y="60"
              textAnchor="middle"
              className="text-xs font-medium"
              fill="#6B7280"
            >
              20%
            </text>
            <text
              x="140"
              y="100"
              textAnchor="middle"
              className="text-xs font-medium"
              fill="#6B7280"
            >
              20%
            </text>
            <text
              x="100"
              y="140"
              textAnchor="middle"
              className="text-xs font-medium"
              fill="#6B7280"
            >
              60%
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {salesData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-8"
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
