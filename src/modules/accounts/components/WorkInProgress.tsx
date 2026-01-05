import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeaderWithAction from "./common_components/SectionHeaderWithAction";

interface ProjectItemProps {
  name: string;
  status: "In Progress" | "Planning" | "Execution";
  margin: string;
  revenue: string;
  costs: string;
  profit: string;
}

function ProjectItem({
  name,
  status,
  margin,
  revenue,
  costs,
  profit,
}: ProjectItemProps) {
  const statusColors = {
    "In Progress": "bg-blue-50 text-blue-600 border-blue-100",
    Planning: "bg-orange-50 text-orange-600 border-orange-100",
    Execution: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <div className="p-4 rounded-2xl border border-gray-100 mb-4 last:mb-0 bg-white">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="md:w-10 w-8 md:h-10 h-8 flex items-center justify-center bg-blue-50/50 rounded-xl">
            <Building2 className="md:w-5 md:h-5 w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-gray-800 md:text-sm leading-tight">
              {name}
            </h4>
            <Badge
              variant="outline"
              className={cn(
                "font-normal md:text-[10px] text-[9px] px-2 py-0 border w-fit h-5",
                statusColors[status]
              )}
            >
              {status}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-emerald-500 font-bold text-sm tracking-tight">
            {margin}
          </div>
          <div className="text-[10px] text-gray-400 font-regular whitespace-nowrap">
            Profit Margin
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-1">
        <div>
          <div className="text-[10px] text-gray-400 font-medium mb-1">
            Revenue
          </div>
          <div className="font-bold text-sm text-gray-900">{revenue}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-medium mb-1">
            Total Costs
          </div>
          <div className="font-bold text-sm text-red-500">{costs}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-medium mb-1">
            Net Profit
          </div>
          <div className="font-bold text-sm text-emerald-500">{profit}</div>
        </div>
      </div>
    </div>
  );
}

export function WorkInProgress() {
  return (
    <div className="p-6 border-none bg-white rounded-md">
      <SectionHeaderWithAction
        title="Work in progress - Profit Analysis"
        subtitle="Real time profitability tracking for active projects"
        onActionClick={() => console.log("View details clicked")}
        showIcon={true}
      />

      <div className="space-y-4 overflow-y-auto border-t border-gray-300 pt-4">
        <ProjectItem
          name="Residential Complex A"
          status="In Progress"
          margin="28.8%"
          revenue="$1,25,000"
          costs="$1,25,000"
          profit="$36,000"
        />
        <ProjectItem
          name="Commercial Building B"
          status="Planning"
          margin="28.8%"
          revenue="$1,25,000"
          costs="$1,25,000"
          profit="$36,000"
        />
        <ProjectItem
          name="Infrastructure Project C"
          status="Execution"
          margin="28.8%"
          revenue="$1,25,000"
          costs="$1,25,000"
          profit="$36,000"
        />
      </div>
    </div>
  );
}
