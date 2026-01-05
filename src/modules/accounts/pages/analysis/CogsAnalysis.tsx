import { FileText, Funnel, FileX } from "lucide-react";
import TitleSubtitle from "../../components/common_components/TitleSubtitle";
import { ProfitGrowthOverTimeChart } from "../../components/ProfitGrowthOverTimeChart";
import TopHighestCostProjectsCard from "../../components/TopHighestCostProjectsCard";
import ProjectsExceedingBudgetCard from "../../components/ProjectsExceedingBudgetCard";
import OverallCostEfficiencyCard from "../../components/OverallCostEfficiencyCard";
import ProjectCostAnalysisTable from "../../components/ProjectCostAnalysisTable";
import { Button } from "@/components/ui/button";
import CogsAnalysisCard from "../../components/analytics/CogsAnalysisCard";
import CogsStatsGrid from "../../components/analytics/CogsStatsGrid";

const CogsAnalysis = () => {
  return (
    <div className="xl:px-5 px-2 md:pt-5 pb-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2 pr-0">
        <TitleSubtitle
          title="COGS Analysis"
          subtitle="Comprehensive cost analysis and variance tracking"
        />
        <div className="flex flex-wrap gap-3 ml-auto xl:mt-0 mt-2">
          <Button
            variant="outline"
            className="text-gray-600 border-gray-200 bg-gray-50 h-9"
          >
            <Funnel className="w-4 h-4 mr-2" />
            Filter Project
          </Button>
          <Button
            variant="outline"
            className="text-gray-600 border-gray-200 bg-gray-50 h-9 "
          >
            <FileX className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button
            variant="outline"
            className="
            bg-blue-600
            text-white
            h-9 font-normal"
          >
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>
      <CogsStatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <CogsAnalysisCard />
        <ProfitGrowthOverTimeChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-4 gap-3 mb-6">
        <TopHighestCostProjectsCard />
        <ProjectsExceedingBudgetCard />
        <OverallCostEfficiencyCard />
      </div>

      <div className="mb-6">
        <ProjectCostAnalysisTable />
      </div>
    </div>
  );
};

export default CogsAnalysis;
