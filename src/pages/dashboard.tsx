import StatCard from "@/components/ui/stat-card";
import SalesFunnel from "@/components/dashboard/sales-funnel";
import DealSizeDistribution from "@/components/dashboard/deal-size-distribution";
import ReportsOverview from "@/components/dashboard/reports-overview";
import LeadSourcesChart from "@/components/dashboard/lead-sources";
import LeadsIcon from "@/assets/icons/dashboard/leads.svg";
import ConfirmedIcon from "@/assets/icons/dashboard/confirmed.svg";
import ValueIcon from "@/assets/icons/dashboard/value.svg";
import RevenueIcon from "@/assets/icons/dashboard/revenue.svg";

export default function Dashboard() {
  return (
    <div className="">
      {/* Tabs */}
      <div className="relative flex h-10 bg-[#89D5DC] overflow-hidden">
        <button
          className="relative w-64  px-8 text-white font-medium  z-30"
          style={{
            clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)",
          }}
        >
          Today
        </button>
        <button
          className="relative w-64  px-8 text-white font-medium -ml-6 z-20 bg-[#6B93CE]"
          style={{
            clipPath: "polygon(30px 0, calc(100% - 30px) 0, 100% 100%, 0 100%)",
          }}
        >
          Week
        </button>
        <button
          className="relative w-64 px-8 text-white font-medium -ml-6 z-10 bg-[#4A72B7]"
          style={{
            clipPath: "polygon(30px 0, calc(100% - 30px) 0, 100% 100%, 0 100%)",
          }}
        >
          Month
        </button>
      </div>

      <div className="pr-5 pt-5 space-y-5">
        {/* Header */}
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Complete overview of your leads, sales pipeline, and revenue
            performance
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Leads"
            value={"247"}
            icon={<img src={LeadsIcon} alt="leads" className="size-7" />}
            color="bg-blue-500"
          />

          <StatCard
            title="Confirmed Leads"
            value={"89"}
            icon={
              <img src={ConfirmedIcon} alt="confirmed" className="size-7" />
            }
            color="bg-green-500"
          />

          <StatCard
            title="Pipeline Value"
            value={"$63,500"}
            icon={<img src={ValueIcon} alt="value" className="size-7" />}
            color="bg-yellow-500"
          />

          <StatCard
            title="Monthly Revenue"
            value={"$221,000"}
            icon={<img src={RevenueIcon} alt="revenue" className="size-7" />}
            color="bg-orange-500"
          />
        </div>

        {/* Chart Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesFunnel />
          </div>
          <DealSizeDistribution />
        </div>

        {/* Chart Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <ReportsOverview />
          </div>
          <div className="lg:col-span-2">
            <LeadSourcesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
