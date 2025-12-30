import React from "react";
import Table, { type Column } from "../Table";
import AddEquipmentModal from "../AddEquipmentModal";
import { equipmentData } from "./mockData";
import StatCard from "@/components/ui/stat-card";
import HammerIcon from "../../assets/hammerIcon.svg";
import CheckedShieldIcon from "../../assets/checkedShieldIcon.svg";
import YellowDollerIcon from "../../assets/yellowDollerIcon.svg";

export const equipmentStats = [
  {
    title: "Pending Requests:",
    value: "12",
    icon: <img src={HammerIcon} alt="total-maintenance" className="size-7" />,
    color: "bg-[#1D51A4]",
  },
  {
    title: "Approved:",
    value: "42",
    icon: <img src={CheckedShieldIcon} alt="breakdown" className="size-7" />,
    color: "bg-[#3AB449]",
  },
  {
    title: "In Transit:",
    value: "74",
    icon: (
      <img src={YellowDollerIcon} alt="due-maintenance" className="size-7" />
    ),
    color: "bg-[#F59E0B]",
  },
];

const TransferRequestsView = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns: Column<(typeof equipmentData)[0]>[] = [
    {
      header: "Reqt ID",
      accessor: (row) => <span className="text-gray-500">{row.id}</span>,
    },
    {
      header: "Equipment",
      accessor: (row) => (
        <span className="text-gray-500 font-medium block max-w-[150px]">
          {row.name}
        </span>
      ),
    },
    {
      header: "Category",
      accessor: (row) => (
        <span className="text-gray-700 font-medium">{row.category}</span>
      ),
    },
    {
      header: "From",
      accessor: (row) => (
        <span className="text-gray-700 font-medium">{row.category}</span>
      ),
    },
    {
      header: "To",
      accessor: (row) => (
        <span className="text-gray-700 font-medium">{row.category}</span>
      ),
    },
    {
      header: "Requested By",
      accessor: (row) => (
        <span className="text-gray-700 font-medium">{row.category}</span>
      ),
    },
    {
      header: "Priority",
      accessor: (row) => (
        <span className="text-gray-700 font-medium">{row.category}</span>
      ),
    },
    {
      header: "Status",
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${row.dotColor}`}></div>
          <span className={`font-medium ${row.statusColor} text-xs`}>
            {row.status}
          </span>
        </div>
      ),
    },
    {
      header: "Action",
      accessor: (row) => {
        if (row.status === "In Use") {
          return (
            <div className="flex justify-around">
              <button className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-100 transition-colors">
                Approved
              </button>
              <button className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-100 transition-colors">
                Rejected
              </button>
            </div>
          );
        } else if (row.status === "Breakdown") {
          return (
            <div className="flex justify-around">
              <button className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-100 transition-colors">
                Approved
              </button>
              <button className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-100 transition-colors">
                Rejected
              </button>
            </div>
          );
        } else {
          return (
            <button className="bg-[#DBEAFE] text-[#2563EB] px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
              Track
            </button>
          );
        }
      },
      className: "text-right",
      cellClassName: "text-right",
    },
  ];

  return (
    <div className="pr-5 pt-5 space-y-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 mt-2">
        <div>
          <h1 className="md:text-3xl text-lg font-normal text-gray-800 mb-2">
            Transfer Requests
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Track, assign, transfer, and monitor equipment across all
            construction sites and the central yard.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 flex-wrap">
          <button className="w-full sm:w-auto bg-(--button-bg-primary-color) text-white px-2 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center justify-center gap-2 text-sm">
            <span className="text-lg leading-none">+</span> Create Transfer
            Request
          </button>

          <button className="w-full sm:w-auto bg-(--button-bg-primary-color) text-white px-2 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center justify-center gap-2 text-sm">
            <span className="text-lg leading-none">+</span>Assign Equipment
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
        title="TRANSFER REQUESTS LIST"
        columns={columns}
        data={equipmentData}
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
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-(--button-bg-primary-color) text-white rounded-lg text-sm hover:opacity-80">
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
    </div>
  );
};

export default TransferRequestsView;
