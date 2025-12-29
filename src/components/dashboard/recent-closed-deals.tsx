import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ClosedDeal {
  id: string;
  company: string;
  value: string;
  closedTime: string;
}

export default function RecentClosedDeals() {
  const closedDeals: ClosedDeal[] = [
    {
      id: "1",
      company: "Global Industries",
      value: "$300K",
      closedTime: "Closed today",
    },
    {
      id: "2",
      company: "TechCorp Manufacturing",
      value: "$185K",
      closedTime: "Closed yesterday",
    },
    {
      id: "3",
      company: "BuildRight Solutions",
      value: "$125K",
      closedTime: "Closed 2 days ago",
    },
    {
      id: "4",
      company: "Metro Steel Corp",
      value: "$95K",
      closedTime: "Closed 3 days ago",
    },
  ];

  const totalThisWeek = closedDeals.reduce((sum, deal) => {
    const value = parseInt(deal.value.replace(/[^0-9]/g, ""));
    return sum + value;
  }, 0);

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Recent Closed Deals</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {closedDeals.map((deal) => (
          <div
            key={deal.id}
            className="flex items-center gap-4 hover:bg-gray-50 p-1 rounded-lg transition-colors cursor-pointer"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 mb-1">{deal.company}</h4>
              <p className="text-sm text-gray-500">{deal.closedTime}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-lg font-semibold text-green-600">
                {deal.value}
              </span>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total This Week</span>
            <span className="text-2xl font-bold text-green-600">
              ${(totalThisWeek / 1000).toFixed(0)}K
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
