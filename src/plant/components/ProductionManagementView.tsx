import { useState } from "react";
import ProductionTable from "./ProductionTable";
import UploadDrawingsModal from "./UploadDrawingsModal";
import HammerIcon from "../assets/hammerIcon.svg";
import CheckedShieldIcon from "../assets/checkedShieldIcon.svg";
import YellowDollerIcon from "../assets/yellowDollerIcon.svg";
import SalmonGraphIcon from "../assets/salmonGraphIcon.svg";
import StatCard from "@/components/ui/stat-card";

const ProductionManagementView = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const leadsData = [
    {
      id: "Q-2025-1047",
      name: "John Doe",
      project: "Workshop . Texas",
      assignedTo: null,
      progress: 4,
      status: "Proposal sent",
      quoteValue: "$12,500",
      unreadMessages: 2,
    },
    {
      id: "Q-2025-1048",
      name: "John Doe",
      project: "Workshop . Texas",
      assignedTo: {
        name: "Sarah Lee",
        image: "https://i.pravatar.cc/150?u=sarah",
      },
      progress: 4,
      status: "Quotation Sent",
      quoteValue: "$12,500",
      unreadMessages: 2,
    },
    {
      id: "Q-2025-1049",
      name: "John Doe",
      project: "Workshop . Texas",
      assignedTo: {
        name: "Sarah Lee",
        image: "https://i.pravatar.cc/150?u=sarah",
      },
      progress: 4,
      status: "Proposal sent",
      quoteValue: "$12,500",
      unreadMessages: 2,
    },
    {
      id: "Q-2025-1050",
      name: "John Doe",
      project: "Workshop . Texas",
      assignedTo: {
        name: "Sarah Lee",
        image: "https://i.pravatar.cc/150?u=sarah",
      },
      progress: 4,
      status: "Proposal sent",
      quoteValue: "$12,500",
      unreadMessages: 2,
    },
  ];

  const equipmentStats = [
    {
      title: "Total Leads",
      value: "1",
      icon: <img src={HammerIcon} alt="equipment" className="size-7" />,
      color: "bg-[#1D51A4]",
    },
    {
      title: "Active",
      value: "42",
      icon: <img src={CheckedShieldIcon} alt="available" className="size-7" />,
      color: "bg-[#3AB449]",
    },
    {
      title: "Unassigned",
      value: "74",
      icon: <img src={YellowDollerIcon} alt="in-use" className="size-7" />,
      color: "bg-[#F59E0B]",
    },
    {
      title: "Unread Messages",
      value: "12",
      icon: <img src={SalmonGraphIcon} alt="maintenance" className="size-7" />,
      color: "bg-[#FD8D5B]",
    },
  ];
  return (
    <div className="pr-5 pt-5 space-y-5">
      <div className="flex items-center justify-between flex-wrap mt-1 mb-6">
        <div className="">
          <h1 className="md:text-3xl text-lg font-normal text-gray-800 mb-2">
            Production Management
          </h1>
          <p className="text-(--text-color-gray-2) text-sm">
            Assign and view leads
          </p>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-(--button-bg-primary-color) text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center gap-2 text-sm"
        >
          <span>+</span> Upload Drawings & Images
        </button>
      </div>

      <UploadDrawingsModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      {/* Stats Row */}
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

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 mb-6 justify-end">
        <select className="mx-2 px-1 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ">
          <option>Building types</option>
        </select>
        <select className="mx-2 px-1 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>Project value</option>
        </select>
        <select className="mx-2 px-1 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>All Assignments</option>
        </select>
        <select className="mx-2 px-1 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>All Status</option>
        </select>
      </div>

      {/* Custom Production Table */}
      <ProductionTable data={leadsData as any[]} />
    </div>
  );
};

export default ProductionManagementView;
