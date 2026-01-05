import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalysisCardProps {
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}

function AnalysisCard({ label, value, bgColor, textColor }: AnalysisCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center md:p-4 p-2 rounded-xl flex-1 w-[120px] max-w-[260px]",
        bgColor
      )}
    >
      <span className="md:text-xs text-[8px] font-normal text-[#4B5563] mb-1">
        {label}
      </span>
      <span className={cn("md:text-xl text-[9px] font-medium", textColor)}>
        {value}
      </span>
    </div>
  );
}

export function AnalysisSection() {
  return (
    <Card className="xl:p-6 p-3 rounded-md shadow-none">
      <p className="md:text-xl text-sm font-medium text-black mb-1">
        Order Value vs Plant Costs Analysis
      </p>
      <div className="flex gap-4 flex-wrap">
        <AnalysisCard
          label="Total Order Value"
          value="$12,30,000"
          bgColor="bg-[#E5ECFF]"
          textColor="text-[#1D51A4]"
        />
        <AnalysisCard
          label="Total Plant Costs"
          value="$9,97,000"
          bgColor="bg-[#FEE2E2]"
          textColor="text-[#EF4444]"
        />
        <AnalysisCard
          label="Projected Profit"
          value="$2,33,000"
          bgColor="bg-[#F0FDF4]"
          textColor="text-[#16A34A]"
        />
      </div>
    </Card>
  );
}
