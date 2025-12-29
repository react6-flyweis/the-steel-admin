import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CustomerPaymentsPage() {
  const payments = [
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payments</CardTitle>
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
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-2">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-2">
                    Invoice
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 text-sm text-gray-700">
                      {payment.date}
                    </td>
                    <td className="py-3 text-sm text-gray-700">
                      {payment.amount}
                    </td>
                    <td className="py-3">
                      <span className="text-sm text-green-600">
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Download className="h-4 w-4 text-gray-600" />
                      </Button>
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
