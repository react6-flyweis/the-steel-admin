import {
  Calculator,
  ChartLine,
  Percent,
  Trophy,
  ArrowDown,
} from "lucide-react";
import TitleSubtitle from "../../components/common_components/TitleSubtitle";
import FinanceStatCard from "../../components/FinanceStatCard";
import ProjectProfitabilityCard from "../../components/ProjectProfitabilityCard";
import { ProfitGrowthOverTimeChart } from "../../components/ProfitGrowthOverTimeChart";
import EstimatedVsActualProfitChart from "../../components/EstimatedVsActualProfitChart";
import OverallCostBreakdown from "../../components/OverallCostBreakdown";
import WipVsCompletedCard from "../../components/WipVsCompletedCard";
import ProjectDataTable from "../../components/ProjectDataTable";
import ProjectCostBreakdown from "../../components/ProjectCostBreakdown";
import DolleIcon from "../../assets/icon/blueDollerIcon.svg";

const financeStats = [
  {
    title: "Total Project Value",
    value: "$12,30,000",
    icon: (
      <img src={DolleIcon} className="w-5 h-5 object-contain text-[#1D51A4]" />
    ),
    iconBgColor: "bg-[#EFF6FF]",
    valueColor: "text-black",
  },
  {
    title: "Total Cost to Date",
    value: "$8,45,000",
    icon: <Calculator className="md:w-5 md:h-5 w-4 h-4 text-[#EA580C]" />,
    iconBgColor: "bg-[#FFF7ED]",
    valueColor: "text-emerald-500",
  },
  {
    title: "Current WIP Profit",
    value: "$3,85,000",
    icon: <ChartLine className="md:w-5 md:h-5 w-4 h-4 text-[#16A34A]" />,
    iconBgColor: "bg-[#F0FDF4]",
    valueColor: "text-red-500",
  },
  {
    title: "Profit Margin %",
    value: "23%",
    icon: <Percent className="md:w-5 md:h-5 w-4 h-4 text-[#9333EA]" />,
    iconBgColor: "bg-[#FAF5FF]",
    valueColor: "text-black",
  },
];

const WipProfitPage = () => {
  return (
    <div className="px-2 md:px-4 pt-5 pb-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2 pr-0 sm:pr-10">
        <TitleSubtitle
          title="WIP Profit Dashboard"
          subtitle="Monitor project profitability and cost breakdown in real-time"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-6 mb-5">
        {financeStats.map((stat, index) => (
          <FinanceStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
            valueColor={stat.valueColor}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-6 gap-3">
        <ProfitGrowthOverTimeChart />
        <EstimatedVsActualProfitChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 gap-3">
        <ProjectProfitabilityCard
          title="Most Profitable Projects"
          icon={<Trophy className="w-5 h-5 text-green-600" />}
          iconBgColor="bg-green-50"
          items={[
            {
              id: 1,
              name: "Downtown Office Complex",
              value: "$245,000",
              badgeValue: "42.5%",
              badgeColor: "green",
            },
            {
              id: 2,
              name: "Residential Tower Phase 2",
              value: "$198,000",
              badgeValue: "38.2%",
              badgeColor: "green",
            },
            {
              id: 3,
              name: "Shopping Mall Renovation",
              value: "$156,000",
              badgeValue: "35.8%",
              badgeColor: "green",
            },
          ]}
        />
        <ProjectProfitabilityCard
          title="Decreasing Margin"
          icon={<ArrowDown className="w-5 h-5 text-red-600" />}
          iconBgColor="bg-red-50"
          items={[
            {
              id: 1,
              name: "Industrial Warehouse",
              value: "25.2% → 18.5%",
              badgeValue: "-6.7%",
              badgeColor: "red",
            },
            {
              id: 2,
              name: "School Extension",
              value: "28.7% → 22.1%",
              badgeValue: "-6.6%",
              badgeColor: "red",
            },
            {
              id: 3,
              name: "Hospital Wing",
              value: "21.3% → 15.8%",
              badgeValue: "-5.5%",
              badgeColor: "red",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OverallCostBreakdown
          title="Overall Cost Breakdown"
          totalCost="$1,678,000"
          items={[
            {
              label: "Labor Cost",
              value: "$1,010,000",
              percentage: "60.2%",
              color: "#3B82F6",
              progress: 60.2,
            },
            {
              label: "Material Cost",
              value: "$565,000",
              percentage: "33.7%",
              color: "#22C55E",
              progress: 33.7,
            },
            {
              label: "Transportation Cost",
              value: "$103,000",
              percentage: "6.1%",
              color: "#F97316",
              progress: 6.1,
            },
          ]}
        />
        <WipVsCompletedCard
          totalWipValue="$2,450,000"
          completedWork="$1,680,000"
          completionRate="68.6%"
        />
      </div>

      <div className="">
        <ProjectDataTable />
      </div>
      <div className="">
        <ProjectCostBreakdown />
      </div>
    </div>
  );
};

export default WipProfitPage;
