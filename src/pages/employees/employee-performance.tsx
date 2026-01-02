import MetricCard from "@/components/employee-performance/MetricCard";
import PerformanceChart from "@/components/employee-performance/PerformanceChart";
import TopPerformerCard from "@/components/employee-performance/TopPerformerCard";

const sampleData = [
  {
    name: "John Smith",
    value: 42000,
    color: "#16a34a",
    department: "Sales",
    role: "Senior Sales Manager",
    deals: 24,
    commission: "15%",
    perf: 28,
  },
  {
    name: "Sarah Lee",
    value: 35500,
    color: "#06b6d4",
    department: "Sales",
    role: "Sales Executive",
    deals: 19,
    commission: "12%",
    perf: 23,
  },
  {
    name: "Michael Rao",
    value: 31200,
    color: "#2563eb",
    department: "Business Development",
    role: "Business Development Manager",
    deals: 16,
    commission: "10%",
    perf: 18,
  },
  {
    name: "Emma Wilson",
    value: 28900,
    color: "#8b5cf6",
    department: "Sales",
    role: "Sales Representative",
    deals: 14,
    commission: "11%",
    perf: 16,
  },
  {
    name: "David Chen",
    value: 22800,
    color: "#ef4444",
    department: "Account Management",
    role: "Account Manager",
    deals: 12,
    commission: "9%",
    perf: 15,
  },
  {
    name: "Lisa Rodriguez",
    value: 19500,
    color: "#06b6a4",
    department: "Business Development",
    role: "BD Executive",
    deals: 10,
    commission: "8%",
    perf: 12,
  },
  {
    name: "Robert Kim",
    value: 16400,
    color: "#f59e0b",
    department: "Sales",
    role: "Junior Sales Rep",
    deals: 8,
    commission: "7%",
    perf: 10,
  },
  {
    name: "Amanda Foster",
    value: 14200,
    color: "#10b981",
    department: "Account Management",
    role: "Key Account Manager",
    deals: 7,
    commission: "6%",
    perf: 9,
  },
];

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function EmployeePerformancePage() {
  const total = sampleData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="space-y-6 p-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Employee Performance</h1>
          <p className="text-gray-600 mt-1">
            Overview of staff performance and earnings.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a5 5 0 00-5 5v1h10v-1a5 5 0 00-5-5zM15 8a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V8z" />
          </svg>
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-6">
            <PerformanceChart data={sampleData} />

            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Revenue Distribution</h2>
                <div className="text-sm text-gray-500">
                  Total: {formatCurrency(total)}
                </div>
              </div>

              <div className="space-y-3">
                {sampleData.map((d) => (
                  <div
                    key={d.name}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ background: d.color }}
                      />
                      <div className="text-sm font-medium">{d.name}</div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">
                        {formatCurrency(d.value)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {Math.round((d.value / total) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <TopPerformerCard top={sampleData[0]} total={total} />

          <MetricCard
            title="Total Deals"
            value={110}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h3V5a1 1 0 112 0v5h3a1 1 0 110 2H8v3a1 1 0 11-2 0v-3H3a1 1 0 01-1-1z" />
              </svg>
            }
          />
          <MetricCard
            title="Avg Commission"
            value={"10%"}
            icon={<span className="text-orange-500 font-semibold">%</span>}
            accent={"orange"}
          />
        </div>
      </div>

      {/* Employee performance table */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Employee Performance</h2>
          <div className="flex items-center gap-3">
            <input
              placeholder="Search employees..."
              className="border rounded-md px-3 py-2 text-sm"
            />
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>All</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-180">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b">
                <th className="py-3">Employee</th>
                <th className="py-3">Department</th>
                <th className="py-3">Deals Closed</th>
                <th className="py-3">Total Earnings</th>
                <th className="py-3">Commission</th>
                <th className="py-3">PERFORMANCE</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sampleData.map((d) => {
                return (
                  <tr key={d.name} className="text-sm">
                    <td className="py-4 flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700 overflow-hidden"
                        aria-hidden
                      >
                        {d.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium">{d.name}</div>
                        <div className="text-xs text-gray-400">{d.role}</div>
                      </div>
                    </td>

                    <td className="py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white`}
                        style={{
                          background:
                            d.department === "Sales"
                              ? "#EDF8FF"
                              : d.department === "Business Development"
                              ? "#F3F0FF"
                              : "#F0F9F4",
                          color:
                            d.department === "Sales"
                              ? "#0369A1"
                              : d.department === "Business Development"
                              ? "#3730A3"
                              : "#065F46",
                        }}
                      >
                        {d.department}
                      </span>
                    </td>

                    <td className="py-4 text-gray-600 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v8a1 1 0 001 1h10a1 1 0 001-1V6a2 2 0 00-2-2h-3V3a1 1 0 00-1-1H9z" />
                      </svg>
                      {d.deals}
                    </td>

                    <td className="py-4 font-semibold">
                      {formatCurrency(d.value)}
                    </td>

                    <td className="py-4">{d.commission}</td>

                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-36 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-3 rounded-full"
                            style={{
                              width: `${d.perf}%`,
                              background: `linear-gradient(90deg, #06b6d4, #16a34a)`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 w-8">
                          {d.perf}%
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
