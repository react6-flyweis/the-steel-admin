import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

interface Row {
  date: string;
  customer: string;
  buildingType: string;
  jobId: string;
  state: string;
  city: string;
  rate: string;
  amount: number;
  taxDue: number;
}

const rows: Row[] = [
  {
    date: "2024-01-15",
    customer: "Johnson Steel Works",
    buildingType: "PEMB",
    jobId: "JSW-2024-001",
    state: "TX",
    city: "Houston",
    rate: "8.25%",
    amount: 45000,
    taxDue: 3712.5,
  },
  {
    date: "2024-01-18",
    customer: "Midwest Storage Solutions",
    buildingType: "Storage",
    jobId: "MSS-2024-002",
    state: "IA",
    city: "Des Moines",
    rate: "6%",
    amount: 32000,
    taxDue: 1920,
  },
  {
    date: "2024-01-22",
    customer: "Louisiana Barn Co",
    buildingType: "Shed",
    jobId: "LBC-2024-003",
    state: "LA",
    city: "Baton Rouge",
    rate: "9.45%",
    amount: 28500,
    taxDue: 2693.25,
  },
  {
    date: "2024-01-25",
    customer: "Commercial Properties LLC",
    buildingType: "Commercial",
    jobId: "CPL-2024-004",
    state: "TX",
    city: "Dallas",
    rate: "8.25%",
    amount: 67000,
    taxDue: 5527.5,
  },
  {
    date: "2024-01-28",
    customer: "Nebraska Farm Buildings",
    buildingType: "PEMB",
    jobId: "NFB-2024-005",
    state: "NE",
    city: "Omaha",
    rate: "5.5%",
    amount: 38000,
    taxDue: 2090,
  },
  {
    date: "2024-01-30",
    customer: "Oklahoma Steel Structures",
    buildingType: "Storage",
    jobId: "OSS-2024-006",
    state: "OK",
    city: "Oklahoma City",
    rate: "4.5%",
    amount: 41000,
    taxDue: 1845,
  },
];

export default function DetailedTaxReport() {
  const navigate = useNavigate();
  const totals = rows.reduce(
    (acc, r) => {
      acc.amount += r.amount;
      acc.tax += r.taxDue;
      return acc;
    },
    { amount: 0, tax: 0 }
  );

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Detailed Tax Report</CardTitle>
          <Button
            variant="link"
            size="sm"
            onClick={() => navigate("/payments/detailed-tax-report")}
          >
            View More
          </Button>
        </div>
      </CardHeader>
      <CardContent className="max-w-full overflow-x-scroll">
        <Table>
          <TableHeader className="border-b-2">
            <TableRow>
              <TableHead>Contract Date</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Building Type</TableHead>
              <TableHead>Job ID</TableHead>
              <TableHead>State</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Tax Rate</TableHead>
              <TableHead className="text-right">Contract Amount</TableHead>
              <TableHead className="text-right">Tax Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.jobId}>
                <TableCell>
                  {new Date(r.date).toLocaleDateString("en-US")}
                </TableCell>
                <TableCell>{r.customer}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-600"
                    )}
                  >
                    {r.buildingType}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-gray-600">
                  {r.jobId}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-xs text-gray-700">
                    {r.state}
                  </span>
                </TableCell>
                <TableCell>{r.city}</TableCell>
                <TableCell>{r.rate}</TableCell>
                <TableCell className="text-right">{`$${r.amount.toLocaleString()}`}</TableCell>
                <TableCell className="text-right text-red-600">{`$${r.taxDue.toLocaleString()}`}</TableCell>
              </TableRow>
            ))}

            <TableRow className="bg-gray-100 border-t-2!">
              <TableCell colSpan={7} className="font-semibold">
                TOTALS:
              </TableCell>
              <TableCell className="text-right font-semibold">{`$${totals.amount.toLocaleString()}`}</TableCell>
              <TableCell className="text-right font-semibold ">{`$${totals.tax.toLocaleString(
                undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              )}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
