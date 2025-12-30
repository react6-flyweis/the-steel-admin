import Table, { type Column } from "../Table";
import { mockBreakdownCases } from "../../data/mockData";
import { useState } from "react";
import { equipmentStats } from "./UpcomingScheduleView";
import StatCard from "@/components/ui/stat-card";
import AddEquipmentModal from "../AddEquipmentModal";
import ReportBreakdownModal from "./ReportBreakdownModal";
import LogMaintenanceModal from "./LogMaintenanceModal";

export type BreakdownCase = {
  id: number;
  equipment: string;
  reportedOn: string;
  issue: string;
  severity: string;
  severityColor: string;
  status: string;
  assignedTo: string;
};

export const breakdownColumns: Column<BreakdownCase>[] = [
  {
    header: "Equipment",
    accessor: (item) => (
      <div className="text-gray-600 text-sm">{item.equipment}</div>
    ),
  },
  {
    header: "Reported On",
    accessor: (item) => <div className="text-sm">{item.reportedOn}</div>,
  },
  {
    header: "Issue",
    accessor: (item) => <div className="text-sm">{item.issue}</div>,
  },
  {
    header: "Severity",
    accessor: (item) => (
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${item.severityColor}`}></div>
        <span className="text-sm">{item.severity}</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (item) => <div className="text-sm">{item.status}</div>,
  },
  {
    header: "Assigned To",
    accessor: (item) => <div className="text-sm">{item.assignedTo}</div>,
  },
  {
    header: "Action",
    accessor: (item) =>
      item.status === "Pending" ? (
        <button className="px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-xs font-medium hover:bg-yellow-200 transition-colors">
          Assign
        </button>
      ) : (
        <button className="px-4 py-1.5 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-medium hover:bg-green-200 transition-colors">
          View
        </button>
      ),
  },
];

const BreakdownCasesView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openReportModal = () => {
    setIsReportModalOpen(true);
  };

  const openLogModal = () => {
    setIsLogModalOpen(true);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeLogModal = () => {
    setIsLogModalOpen(false);
  };
  return (
    <div className="pr-5 pt-5 space-y-5">
      <div className="flex items-center justify-between flex-wrap mt-1 mb-6">
        <div className="">
          <h1 className="md:text-3xl text-lg font-normal text-gray-800 mb-2">
            Breakdown cases
          </h1>
          <p className="text-(--text-color-gray-2) text-sm">
            Here’s a summary of your ongoing steel building projects.
          </p>
        </div>
        <div className="flex flex-col mt-2 lg:flex-row gap-1 flex-wrap">
          <button
            onClick={openModal}
            className="w-full sm:w-auto bg-(--button-bg-primary-color) text-white px-2 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <span className="md:text-lg leading-none">+</span> Add Service
            Provider
          </button>

          <button
            onClick={openReportModal}
            className="w-full sm:w-auto bg-(--button-bg-primary-color) text-white px-2 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <span className="md:text-lg leading-none">+</span>
            Report Breakdown
          </button>

          <button
            onClick={openLogModal}
            className="w-full sm:w-auto bg-(--button-bg-primary-color) text-white px-2 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <span className="md:text-lg leading-none">+</span>Log Maintenance
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {equipmentStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      <Table
        title="Breakdown Table"
        columns={breakdownColumns}
        data={mockBreakdownCases}
        pagination={true}
        actions={
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              Filter Equipment
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export Excel
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export PDF
            </button>
          </div>
        }
      />
      <AddEquipmentModal isOpen={isModalOpen} onClose={closeModal} />
      <ReportBreakdownModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
      />
      <LogMaintenanceModal isOpen={isLogModalOpen} onClose={closeLogModal} />
    </div>
  );
};

export default BreakdownCasesView;
