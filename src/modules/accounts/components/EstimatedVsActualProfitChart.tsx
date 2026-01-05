"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { project: "Project A", estimated: 85000, actual: 92000 },
  { project: "Project B", estimated: 65000, actual: 58000 },
  { project: "Project C", estimated: 120000, actual: 135000 },
  { project: "Project D", estimated: 95000, actual: 88000 },
  { project: "Project E", estimated: 75000, actual: 82000 },
];

const chartConfig = {
  estimated: {
    label: "Estimated",
    color: "#3B82F6",
  },
  actual: {
    label: "Actual",
    color: "#22C55E",
  },
} satisfies ChartConfig;

const CustomLegend = () => {
  return (
    <div className="flex justify-end gap-6 mb-4">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
        Estimated
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
        Actual
      </div>
    </div>
  );
};

export default function EstimatedVsActualProfitChart() {
  return (
    <Card className="flex flex-col h-full border-none shadow-sm bg-white p-6 rounded-md">
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-8">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">
          Estimated vs Actual Profit
        </h3>
        <CustomLegend />
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              barCategoryGap="20%"
              barGap={5}
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="project" // Or just "project" if we want "Project A" etc. but image shows "Project" repeatedly? Actually image shows "Project" repeatedly which is odd. Likely generic names.
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                tickMargin={12}
                tickFormatter={() => "Project"}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}K`}
                domain={[0, "auto"]}
              />
              <ChartTooltip
                cursor={{ fill: "#f3f4f6" }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="estimated"
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
              <Bar
                dataKey="actual"
                fill="#22C55E"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
