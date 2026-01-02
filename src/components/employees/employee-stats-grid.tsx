import { Users, UserCheck, Building2, Trophy } from "lucide-react";
import StatCard from "@/components/ui/stat-card";

interface EmployeeStats {
  totalEmployees: number;
  inactiveEmployees: number;
  activeEmployees: number;
  totalTeams: number;
  topPerformer: {
    name: string;
    leadsCount: number;
  };
}

interface EmployeeStatsGridProps {
  stats: EmployeeStats;
}

export function EmployeeStatsGrid({ stats }: EmployeeStatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Employees"
        value={
          <div>
            <div className="text-3xl font-bold">{stats.totalEmployees}</div>
            <div className="text-xs opacity-75">
              Inactive: {stats.inactiveEmployees}
            </div>
          </div>
        }
        icon={<Users className="h-6 w-6" />}
        color="bg-[#1e40af]"
      />

      <StatCard
        title="Active Employees"
        value={
          <div>
            <div className="text-3xl font-bold">{stats.activeEmployees}</div>
            <div className="text-xs opacity-75">
              {stats.activeEmployees} out of {stats.totalEmployees}
            </div>
          </div>
        }
        icon={<UserCheck className="h-6 w-6" />}
        color="bg-[#16a34a]"
      />

      <StatCard
        title="Teams"
        value={
          <div>
            <div className="text-3xl font-bold">{stats.totalTeams}</div>
            <div className="text-xs opacity-75">Active departments</div>
          </div>
        }
        icon={<Building2 className="h-6 w-6" />}
        color="bg-[#9333ea]"
      />

      <StatCard
        title="Top Performer"
        value={
          <div>
            <div className="text-3xl font-bold">{stats.topPerformer.name}</div>
            <div className="text-xs opacity-75">
              Closed: {stats.topPerformer.leadsCount}
            </div>
          </div>
        }
        icon={<Trophy className="h-6 w-6" />}
        color="bg-[#ea580c]"
      />
    </div>
  );
}
