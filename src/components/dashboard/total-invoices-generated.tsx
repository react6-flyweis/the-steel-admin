import { User } from "lucide-react";

export default function TotalInvoicesGenerated() {
  const invoices = [
    {
      name: "Oklahoma Steel Structures",
      description: "Invoice Sent: 30/1/2024 .",
      amount: "$1,845",
      contract: "$41,000 contract",
    },
    {
      name: "Customer 2",
      description: "Invoice Sent: 30/1/2024 .",
      amount: "$1,845",
      contract: "$41,000 contract",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Total invoices generated
        </h3>
        <span className="text-2xl font-bold text-gray-900">1230</span>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-full">
              <User className="size-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{invoice.name}</p>
              <p className="text-sm text-gray-600">{invoice.description}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-red-600">{invoice.amount}</p>
              <p className="text-xs text-gray-600">{invoice.contract}</p>
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
