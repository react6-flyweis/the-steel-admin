import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DealItem = {
  label: string;
  deals: string | number;
  percentLabel?: string;
  // tailwind color for the square and filled bar (e.g. 'bg-green-500')
  colorClass?: string;
  // width of filled bar in percent (number or string with %)
  fillPercent?: number | string;
};

type Props = {
  title?: string;
  items?: DealItem[];
  averageDealSize?: string;
  className?: string;
};

type Period = "Today" | "Week" | "Month";

export default function DealSizeDistribution({
  title = "Deal Size Distribution",
  items,
  averageDealSize = "$67,500",
  className,
  period,
}: Props & { period?: Period }) {
  const baseItems: DealItem[] = [
    {
      label: "$0 - $50K",
      deals: 45,
      percentLabel: "51%",
      colorClass: "bg-green-500",
      fillPercent: 51,
    },
    {
      label: "$50K - $100K",
      deals: 28,
      percentLabel: "31%",
      colorClass: "bg-blue-500",
      fillPercent: 31,
    },
    {
      label: "$100K - $200K",
      deals: 12,
      percentLabel: "13%",
      colorClass: "bg-purple-500",
      fillPercent: 13,
    },
    {
      label: "$200K+",
      deals: 4,
      percentLabel: "5%",
      colorClass: "bg-orange-500",
      fillPercent: 5,
    },
  ];

  const scale = period === "Today" ? 0.08 : period === "Week" ? 0.45 : 1;

  const defaultItems: DealItem[] = baseItems.map((it) => ({
    ...it,
    deals:
      typeof it.deals === "number"
        ? `${Math.max(1, Math.round(it.deals * scale))} deals`
        : it.deals,
    fillPercent:
      typeof it.fillPercent === "number"
        ? Math.max(5, Math.round(Number(it.fillPercent) * scale))
        : it.fillPercent,
  }));

  const rows = items ?? defaultItems;

  return (
    <Card className={cn("p-5 gap-0", className)}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>

      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <div
                  className={`w-4 h-4 rounded-md ${
                    r.colorClass ?? "bg-slate-400"
                  }`}
                ></div>
                <span className="text-sm font-medium text-slate-800">
                  {r.label}
                </span>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold text-slate-900">
                  {r.deals}
                </div>
                {r.percentLabel ? (
                  <div className="text-xs text-slate-500 mt-1">
                    {r.percentLabel}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${r.colorClass ?? "bg-slate-500"} h-2 rounded-full`}
                style={{
                  width:
                    typeof r.fillPercent === "number"
                      ? `${r.fillPercent}%`
                      : r.fillPercent,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Average Deal Size</span>
          <span className="text-lg font-bold">{averageDealSize}</span>
        </div>
      </div>
    </Card>
  );
}
