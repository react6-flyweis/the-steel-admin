import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

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

const chartConfig = {
  PEMB: { label: "PEMB", color: "#3B82F6" },
  Storage: { label: "Storage", color: "#10B981" },
  Shed: { label: "Shed", color: "#F59E0B" },
  Commercial: { label: "Commercial", color: "#EF4444" },
};

export default function BuildingTypeTaxCard() {
  return (
    <Card className="bg-white">
      <CardHeader className="border-b">
        <h2 className="text-lg font-semibold text-gray-900">
          Tax Distribution by Building Type
        </h2>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="flex items-center justify-center">
          <ChartContainer
            id="building-type"
            config={chartConfig}
            className="relative size-52"
          >
            <div className="w-full h-full relative">
              <PieChart width={208} height={208}>
                <Pie
                  data={buildingTypeData}
                  dataKey="value"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                >
                  {buildingTypeData.map((entry) => (
                    <Cell key={entry.type} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
                {/* <ChartLegend verticalAlign="bottom" /> */}
              </PieChart>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold ">
                    ${totalTaxByBuilding.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-700">Total Tax</div>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {buildingTypeData.map((item) => {
            const percentage = (
              (item.value / totalTaxByBuilding) *
              100
            ).toFixed(0);
            return (
              <div
                key={item.type}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-700">{item.type}</span>
                </div>
                <span className="text-gray-900 font-medium">
                  ${item.value.toLocaleString()} ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
