import StatCard from "@/components/ui/stat-card";
import SalesFunnel from "@/components/dashboard/sales-funnel";
import DealSizeDistribution from "@/components/dashboard/deal-size-distribution";
import ReportsOverview from "@/components/dashboard/reports-overview";
import LeadSourcesChart from "@/components/dashboard/lead-sources";
import LeadConversion from "@/components/dashboard/lead-conversion";
import TonnageSold from "@/components/dashboard/tonnage-sold";
import PipelineStageOverview from "@/components/dashboard/pipeline-stage-overview";
import QueryHandlingDistribution from "@/components/dashboard/query-handling-distribution";
import ActivePipelineStages from "@/components/dashboard/active-pipeline-stages";
import RecentClosedDeals from "@/components/dashboard/recent-closed-deals";
import RecentSalesActivity from "@/components/dashboard/recent-sales-activity";
import TopSalesPerformers from "@/components/dashboard/top-sales-performers";
import LeadsIcon from "@/assets/icons/dashboard/leads.svg";
import ConfirmedIcon from "@/assets/icons/dashboard/confirmed.svg";
import ValueIcon from "@/assets/icons/dashboard/value.svg";
import RevenueIcon from "@/assets/icons/dashboard/revenue.svg";
import BuildingTypeTaxCard from "@/components/sales-tax/BuildingTypeTaxCard";
import StateTaxCard from "@/components/sales-tax/StateTaxCard";
import TaxSummaryCard from "@/components/sales-tax/TaxSummaryCard";
import SalesTaxFiling from "@/components/dashboard/sales-tax-filing";
import TaxReportExport from "@/components/dashboard/tax-report-export";
import ConstructionProgressOverview from "@/components/dashboard/construction-progress-overview";
import FilterTabs from "@/components/FilterTabs";

export default function Dashboard() {
  return (
    <div className="">
      {/* Tabs */}
      <FilterTabs />

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

        {/* Chart Row 3: Requested charts below */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <LeadConversion />
          </div>
          <div className="lg:col-span-2">
            <TonnageSold />
          </div>
        </div>

        {/* Chart Row 4: Pipeline stage and Query distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <PipelineStageOverview />
          </div>
          <div className="lg:col-span-2">
            <QueryHandlingDistribution />
          </div>
        </div>

        {/* Active Pipeline Stages and Recent Closed Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivePipelineStages />
          </div>
          <div className="lg:col-span-1">
            <RecentClosedDeals />
          </div>
        </div>

        {/* Recent Sales Activity and Top Sales Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentSalesActivity />
          <TopSalesPerformers />
        </div>

        {/* Tax Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TaxSummaryCard />

          <StateTaxCard />

          <BuildingTypeTaxCard />
        </div>

        {/* Sales Tax Filing and Tax Report Export */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesTaxFiling />
          <TaxReportExport />
        </div>

        {/* Construction Progress Overview */}
        <ConstructionProgressOverview />
      </div>
    </div>
  );
}
