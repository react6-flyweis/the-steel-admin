import { useState } from "react";
import { EmployeeStatsGrid } from "@/components/employees/employee-stats-grid";
import {
  EmployeeTable,
  type Employee,
} from "@/components/employees/employee-table";
import { AddEmployeeDialog } from "@/components/employees/add-employee-dialog";

// Mock data for demonstration
const initialEmployees: Employee[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 321-4567",
    joinedDate: "1/10/2023",
    role: "Manager",
    team: "Sales",
    status: "active",
    leads: 45,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    phone: "+1 (555) 234-5678",
    joinedDate: "3/15/2023",
    role: "Employee",
    team: "Support",
    status: "active",
    leads: 28,
  },
  {
    id: "3",
    name: "Emily",
    email: "emily.rodriguez@company.com",
    phone: "+1 (555) 345-6789",
    joinedDate: "11/20/2022",
    role: "Admin",
    team: "Marketing",
    status: "active",
    leads: 52,
  },
  {
    id: "4",
    name: "David Thompson",
    email: "david.thompson@company.com",
    phone: "+1 (555) 456-7890",
    joinedDate: "5/8/2023",
    role: "Employee",
    team: "Construction",
    status: "active",
    leads: 33,
  },
  {
    id: "5",
    name: "Lisa Wang",
    email: "lisa.wang@company.com",
    phone: "+1 (555) 567-8901",
    joinedDate: "2/14/2023",
    role: "Manager",
    team: "Plant",
    status: "active",
    leads: 39,
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james.wilson@company.com",
    phone: "+1 (555) 678-9012",
    joinedDate: "7/22/2023",
    role: "Employee",
    team: "Sales",
    status: "inactive",
    leads: 0,
  },
];

export default function EmployeesPage() {
  const [employees] = useState<Employee[]>(initialEmployees);

  const activeEmployees = employees.filter((emp) => emp.status === "active");
  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "inactive"
  );

  const topPerformer = [...employees].sort((a, b) => b.leads - a.leads)[0];

  const teams = [...new Set(employees.map((emp) => emp.team))];

  const stats = {
    totalEmployees: employees.length,
    inactiveEmployees: inactiveEmployees.length,
    activeEmployees: activeEmployees.length,
    totalTeams: teams.length,
    topPerformer: {
      name: topPerformer?.name || "N/A",
      leadsCount: topPerformer?.leads || 0,
    },
  };

  return (
    <div className="space-y-6 p-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Employee Management</h1>
          <p className="text-gray-600 mt-1">
            Add, edit, and manage employees, teams, roles, and permissions.
          </p>
        </div>
        <AddEmployeeDialog />
      </div>

      {/* Stats Grid */}
      <EmployeeStatsGrid stats={stats} />

      {/* Employee Table */}
      <EmployeeTable employees={employees} />
    </div>
  );
}
