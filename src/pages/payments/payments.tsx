import PaymentStatusDistribution from "@/components/payments/payment-status-distribution";
import RevenueTrend from "@/components/payments/revenue-trend";
import PaymentAgingAnalysis from "@/components/payments/payment-aging-analysis";
import StageWisePaymentProgress from "@/components/payments/stage-wise-payment-progress";
import AIRevenueForecasting from "@/components/payments/ai-revenue-forecasting";
import CustomerTaxTable from "@/components/payments/customer-tax-table";

export default function PaymentsPage() {
  return (
    <div className="lg:pr-5 lg:pt-5 p-5 lg:p-0 space-y-5">
      {/* Header */}
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
        <p className="text-gray-600 mt-1">
          Track all payments, outstanding, and revenue trends in one place
        </p>
      </div>

      {/* First Row - 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PaymentStatusDistribution />
        <RevenueTrend />
        <PaymentAgingAnalysis />
      </div>

      {/* Second Row - 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StageWisePaymentProgress />
        <AIRevenueForecasting />
      </div>

      {/* Smart Notifications & Insights */}
      <div className="mt-4 space-y-3">
        <h2 className="text-sm font-semibold text-gray-700">
          Smart Notifications & Insights
        </h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <div className="text-sm text-red-700">
              2 payments are overdue ($45,000 total).
            </div>
            <button className="text-sm font-medium text-red-600 border border-red-200 px-3 py-1 rounded-md hover:bg-red-50">
              View Details
            </button>
          </div>

          <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
            <div className="text-sm text-blue-700">
              Upcoming payment on 26 Oct - John Doe ($20,000).
            </div>
            <button className="text-sm font-medium text-blue-600 border border-blue-200 px-3 py-1 rounded-md hover:bg-blue-50">
              Send Reminder
            </button>
          </div>

          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3">
            <div className="text-sm text-green-700">
              Average payment cycle improved by 3 days this month.
            </div>
            <button className="text-sm font-medium text-green-600 border border-green-200 px-3 py-1 rounded-md hover:bg-green-50">
              View Report
            </button>
          </div>
        </div>
      </div>

      {/* Customer table - Default tax profile per customer */}
      <CustomerTaxTable />
    </div>
  );
}
