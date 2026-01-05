import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface WipVsCompletedCardProps {
  totalWipValue: string;
  completedWork: string;
  completionRate: string;
  className?: string;
}

export default function WipVsCompletedCard({
  totalWipValue,
  completedWork,
  completionRate,
  className,
}: WipVsCompletedCardProps) {
  return (
    <Card
      className={cn("p-6 bg-white rounded-md border-none shadow-sm", className)}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="xl:w-10 xl:h-10 w-8 h-8 rounded-xl flex items-center justify-center bg-blue-50">
          <Clock className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="xl:text-lg text-base font-bold text-gray-900">
          WIP vs Completed
        </h3>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-500 font-medium">Total WIP Value</span>
            <span className="font-bold text-gray-900">{totalWipValue}</span>
          </div>
          <div className="h-2.5 w-full bg-blue-100/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-gray-500 font-medium">Completed Work</span>
            <span className="font-bold text-gray-900">{completedWork}</span>
          </div>
          <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "68.6%" }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium text-sm">
            Completion Rate
          </span>
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-normal">
            {completionRate}
          </span>
        </div>
      </div>
    </Card>
  );
}
