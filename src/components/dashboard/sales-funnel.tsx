import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type FunnelItem = {
  label: string;
  count: string | number;
  percent?: string;
  // Tailwind classes for the dot and background (light) row
  dotClass?: string; // e.g. 'bg-blue-500'
  rowBgClass?: string; // e.g. 'bg-blue-100'
};

type SalesFunnelProps = {
  title?: string;
  timeframeOptions?: string[];
  items?: FunnelItem[];
};

export default function SalesFunnel({
  title = "Sales Conversion Funnel",
  timeframeOptions = ["This Month", "Last Month", "This Quarter"],
  items,
}: SalesFunnelProps) {
  const baseItems: FunnelItem[] = [
    {
      label: "New Leads",
      count: 247,
      percent: "100%",
      dotClass: "bg-blue-500",
      rowBgClass: "bg-blue-100",
    },
    {
      label: "Contacted",
      count: 198,
      percent: "80.2%",
      dotClass: "bg-yellow-500",
      rowBgClass: "bg-yellow-100",
    },
    {
      label: "In Pipeline",
      count: 142,
      percent: "57.5%",
      dotClass: "bg-purple-500",
      rowBgClass: "bg-purple-100",
    },
    {
      label: "Closed Won",
      count: 89,
      percent: "36.0%",
      dotClass: "bg-green-500",
      rowBgClass: "bg-green-100",
    },
  ];

  const [timeframe, setTimeframe] = useState<string>(timeframeOptions[0]);

  const tf = timeframe.toLowerCase();
  const scale =
    tf.includes("day") || tf.includes("today")
      ? 0.05
      : tf.includes("week")
      ? 0.4
      : tf.includes("quarter")
      ? 3
      : tf.includes("last month")
      ? 0.9
      : 1;

  const defaultItems: FunnelItem[] = baseItems.map((it) => {
    const count =
      typeof it.count === "number"
        ? Math.max(1, Math.round(it.count * scale))
        : it.count;
    return {
      ...it,
      count,
    };
  });

  const rows = items ?? defaultItems;

  return (
    <Card className="p-4 gap-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <Select value={timeframe} onValueChange={(v) => setTimeframe(v)}>
          <SelectTrigger className="text-sm border-0 bg-blue-100 h-7! text-primary ">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timeframeOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {rows.map((r) => (
          <div
            key={r.label}
            className={`rounded-lg p-4 flex items-center justify-between ${
              r.rowBgClass ?? "bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full ${
                  r.dotClass ?? "bg-slate-500"
                }`}
              ></div>
              <span className="text-sm font-medium text-slate-800">
                {r.label}
              </span>
            </div>

            <div className="text-right">
              <div className="text-lg font-semibold text-slate-900">
                {r.count}
              </div>
              {r.percent ? (
                <div className="text-xs text-slate-500 mt-1">{r.percent}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
