import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerOrderPage() {
  const projectHistory = [
    {
      service: "Steel Frame Fabrication",
      amount: "$5,0000",
      status: "Completed",
      startDate: "Apr 02, 2024",
      endDate: "May 02, 2024",
    },
    {
      service: "Modular Roofing",
      amount: "$5,0000",
      status: "Completed",
      startDate: "Apr 02, 2024",
      endDate: "May 02, 2024",
    },
    {
      service: "Design Consultancy",
      amount: "$5,0000",
      status: "In progress",
      startDate: "Apr 02, 2024",
      endDate: "May 02, 2024",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-3">
                    Service
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-3">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-3">
                    Start Date
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-3">
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectHistory.map((project, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 text-sm text-gray-900">
                      {project.service}
                    </td>
                    <td className="py-4 text-sm text-gray-700">
                      {project.amount}
                    </td>
                    <td className="py-4">
                      <span
                        className={`text-sm ${
                          project.status === "Completed"
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-700">
                      {project.startDate}
                    </td>
                    <td className="py-4 text-sm text-gray-700">
                      {project.endDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
