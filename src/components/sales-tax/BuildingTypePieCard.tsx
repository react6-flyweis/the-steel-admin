import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { DateRange as RDateRange } from "react-day-picker";

interface BuildingTypeData {
  type: string;
  value: number;
  color: string;
}

const buildingTypeData: BuildingTypeData[] = [
  { type: "PEMB", value: 5802.5, color: "#3B82F6" },
  { type: "Storage", value: 3765.0, color: "#10B981" },
  { type: "Shed", value: 2693.25, color: "#F59E0B" },
  { type: "Commercial", value: 5527.5, color: "#EF4444" },
];

const totalTaxByBuilding = buildingTypeData.reduce(
  (sum, item) => sum + item.value,
  0
);

interface Props {
  stateFilter?: string;
  reportPeriod?: RDateRange;
  reportType?: string;
}

export default function BuildingTypePieCard(_props?: Props) {
  return (
    <Card className="bg-white">
      <CardHeader className="border-b">
        <CardTitle>Tax Distribution by Building Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center ">
          <div className="size-54 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={buildingTypeData}
                  dataKey="value"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {buildingTypeData.map((entry) => (
                    <Cell key={entry.type} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-xl font-bold text-gray-900">
                $
                {totalTaxByBuilding.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-sm text-gray-500">Total Tax</div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-4 mt-2">
              {buildingTypeData.map((item) => {
                const percentage = Math.round(
                  (item.value / totalTaxByBuilding) * 100
                );
                return (
                  <div key={item.type} className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {item.type}:
                      </span>
                    </div>

                    <div className="ml-auto text-gray-700">
                      $
                      {item.value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}{" "}
                      ({percentage}%)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
