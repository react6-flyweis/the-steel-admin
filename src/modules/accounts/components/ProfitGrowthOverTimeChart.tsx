"use client";

import {
  Line,
  LineChart,
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
  { month: "Jan", profit: 45000 },
  { month: "Feb", profit: 52000 },
  { month: "Mar", profit: 48000 },
  { month: "Apr", profit: 65000 },
  { month: "May", profit: 72000 },
  { month: "Jun", profit: 68000 },
  { month: "Jul", profit: 85000 },
  { month: "Aug", profit: 92000 },
  { month: "Sep", profit: 89000 },
  { month: "Oct", profit: 105000 },
  { month: "Nov", profit: 112000 },
  { month: "Dec", profit: 125000 },
];

const chartConfig = {
  profit: {
    label: "Monthly Profit",
    color: "#3B82F6",
  },
} satisfies ChartConfig;

const CustomLegend = () => {
  return (
    <div className="flex justify-end gap-6 mb-4">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
        Monthly Profit
      </div>
    </div>
  );
};

export function ProfitGrowthOverTimeChart() {
  return (
    <Card className="flex flex-col h-full border-none shadow-sm bg-white p-6 rounded-md">
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-8">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">
          Profit Growth Over Time
        </h3>
        <CustomLegend />
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                tickMargin={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}K`}
                domain={[0, "auto"]}
              />
              <ChartTooltip
                cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4, fill: "#3B82F6", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
