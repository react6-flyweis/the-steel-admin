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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { week: "Week 1", income: 180, expenses: 160, revenue: 160 },
  { week: "Week 2", income: 195, expenses: 240, revenue: 160 },
  { week: "Week 3", income: 380, expenses: 160, revenue: 160 },
  { week: "Week 4", income: 160, expenses: 280, revenue: 160 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#3B82F6", // Blue
  },
  expenses: {
    label: "Expenses",
    color: "#F97316", // Orange
  },
  revenue: {
    label: "Revenue",
    color: "#10B981", // Green
  },
} satisfies ChartConfig;

const CustomLegend = () => {
  return (
    <div className="flex justify-center xl:gap-8 gap-4 mt-6 pt-2">
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
        Income
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
        <div className="w-3 h-3 rounded-full bg-[#F97316]"></div>
        Expenses
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
        Revenue
      </div>
    </div>
  );
};

export function RevenueTrend() {
  return (
    <Card className="flex flex-col h-full border-none shadow-none bg-white md:p-6 p-4 rounded-md">
      <CardHeader className="flex flex-wrap items-start justify-between space-y-0 pb-10 px-0 pt-0">
        <div className="flex flex-col">
          <h3 className="xl:text-lg text-md font-semibold text-gray-900 tracking-tight leading-none mb-2">
            Income VS Expenses
          </h3>
          <span className="xl:text-lg text-md font-semibold text-gray-900 tracking-tight leading-tight">
            Revenue Trend
          </span>
        </div>
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[110px] bg-white border-gray-200 text-gray-600 rounded-xl h-10 shadow-sm focus:ring-0">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-gray-100 shadow-xl">
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1 pb-0 px-0">
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 30, right: 10, left: 0, bottom: 0 }}
              barGap={2}
              barCategoryGap="15%"
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="0"
                stroke="#f3f4f6"
              />
              <XAxis
                dataKey="week"
                tickLine={false}
                tickMargin={12}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 500 }}
              />
              <YAxis hide />
              <ChartTooltip
                cursor={{ fill: "transparent" }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="income"
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  fill: "#9ca3af",
                  fontSize: 10,
                  fontWeight: 500,
                  offset: 8,
                  formatter: (val: number) => `${Number(val ?? 0)}k`,
                }}
              />
              <Bar
                dataKey="expenses"
                fill="#F97316"
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  fill: "#9ca3af",
                  fontSize: 10,
                  fontWeight: 500,
                  offset: 8,
                  formatter: (val: number) => `${Number(val ?? 0)}k`,
                }}
              />
              <Bar
                dataKey="revenue"
                fill="#10B981"
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  fill: "#9ca3af",
                  fontSize: 10,
                  fontWeight: 500,
                  offset: 8,
                  formatter: (val: number) => `${Number(val ?? 0)}k`,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <CustomLegend />
      </CardContent>
    </Card>
  );
}
