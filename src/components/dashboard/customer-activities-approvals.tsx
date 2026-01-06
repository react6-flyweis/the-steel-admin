import { User } from "lucide-react";

export default function CustomerActivitiesApprovals() {
  const activities = [
    {
      name: "Oklahoma Steel Structures",
      date: "30/1/2024",
      status: "Payment Completed",
      amount: "$1,845",
      contract: "$41,000 contract",
      statusType: "amount",
    },
    {
      name: "Customer 2",
      date: "30/1/2024",
      status: "Drawings Approved",
      statusType: "approved",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Customer activities & approvals
        </h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-full">
              <User className="size-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{activity.name}</p>
              <p className="text-sm text-gray-600">
                {activity.date} · {activity.status}
              </p>
            </div>
            <div className="text-right">
              {activity.statusType === "amount" ? (
                <>
                  <p className="font-bold text-red-600">{activity.amount}</p>
                  <p className="text-xs text-gray-600">{activity.contract}</p>
                </>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Approved
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium mt-4">
        View All
      </button>
    </div>
  );
}
