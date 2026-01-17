import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router";

interface StateData {
  state: string;
  abbreviation: string;
  contracts: number;
  rate: string;
  sales: number;
  taxDue: number;
}

const stateData: StateData[] = [
  {
    state: "Texas",
    abbreviation: "TX",
    contracts: 2,
    rate: "8.25%",
    sales: 112000,
    taxDue: 9240,
  },
  {
    state: "Los Angeles",
    abbreviation: "LA",
    contracts: 1,
    rate: "9.45%",
    sales: 28500,
    taxDue: 2693.25,
  },
  {
    state: "New York",
    abbreviation: "NE",
    contracts: 1,
    rate: "6%",
    sales: 32000,
    taxDue: 1920,
  },
  {
    state: "Indiana",
    abbreviation: "IA",
    contracts: 1,
    rate: "5.5%",
    sales: 38000,
    taxDue: 2090,
  },
  {
    state: "Oklahoma",
    abbreviation: "OK",
    contracts: 1,
    rate: "4.5%",
    sales: 41000,
    taxDue: 1845,
  },
];

export default function StateTaxCard() {
  return (
    <Link to="/sales-tax">
      <Card className="bg-white">
        <CardHeader className=" border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Tax Due by State
          </h2>
        </CardHeader>
        <CardContent className="">
          <div className="space-y-4">
            {stateData.map((state) => (
              <div
                key={state.abbreviation}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {state.abbreviation}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {state.contracts} contract{state.contracts > 1 ? "s" : ""}
                    </div>
                    <div className="text-xs text-gray-500">
                      {state.state} ({state.rate} rate)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-red-600">
                    ${state.taxDue.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    ${state.sales.toLocaleString()} sales
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
