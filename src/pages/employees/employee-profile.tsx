import { useState } from "react";
import { useParams, Link } from "react-router";
import StatCard from "@/components/ui/stat-card";
import { Users, Percent, CheckSquare, Smile, DollarSign } from "lucide-react";

type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  role: string;
  team?: string;
  status?: string;
  leads?: number;
};

const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    joinedDate: "January 15, 2023",
    role: "Manager - Sales",
    status: "Active",
    leads: 45,
  },
];

type Lead = {
  id: string;
  name: string;
  code?: string;
  email?: string;
  phone?: string;
  location?: string;
  priority?: string;
  stage?: string;
  date?: string;
};

const mockAssignedLeads: Lead[] = [
  {
    id: "l1",
    name: "John Doe",
    code: "Q-2025-1047",
    email: "john.doe@gmail.com",
    phone: "(555) 123-4567",
    location: "Workshop · Texas",
    priority: "Hot",
    stage: "Proposal",
    date: "January 15, 2024",
  },
  {
    id: "l2",
    name: "John Doe",
    code: "Q-2025-1047",
    email: "john.doe@gmail.com",
    phone: "(555) 123-4567",
    location: "Workshop · Texas",
    priority: "Hot",
    stage: "Proposal",
    date: "January 15, 2024",
  },
  {
    id: "l3",
    name: "John Doe",
    code: "Q-2025-1047",
    email: "john.doe@gmail.com",
    phone: "(555) 123-4567",
    location: "Workshop · Texas",
    priority: "Hot",
    stage: "Proposal",
    date: "January 15, 2024",
  },
];

export default function EmployeeProfilePage() {
  const { id } = useParams();
  const employee =
    mockEmployees.find((e) => e.id === String(id)) || mockEmployees[0];

  const [activeTab, setActiveTab] = useState<string>("personal");

  return (
    <div className="p-6 space-y-6 ">
      <div className="flex items-center gap-4">
        <Link
          to="/employees"
          className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 px-3 py-2 rounded shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
        <h2 className="text-xl font-semibold">Employee Profile</h2>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-md px-8 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-700 overflow-hidden ring-4 ring-white">
            {employee.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{employee.name}</h3>
            <div className="text-sm text-gray-600 mt-1">{employee.role}</div>
            <div className="text-sm text-gray-400 mt-1">
              Joined {employee.joinedDate}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex flex-col items-end gap-2">
            <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              {employee.status}
            </span>
            <div className="text-sm text-gray-600">
              <span className="text-2xl font-semibold text-gray-900 mr-1">
                {employee.leads}
              </span>
              <span className="text-sm text-gray-600">leads assigned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="border-b">
          <nav className="flex -mb-px space-x-6 px-6">
            <button
              className={`py-4 text-sm ${
                activeTab === "personal"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Info
            </button>
            <button
              className={`py-4 text-sm ${
                activeTab === "assigned"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("assigned")}
            >
              Assigned Leads
            </button>
            <button
              className={`py-4 text-sm ${
                activeTab === "performance"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("performance")}
            >
              Performance
            </button>
          </nav>
        </div>

        <div className="pt-6">
          {activeTab === "personal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="text-gray-500 text-xs">Email</div>
                    <div className="mt-1">{employee.email}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Phone</div>
                    <div className="mt-1">{employee.phone}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Join Date</div>
                    <div className="mt-1">{employee.joinedDate}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-4">Roles & Permissions</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="text-gray-500 text-xs">Role</div>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        {employee.role}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Permissions</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                        Lead Access
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                        Follow-ups Access
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                        Reports Access
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "assigned" && (
            <div className="space-y-4 bg-white rounded-lg shadow-sm px-6 py-5">
              {mockAssignedLeads.map((lead) => (
                <div
                  key={lead.id}
                  className=" flex items-center justify-between"
                >
                  <div className="flex items-center gap-8 w-full">
                    <div className="min-w-[160px]">
                      <div className="font-medium text-sm">{lead.name}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {lead.code}
                      </div>
                    </div>

                    <div className="flex-1 text-sm text-gray-700">
                      {lead.email}
                    </div>

                    <div className="min-w-[120px] text-sm text-gray-700">
                      {lead.phone}
                    </div>

                    <div className="min-w-[160px] text-sm text-gray-500">
                      {lead.location}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                        {lead.priority}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                        {lead.stage}
                      </span>
                    </div>
                  </div>

                  <div className="ml-6 text-sm font-semibold text-gray-800">
                    {lead.date}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "performance" && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Leads Closed"
                  value={<span className="font-semibold">32</span>}
                  color="bg-blue-600"
                  icon={<Users className="h-5 w-5 text-blue-600" />}
                />

                <StatCard
                  title="Conversion Rate"
                  value={<span className="font-semibold">71%</span>}
                  color="bg-yellow-400"
                  icon={<Percent className="h-5 w-5 text-yellow-400" />}
                />

                <StatCard
                  title="Follow-ups Completed"
                  value={<span className="font-semibold">89%</span>}
                  color="bg-green-500"
                  icon={<CheckSquare className="h-5 w-5 text-green-500" />}
                />

                <StatCard
                  title="Customer Satisfaction"
                  value={<span className="font-semibold">4.8/5</span>}
                  color="bg-orange-400"
                  icon={<Smile className="h-5 w-5 text-orange-400" />}
                />

                <StatCard
                  title="Revenue Generated"
                  value={
                    <div>
                      <div className="text-2xl font-semibold">$125,000</div>
                      <div className="text-xs opacity-80">This Year</div>
                    </div>
                  }
                  color="bg-rose-400"
                  icon={<DollarSign className="h-5 w-5 text-rose-400" />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
