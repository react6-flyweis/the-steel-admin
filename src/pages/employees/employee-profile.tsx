import { useState } from "react";
import { useParams, Link } from "react-router";
import StatCard from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// Tabs: using original nav-style tabs (no shadcn Tabs)
import {
  Users,
  Percent,
  CheckSquare,
  Smile,
  DollarSign,
  ArrowLeft,
} from "lucide-react";

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
    <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button asChild size="sm">
          <Link to="/employees" className="inline-flex items-center gap-2">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <h2 className="text-lg sm:text-xl font-semibold">Employee Profile</h2>
      </div>

      {/* Header Card */}
      <Card className="px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <Avatar size="lg">
            <AvatarFallback>
              {employee.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold truncate">
              {employee.name}
            </h3>
            <div className="text-sm text-gray-600 mt-1">{employee.role}</div>
            <div className="text-sm text-gray-400 mt-1">
              Joined {employee.joinedDate}
            </div>
          </div>
        </div>
        <div className="text-right mt-4 sm:mt-0">
          <div className="inline-flex flex-col items-end gap-2">
            <Badge variant="secondary">{employee.status}</Badge>
            <div className="text-sm text-gray-600">
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900 mr-1">
                {employee.leads}
              </span>
              <span className="text-sm text-gray-600">leads assigned</span>
            </div>
          </div>
        </div>
      </Card>

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
            <div className="space-y-4 bg-white rounded-lg shadow-sm px-4 sm:px-6 py-5 overflow-x-auto">
              {mockAssignedLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-3 rounded-md"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                    <div className="w-full sm:min-w-40">
                      <div className="font-medium text-sm truncate">
                        {lead.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {lead.code}
                      </div>
                    </div>

                    <div className="w-full flex-1 text-sm text-gray-700 truncate">
                      {lead.email}
                    </div>

                    <div className="w-full sm:min-w-[120px] text-sm text-gray-700">
                      {lead.phone}
                    </div>

                    <div className="w-full sm:min-w-[160px] text-sm text-gray-500 truncate">
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

                  <div className="sm:ml-6 text-sm font-semibold text-gray-800 mt-2 sm:mt-0">
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
