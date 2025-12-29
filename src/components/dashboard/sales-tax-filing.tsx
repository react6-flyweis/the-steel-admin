import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { TrendingUp } from "lucide-react";

interface TaxFiling {
  id: string;
  company: string;
  date: string;
  state: string;
  taxAmount: string;
  contractValue: string;
}

export default function SalesTaxFiling() {
  const taxFilings: TaxFiling[] = [
    {
      id: "1",
      company: "Oklahoma Steel Structures",
      date: "30/1/2024",
      state: "OK",
      taxAmount: "$1,845",
      contractValue: "$41,000",
    },
    {
      id: "2",
      company: "Oklahoma Steel Structures",
      date: "30/1/2024",
      state: "OK",
      taxAmount: "$1,845",
      contractValue: "$41,000",
    },
    {
      id: "3",
      company: "Oklahoma Steel Structures",
      date: "30/1/2024",
      state: "OK",
      taxAmount: "$1,845",
      contractValue: "$41,000",
    },
  ];

  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Sales Tax Filing</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        {taxFilings.map((filing) => (
          <div
            key={filing.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {filing.company}
                </h3>
                <p className="text-sm text-gray-500">
                  {filing.date} . {filing.state}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-500">
                {filing.taxAmount}
              </p>
              <p className="text-sm text-gray-500">
                {filing.contractValue} contract
              </p>
            </div>
          </div>
        ))}

        <Button
          className="w-full"
          variant="default"
          onClick={() => navigate("/sales-tax")}
        >
          View Full Report
        </Button>
      </CardContent>
    </Card>
  );
}
