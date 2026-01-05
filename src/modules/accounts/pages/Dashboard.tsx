import { AnalysisSection } from "../components/AnalysisSection";
import { WorkInProgress } from "../components/WorkInProgress";
import { RevenueTrend } from "../components/RevenueTrend";
import TitleSubtitle from "../components/common_components/TitleSubtitle";
import StorageIcon from "../assets/storageIcon.svg";
import MoneyIcon from "../assets/money-bill-solid.svg";
import ChartLineIcon from "../assets/chart-growth.svg";
import Clock from "../assets/clock-three.svg";
import { RecentTransactions } from "../components/RecentTransactions";
import { AlertNotification } from "../components/AlertNotification";
import UpcomingPayments from "../components/UpcomingPayments";
import ProjectDetailsTable from "../components/ProjectDetailsTable";
import { WIPProfitTrend } from "../components/WIPProfitTrend";
import { CostBreakdown } from "../components/CostBreakdown";
import StatCard from "@/components/ui/stat-card";

const DashboardStats = [
  {
    title: "Total Revenue",
    value: "12",
    icon: (
      <img
        src={StorageIcon}
        alt="total-maintenance"
        className="md:size-7 size-5 p-1"
      />
    ),
    color: "bg-[#1D51A4]",
  },
  {
    title: "Total Expenses",
    value: "42",
    icon: (
      <img src={MoneyIcon} alt="breakdown" className="md:size-7 size-5 p-1" />
    ),
    color: "bg-[#3AB449]",
  },
  {
    title: "Net Profit",
    value: "74",
    icon: (
      <img
        src={ChartLineIcon}
        alt="due-maintenance"
        className="md:size-7 size-5 p-1"
      />
    ),
    color: "bg-[#F59E0B]",
  },
  {
    title: "Outstanding Payments",
    value: "12",
    icon: (
      <img
        src={Clock}
        alt="under-maintenance"
        className="md:size-7 size-5 p-1"
      />
    ),
    color: "bg-[#FD8D5B]",
  },
];
const FinancePage = () => {
  return (
    <div className="xl:px-5 px-2 md:pt-5 pb-10 space-y-6">
      <TitleSubtitle
        title="Financial Overview"
        subtitle="Monitor your business financial performance and key metrics"
      />

      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        {DashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="pt-2">
        <AnalysisSection />
      </div>
      {/* Middle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:gap-6 gap-2">
        <div className="lg:col-span-3 md:col-span-1 col-span-1">
          <WorkInProgress />
        </div>

        <div className="lg:col-span-2 md:col-span-1 col-span-1">
          <RevenueTrend />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="lg:col-span-1">
          <WIPProfitTrend />
        </div>
        <div className="lg:col-span-1">
          <CostBreakdown />
        </div>
      </div>
      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <RecentTransactions />
        <AlertNotification />
      </div>

      <UpcomingPayments />
      <ProjectDetailsTable />
    </div>
  );
};

export default FinancePage;
