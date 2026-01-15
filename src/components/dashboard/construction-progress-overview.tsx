import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";

interface Project {
  id: string;
  name: string;
  projectId: string;
  manager: string;
  progress: number;
  status: "On Track" | "Delayed" | "Starting";
}

export default function ConstructionProgressOverview({
  period,
}: {
  period?: "Today" | "Week" | "Month";
}) {
  const baseProjects: Project[] = [
    {
      id: "1",
      name: "Downtown Office Complex",
      projectId: "PRJ-001",
      manager: "John Smith",
      progress: 65,
      status: "On Track",
    },
    {
      id: "2",
      name: "Residential Tower A",
      projectId: "PRJ-002",
      manager: "Sarah Wilson",
      progress: 35,
      status: "Delayed",
    },
    {
      id: "3",
      name: "Shopping Mall Renovation",
      projectId: "PRJ-003",
      manager: "David Lee",
      progress: 0,
      status: "Starting",
    },
  ];

  const scale = period === "Today" ? 0.05 : period === "Week" ? 0.5 : 1;
  const projects = baseProjects.map((p) => ({
    ...p,
    progress: Math.max(0, Math.round(p.progress * scale)),
  }));

  //   const getStatusVariant = (status: string) => {
  //     switch (status) {
  //       case "On Track":
  //         return "default";
  //       case "Delayed":
  //         return "destructive";
  //       case "Starting":
  //         return "secondary";
  //       default:
  //         return "default";
  //     }
  //   };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-700";
      case "Delayed":
        return "bg-red-100 text-red-700";
      case "Starting":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Construction progress overview</CardTitle>
          <Link to="/construction">
            <Button variant="link" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className=" font-semibold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">
                  {project.projectId} • {project.manager}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 min-w-[3rem] text-right">
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
