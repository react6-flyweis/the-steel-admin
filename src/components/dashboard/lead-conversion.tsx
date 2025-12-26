import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import newLeadsIcon from "@/assets/icons/dashboard/new-leads.svg";
import contactedIcon from "@/assets/icons/dashboard/contacted.svg";
import proposalSentIcon from "@/assets/icons/dashboard/proposal-sent.svg";
import negotiationIcon from "@/assets/icons/dashboard/negotiation.svg";
import closedWinIcon from "@/assets/icons/dashboard/closed-win.svg";
import closedLostIcon from "@/assets/icons/dashboard/closed-lost.svg";

type Item = {
  label: string;
  percent: number;
  subtitle?: string;
  colorClass?: string; // used for progress fill
  bgClass?: string; // pastel background for icon
  iconSrc?: string;
};

const rows: Item[] = [
  {
    label: "New Leads",
    percent: 52,
    subtitle: "",
    colorClass: "bg-orange-400",
    bgClass: "bg-orange-50",
    iconSrc: newLeadsIcon,
  },
  {
    label: "Contacted",
    percent: 21,
    subtitle: "",
    colorClass: "bg-green-500",
    bgClass: "bg-green-50",
    iconSrc: contactedIcon,
  },
  {
    label: "Proposal sent",
    percent: 74,
    subtitle: "",
    colorClass: "bg-blue-500",
    bgClass: "bg-blue-50",
    iconSrc: proposalSentIcon,
  },
  {
    label: "Negotiation",
    percent: 74,
    subtitle: "",
    colorClass: "bg-red-500",
    bgClass: "bg-red-50",
    iconSrc: negotiationIcon,
  },
  {
    label: "Closed win",
    percent: 74,
    subtitle: "",
    colorClass: "bg-purple-500",
    bgClass: "bg-purple-50",
    iconSrc: closedWinIcon,
  },
  {
    label: "Closed lost",
    percent: 74,
    subtitle: "",
    colorClass: "bg-red-400",
    bgClass: "bg-red-50",
    iconSrc: closedLostIcon,
  },
];

export default function LeadConversion({
  className,
  title = "Lead Conversion",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <Card className={cn("w-full p-6 gap-0 ", className)}>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-6">
        Stages of deals and conversions
      </p>

      <div className="space-y-4 flex flex-col">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-4">
            {/* Icon */}
            <div
              className={cn(
                "w-12 h-12 flex items-center justify-center  shadow",
                r.bgClass ?? "bg-slate-100"
              )}
            >
              {r.iconSrc ? (
                <img
                  src={r.iconSrc}
                  alt={r.label}
                  className={cn("size-6", "text-slate-500")}
                />
              ) : null}
            </div>

            {/* Bar + label */}
            <div className="flex-1">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={cn(
                        r.colorClass ?? "bg-slate-400",
                        "h-2 rounded-full"
                      )}
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                </div>

                <div className="ml-4 w-16 text-right">
                  <span className="text-sm font-semibold text-slate-700">
                    {r.percent}%
                  </span>
                </div>
              </div>

              <div className="">
                <span className="text-sm text-slate-500">{r.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
