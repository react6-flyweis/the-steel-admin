import React from "react";
import Table, { type Column } from "./Table";
import AddEquipmentModal from "./AddEquipmentModal";
import StatCard from "@/components/ui/stat-card";
import HammerIcon from "../assets/hammerIcon.svg";
import CheckedShieldIcon from "../assets/checkedShieldIcon.svg";
import YellowDollerIcon from "../assets/yellowDollerIcon.svg";
import SalmonGraphIcon from "../assets/salmonGraphIcon.svg";
const EquipmentView = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const equipmentStats = [
    {
      title: "Total Equipment",
      value: "128 units",
      icon: <img src={HammerIcon} alt="equipment" className="size-7" />,
      color: "bg-[#1D51A4]",
    },
    {
      title: "Available",
      value: "42",
      icon: <img src={CheckedShieldIcon} alt="available" className="size-7" />,
      color: "bg-[#3AB449]",
    },
    {
      title: "In Use",
      value: "74",
      icon: <img src={YellowDollerIcon} alt="in-use" className="size-7" />,
      color: "bg-[#F59E0B]",
    },
    {
      title: "Under Maintenance",
      value: "12",
      icon: <img src={SalmonGraphIcon} alt="maintenance" className="size-7" />,
      color: "bg-[#FD8D5B]",
    },
  ];

  const equipmentData = [
    {
      id: "EX-302",
      name: "Excavator CAT 320D",
      category: "Heavy",
      status: "In Use",
      statusColor: "text-green-600",
      dotColor: "bg-green-500",
      project: "ABC Warehouse",
      location: "Pune Site",
      hours: "128h",
      nextDue: "20-Apr",
    },
    {
      id: "CM-104",
      name: "Concrete Mixer 350L",
      category: "Medium",
      status: "Under Maintenance",
      statusColor: "text-orange-600",
      dotColor: "bg-orange-500",
      project: "-",
      location: "Yard",
      hours: "-",
      nextDue: "15-Apr",
    },
    {
      id: "DG-65",
      name: "Diesel Generator 65kVA",
      category: "Medium",
      status: "Breakdown",
      statusColor: "text-red-600",
      dotColor: "bg-red-500",
      project: "Metro Cast",
      location: "Ahmedabad",
      hours: "412h",
      nextDue: "Overdue",
    },
    {
      id: "EX-302",
      name: "Excavator CAT 320D",
      category: "Heavy",
      status: "In Use",
      statusColor: "text-green-600",
      dotColor: "bg-green-500",
      project: "ABC Warehouse",
      location: "Pune Site",
      hours: "128h",
      nextDue: "20-Apr",
    },
    {
      id: "CM-104",
      name: "Concrete Mixer 350L",
      category: "Medium",
      status: "Under Maintenance",
      statusColor: "text-orange-600",
      dotColor: "bg-orange-500",
      project: "-",
      location: "Yard",
      hours: "-",
      nextDue: "15-Apr",
    },
    {
      id: "DG-65",
      name: "Diesel Generator 65kVA",
      category: "Medium",
      status: "Breakdown",
      statusColor: "text-red-600",
      dotColor: "bg-red-500",
      project: "Metro Cast",
      location: "Ahmedabad",
      hours: "412h",
      nextDue: "Overdue",
    },
    {
      id: "CM-104",
      name: "Concrete Mixer 350L",
      category: "Medium",
      status: "Under Maintenance",
      statusColor: "text-orange-600",
      dotColor: "bg-orange-500",
      project: "-",
      location: "Yard",
      hours: "-",
      nextDue: "15-Apr",
    },
  ];

  const columns: Column<(typeof equipmentData)[0]>[] = [
    {
      header: "Equipment ID",
      accessor: (row) => <span className="text-gray-500">{row.id}</span>,
    },
    {
      header: "Name",
      accessor: (row) => (
        <span className="text-gray-800 font-medium block max-w-[150px]">
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
      header: "Project",
      accessor: (row) => <span className="text-gray-800">{row.project}</span>,
    },
    {
      header: "Location",
      accessor: (row) => <span className="text-gray-800">{row.location}</span>,
    },
    {
      header: "Hours",
      accessor: (row) => <span className="text-gray-800">{row.hours}</span>,
    },
    {
      header: "Next Due",
      accessor: (row) => (
        <span
          className={`font-medium ${
            row.nextDue === "Overdue" ? "text-red-600" : "text-gray-800"
          }`}
        >
          {row.nextDue}
        </span>
      ),
    },
    {
      header: "Action",
      accessor: (row) => {
        if (row.status === "In Use") {
          return (
            <button className="bg-[#E6FFFA] text-[#0D9488] px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-teal-100 transition-colors">
              View / Transfer
            </button>
          );
        } else if (row.status === "Breakdown") {
          return (
            <button className="bg-[#FFFBEB] text-[#D97706] px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-yellow-100 transition-colors">
              Log Issue
            </button>
          );
        } else {
          return (
            <button className="bg-[#DBEAFE] text-[#2563EB] px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
              Maintenance
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
      <div className="flex items-center justify-between flex-wrap mt-1 mb-6">
        <div className="">
          <h1 className="md:text-3xl text-lg font-normal text-gray-800 mb-2">
            Equipment
          </h1>
          <p className="text-(--text-color-gray-2) text-sm">
            Here’s a summary of your ongoing steel building projects.
          </p>
        </div>
        <button
          onClick={openModal}
          className="bg-(--button-bg-primary-color) text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:opacity-80 transition-colors flex items-center gap-2 text-sm"
        >
          <span>+</span> Add New Equipment
        </button>
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
        title="EQUIPMENT LIST"
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

export default EquipmentView;
