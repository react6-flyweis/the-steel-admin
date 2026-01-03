import {
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingDown,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Insight {
  id: string;
  title: string;
  description: string;
  recommendedAction: string;
  type: "success" | "warning" | "info" | "danger";
  icon: React.ComponentType<{ className?: string }>;
}

const insights: Insight[] = [
  {
    id: "1",
    title: "High-Value Leads Trending Up",
    description: "Leads with deal value >$50k have increased by 23% this month",
    recommendedAction: "Focus sales efforts on enterprise clients",
    type: "success",
    icon: TrendingUp,
  },
  {
    id: "2",
    title: "Follow-up Response Rate Declining",
    description: "Email response rates have dropped 15% in the past 2 weeks",
    recommendedAction: "Review email templates and timing",
    type: "warning",
    icon: AlertCircle,
  },
  {
    id: "3",
    title: "AI Support Efficiency Improving",
    description: "AI resolution rate increased to 89%, reducing human workload",
    recommendedAction: "Consider expanding AI capabilities",
    type: "success",
    icon: CheckCircle,
  },
  {
    id: "4",
    title: "High-Value Leads Trending Up",
    description: "Leads with deal value >$50k have increased by 23% this month",
    recommendedAction: "Focus sales efforts on enterprise clients",
    type: "info",
    icon: Lightbulb,
  },
  {
    id: "5",
    title: "Peak Activity Hours Identified",
    description: "Customer inquiries peak between 2-4 PM on weekdays",
    recommendedAction: "Schedule more staff during peak hours",
    type: "info",
    icon: Clock,
  },
  {
    id: "6",
    title: "Lead Quality Score Dropping",
    description:
      "Average lead quality score decreased from 7.5 to 6.8 this week",
    recommendedAction: "Review lead generation sources",
    type: "danger",
    icon: TrendingDown,
  },
];

const getIconColor = (type: Insight["type"]) => {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-600";
    case "warning":
      return "bg-yellow-100 text-yellow-600";
    case "info":
      return "bg-blue-100 text-blue-600";
    case "danger":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getBadgeColor = (type: Insight["type"]) => {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "warning":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
    case "info":
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    case "danger":
      return "bg-red-100 text-red-700 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-100";
  }
};

export default function CustomerInsights() {
  return (
    <div className="p-4 sm:p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold">Customer Insights</CardTitle>
      </CardHeader>

      <div className="space-y-4 mt-6">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <Card key={insight.id}>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <div
                    className={`p-2 sm:p-3 rounded ${getIconColor(
                      insight.type
                    )}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {insight.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {insight.description}
                      </p>
                    </div>

                    <div className="mt-0 sm:mt-0">
                      <Badge
                        className={`${getBadgeColor(
                          insight.type
                        )} font-normal mt-2 sm:mt-0 block`}
                      >
                        Recommended Action: {insight.recommendedAction}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card>
          <CardContent>
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg font-semibold">
                Customer Segmentation
              </CardTitle>
            </CardHeader>
            <div className="space-y-6 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>Enterprise Clients</span>
                </div>
                <div className="font-semibold">45%</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span>SMB Clients</span>
                </div>
                <div className="font-semibold">35%</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-purple-500" />
                  <span>Startups</span>
                </div>
                <div className="font-semibold">20%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg font-semibold">
                Retention Analysis
              </CardTitle>
            </CardHeader>
            <div className="space-y-6 py-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Customer Retention Rate
                </div>
                <div className="font-semibold">92%</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Average Customer Lifetime
                </div>
                <div className="font-semibold">18 months</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Churn Rate</div>
                <div className="font-semibold">8%</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Repeat Purchase Rate
                </div>
                <div className="font-semibold">65%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
