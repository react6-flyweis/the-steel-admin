import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PipelineStage {
  id: string;
  name: string;
  count: number;
  color: string;
  deals: {
    company: string;
    value: string;
    time: string;
  }[];
}

const stages: PipelineStage[] = [
  {
    id: "qualified",
    name: "Qualified",
    count: 42,
    color: "bg-blue-100",
    deals: [
      { company: "Johnson Manufacturing", value: "$85K", time: "2 days ago" },
      { company: "ABC Steel Works", value: "$120K", time: "4 days ago" },
      { company: "Metro Construction", value: "$65K", time: "1 week ago" },
    ],
  },
  {
    id: "proposal",
    name: "Proposal",
    count: 28,
    color: "bg-yellow-100",
    deals: [
      { company: "Industrial Solutions", value: "$200K", time: "1 day ago" },
      { company: "BuildTech Corp", value: "$150K", time: "3 days ago" },
    ],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    count: 15,
    color: "bg-green-100",
    deals: [
      { company: "Global Industries", value: "$300K", time: "Today" },
      { company: "Steel Dynamics", value: "$180K", time: "2 days ago" },
    ],
  },
];

export default function ActivePipelineStages() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center border-b">
        <CardTitle>Active Pipeline Stages</CardTitle>
        <Button variant="link">Manage Stages</Button>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={`${stage.color} rounded-lg p-4 space-y-3`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {stage.name}
              </h3>
              <span className="text-blue-600 font-medium">
                {stage.count} leads
              </span>
            </div>

            <div className="space-y-3">
              {stage.deals.map((deal, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h4 className="font-medium text-gray-900 mb-1">
                    {deal.company}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {deal.value} • {deal.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
