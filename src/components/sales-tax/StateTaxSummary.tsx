import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { DateRange as RDateRange } from "react-day-picker";

interface StateData {
  state: string;
  abbreviation: string;
  contracts: number;
  sales: number;
  taxDue: number;
}

const stateData: StateData[] = [
  {
    state: "Texas",
    abbreviation: "TX",
    contracts: 2,
    sales: 112000,
    taxDue: 9240,
  },
  {
    state: "Louisiana",
    abbreviation: "LA",
    contracts: 1,
    sales: 28500,
    taxDue: 2693.25,
  },
  {
    state: "Iowa",
    abbreviation: "IA",
    contracts: 1,
    sales: 32000,
    taxDue: 1920,
  },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});
interface Props {
  stateFilter?: string;
  reportPeriod?: RDateRange;
  reportType?: string;
}

export default function StateTaxSummary({ stateFilter }: Props) {
  const filterKey = stateFilter?.toLowerCase().trim();

  const filtered = stateData.filter((s) => {
    if (!filterKey || filterKey.length === 0) return true;
    if (filterKey.length <= 2) {
      return s.abbreviation.toLowerCase() === filterKey;
    }
    return (
      s.state.toLowerCase().includes(filterKey) ||
      s.abbreviation.toLowerCase() === filterKey
    );
  });

  return (
    <Card className="bg-white">
      <CardHeader className="border-b">
        <h2 className="text-lg font-semibold text-gray-900">
          Tax Summary by State
        </h2>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {filtered.map((s) => (
            <div
              key={s.abbreviation}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                  {s.abbreviation}
                </div>

                <div>
                  <div className="text-lg font-medium text-gray-900">
                    {s.contracts} contract{s.contracts > 1 ? "s" : ""}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {currency.format(s.sales)} sales
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-semibold text-red-600">
                  {currency.format(s.taxDue)}
                </div>
                <div className="text-sm text-gray-500 mt-1">tax due</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
