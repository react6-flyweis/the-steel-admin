import { useNavigate, useParams } from "react-router";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import photo1 from "@/assets/images/customers/photos-1.webp";
import photo2 from "@/assets/images/customers/photos-2.webp";
import photo3 from "@/assets/images/customers/photos-3.webp";
import photo4 from "@/assets/images/customers/photos-4.webp";
import photo5 from "@/assets/images/customers/photos-5.webp";

export default function CustomerInfoPage() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ?? "unknown";

  const payments = [
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
    { date: "Apr 02, 2024", amount: "$500", status: "Received" },
  ];

  const statusHistory = [
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
    { date: "Apr 02, 2024, 10:00 PM", changedBy: "Luca Moretti" },
  ];

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

  const photos = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div className="space-y-6">
      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payments Table */}
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <Download className="h-4 w-4 text-gray-600" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="link"
                className="text-blue-600 text-sm"
                onClick={() => navigate(`/customers/${id}/payments`)}
              >
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status History Table */}
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
            <div className="mt-4 text-center">
              <Button
                variant="link"
                className="text-blue-600 text-sm"
                onClick={() => navigate(`/customers/${id}/status`)}
              >
                View All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project History */}
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
          <div className="mt-4 text-center">
            <Button
              variant="link"
              className="text-blue-600 text-sm"
              onClick={() => navigate(`/customers/${id}/order`)}
            >
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Photos */}
      <Card>
        <CardHeader>
          <CardTitle>Photos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden h-32  bg-gray-100"
              >
                <img
                  src={photo}
                  alt={`Project photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
