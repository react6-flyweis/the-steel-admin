import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PayTaxDialog from "@/components/dashboard/pay-tax-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye } from "lucide-react";

// Types
interface TaxFilingRecord {
  refId: string;
  state: string;
  taxDue: number;
  taxRate: string;
  filingStatus: "Pending" | "Filed";
}

const filingData: TaxFilingRecord[] = [
  {
    refId: "TX-01",
    state: "California",
    taxDue: 3712.5,
    taxRate: "8.25%",
    filingStatus: "Pending",
  },
  {
    refId: "TX-01",
    state: "Texas",
    taxDue: 1920,
    taxRate: "6%",
    filingStatus: "Filed",
  },
  {
    refId: "TX-01",
    state: "New York",
    taxDue: 2693.25,
    taxRate: "9.45%",
    filingStatus: "Pending",
  },
  {
    refId: "TX-01",
    state: "Illinois",
    taxDue: 5527.5,
    taxRate: "8.25%",
    filingStatus: "Pending",
  },
  {
    refId: "TX-01",
    state: "Washington",
    taxDue: 2090,
    taxRate: "5.5%",
    filingStatus: "Pending",
  },
  {
    refId: "TX-01",
    state: "Ohio",
    taxDue: 1845,
    taxRate: "4.5%",
    filingStatus: "Pending",
  },
];

export default function SalesTaxFiling() {
  const navigate = useNavigate();
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [records, setRecords] = useState<TaxFilingRecord[]>(filingData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Filter data based on selections
  const filteredData = records.filter((record) => {
    const matchesState = stateFilter === "all" || record.state === stateFilter;
    const matchesStatus =
      statusFilter === "all" ||
      record.filingStatus.toLowerCase() === statusFilter;
    return matchesState && matchesStatus;
  });

  const getStatusBadgeVariant = (status: string) => {
    return status === "Filed" ? "default" : "secondary";
  };

  const handleViewDetails = (refId: string) => {
    console.log("View details for:", refId);
    // Add navigation logic here
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleMarkAsPaid = () => {
    // For demo: mark all Pending records as Filed
    setRecords((prev) =>
      prev.map((r) =>
        r.filingStatus === "Pending" ? { ...r, filingStatus: "Filed" } : r
      )
    );
    console.log("Marked as paid. Uploaded file:", selectedFile);
    setSelectedFile(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6 pt-6">
      {/* Header */}

      <div className="flex items-center gap-4 ">
        <Button
          variant="default"
          size="default"
          onClick={() => navigate(-1)}
          className="gap-2 px-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl ">Sales Tax Filing</h1>
      </div>

      {/* Filters and Actions */}
      <div className="">
        <div className="flex items-center justify-between pr-20">
          <div className="flex items-center gap-4">
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-45 bg-white">
                <SelectValue placeholder="State (All)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">State (All)</SelectItem>
                <SelectItem value="California">California</SelectItem>
                <SelectItem value="Texas">Texas</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Illinois">Illinois</SelectItem>
                <SelectItem value="Washington">Washington</SelectItem>
                <SelectItem value="Ohio">Ohio</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-45 bg-white">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="filed">Filed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <>
            <Button
              variant="default"
              size="default"
              onClick={() => setIsDialogOpen(true)}
            >
              Pay Tax
            </Button>

            <PayTaxDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              selectedFile={selectedFile}
              onFileChange={handleFileChange}
              onMarkAsPaid={handleMarkAsPaid}
            />
          </>
        </div>
      </div>

      {/* Table */}
      <div className="pr-8">
        <Card className="p-4 rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  Ref. ID
                </TableHead>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  State
                </TableHead>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  Tax Due
                </TableHead>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  Tax Rate
                </TableHead>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  Filing Status
                </TableHead>
                <TableHead className="font-semibold text-xs text-muted-foreground uppercase">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((record, index) => (
                <TableRow key={`${record.refId}-${record.state}-${index}`}>
                  <TableCell className="font-medium">{record.refId}</TableCell>
                  <TableCell>{record.state}</TableCell>
                  <TableCell className="text-red-500 font-medium">
                    $
                    {record.taxDue.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </TableCell>
                  <TableCell>{record.taxRate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusBadgeVariant(record.filingStatus)}
                      className={
                        record.filingStatus === "Filed"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : "bg-purple-100 text-purple-700 hover:bg-purple-100"
                      }
                    >
                      {record.filingStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewDetails(record.refId)}
                      className="h-8 w-8 text-blue-600 hover:text-blue-700"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No records found matching your filters.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
