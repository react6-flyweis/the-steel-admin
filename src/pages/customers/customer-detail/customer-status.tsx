import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerStatusPage() {
  const statusHistory = [
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Status History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-2">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-2">
                    Changed By
                  </th>
                </tr>
              </thead>
              <tbody>
                {statusHistory.map((history, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 text-sm text-gray-700">
                      {history.date}
                    </td>
                    <td className="py-3 text-sm text-gray-700">
                      {history.changedBy}
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
