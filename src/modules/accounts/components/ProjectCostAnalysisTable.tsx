import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Pagination from "./common_components/Pagination";

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Labour":
      return "bg-emerald-50 text-emerald-600";
    case "Material":
      return "bg-blue-50 text-blue-600";
    case "Logistics":
      return "bg-orange-50 text-orange-600";
    default:
      return "bg-gray-50 text-gray-600";
  }
};

const mockCostAnalysisData = [
  {
    id: 1,
    project: "HR Management System",
    category: "Labour",
    estimated: "$210,000",
    actual: "$198,000",
    variance: "-5.7%",
    varianceColor: "green",
    date: "4/8/2024",
    department: "Human Resources",
  },
  {
    id: 2,
    project: "Marketing Automation Setup",
    category: "Material",
    estimated: "$125,000",
    actual: "$135,000",
    variance: "+8.0%",
    varianceColor: "red",
    date: "4/2/2024",
    department: "Marketing",
  },
  {
    id: 3,
    project: "Quality Assurance Framework",
    category: "Labour",
    estimated: "$165,000",
    actual: "$158,000",
    variance: "-4.2%",
    varianceColor: "green",
    date: "3/25/2024",
    department: "Quality Assurance",
  },
  {
    id: 4,
    project: "CRM System Integration",
    category: "Material",
    estimated: "$195,000",
    actual: "$210,000",
    variance: "+7.7%",
    varianceColor: "red",
    date: "3/18/2024",
    department: "Sales",
  },
  {
    id: 5,
    project: "Warehouse Automation",
    category: "Logistics",
    estimated: "$450,000",
    actual: "$425,000",
    variance: "-5.6%",
    varianceColor: "green",
    date: "3/12/2024",
    department: "Operations",
  },
  {
    id: 6,
    project: "E-commerce Platform Enhancement",
    category: "Labour",
    estimated: "$320,000",
    actual: "$345,000",
    variance: "+7.8%",
    varianceColor: "red",
    date: "3/5/2024",
    department: "E-commerce",
  },
  {
    id: 7,
    project: "Security Infrastructure Upgrade",
    category: "Material",
    estimated: "$180,000",
    actual: "$175,000",
    variance: "-2.8%",
    varianceColor: "green",
    date: "3/1/2024",
    department: "IT Security",
  },
  {
    id: 8,
    project: "Data Analytics Platform",
    category: "Labour",
    estimated: "$245,000",
    actual: "$234,000",
    variance: "-4.5%",
    varianceColor: "green",
    date: "2/15/2024",
    department: "Business Intelligence",
  },
  {
    id: 9,
    project: "Customer Portal Redesign",
    category: "Material",
    estimated: "$238,000",
    actual: "$267,000",
    variance: "+12.2%",
    varianceColor: "red",
    date: "2/10/2024",
    department: "Digital Marketing",
  },
  {
    id: 10,
    project: "Supply Chain Optimization",
    category: "Logistics",
    estimated: "$274,000",
    actual: "$298,000",
    variance: "+8.8%",
    varianceColor: "red",
    date: "2/1/2024",
    department: "Operations",
  },
];

export default function ProjectCostAnalysisTable() {
  return (
    <div className="bg-white rounded-lg xl:p-6 p-4 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">
          Project Cost Analysis
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Detailed breakdown of all project costs and variances
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Project
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Category
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Estimated
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Actual
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Variance
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Date
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                  Department
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockCostAnalysisData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-4 text-sm font-medium text-gray-900">
                  {row.project}
                </td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      getCategoryColor(row.category)
                    )}
                  >
                    {row.category}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {row.estimated}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {row.actual}
                </td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={cn(
                      "font-medium px-2 py-0.5 rounded text-xs",
                      row.varianceColor === "green"
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-red-600 bg-red-50"
                    )}
                  >
                    {row.variance}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{row.date}</td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {row.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}
