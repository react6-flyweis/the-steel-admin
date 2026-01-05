import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const data = [
  { name: "Material", value: 45, fill: "#3B82F6" },
  { name: "Labour", value: 35, fill: "#10B981" },
  { name: "Logistics", value: 20, fill: "#F59E0B" },
];

const chartConfig = {
  material: {
    label: "Material",
    color: "#3B82F6",
  },
  labour: {
    label: "Labour",
    color: "#10B981",
  },
  logistics: {
    label: "Logistics",
    color: "#F59E0B",
  },
} satisfies ChartConfig;

const CustomLegend = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: item.fill }}
          ></div>
          <span className="text-sm font-medium text-gray-600">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export function CostBreakdown() {
  return (
    <Card className="flex flex-col h-full border-none shadow-none bg-white p-6 rounded-md">
      <CardHeader className="p-0 mb-4">
        <h3 className="xl:text-xl text-md font-medium text-black tracking-tight">
          Cost Breakdown
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 p-0">
        <div className="relative h-[250px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={65}
                  outerRadius={90}
                  strokeWidth={20}
                  stroke="#fff"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Total Cost
            </span>
            <span className="text-2xl font-bold text-gray-900">$1680K</span>
          </div>
        </div>
        <CustomLegend />
      </CardContent>
    </Card>
  );
}
