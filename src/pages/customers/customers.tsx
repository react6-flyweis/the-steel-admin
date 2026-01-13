import { useState, useMemo } from "react";
import {
  Search,
  Eye,
  Users,
  UserCheck,
  UserPlus,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/ui/stat-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router";
import AddCustomerDialog from "@/components/customers/add-customer-dialog";
import FilterTabs from "@/components/FilterTabs";

type Customer = {
  id: string;
  customerName: string;
  phone?: string;
  email?: string;
  inquiryFor?: string;
  status?: string;
};

// Helper: generate a random customer
function generateRandomCustomer(): Customer {
  const names = [
    "Luca Moretti",
    "Maria Rossi",
    "Giovanni Bianchi",
    "Elena Ferri",
    "Marco Conti",
    "Sofia Romano",
    "Paolo Greco",
  ];
  const inquiries = ["Garage", "Roof", "Extension", "Kitchen", "Bathroom"];
  const statuses = ["Active", "inactive"];

  const name = names[Math.floor(Math.random() * names.length)];
  const id = `ID-${new Date().getFullYear()}-${
    Math.floor(Math.random() * 9000) + 1000
  }`;
  const phone = `+39 0${Math.floor(2000 + Math.random() * 8000)} ${Math.floor(
    100 + Math.random() * 900
  )} ${Math.floor(1000 + Math.random() * 9000)}`;
  const email = `${name.toLowerCase().replace(/\s+/g, ".")}${Math.floor(
    Math.random() * 100
  )}@example.com`;
  const inquiryFor = inquiries[Math.floor(Math.random() * inquiries.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    id,
    customerName: name,
    phone,
    email,
    inquiryFor,
    status,
  };
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  // Seed state with a few random customers plus the initial seeds
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const customers = Array.from({ length: 8 }).map(() =>
      generateRandomCustomer()
    );
    return customers;
  });
  const navigate = useNavigate();

  const filteredCustomers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return customers.filter((c) => {
      // Status filter
      if (statusFilter !== "all" && c.status?.toLowerCase() !== statusFilter) {
        return false;
      }

      // Search across several fields
      if (!q) return true;

      return (
        (c.id && c.id.toLowerCase().includes(q)) ||
        (c.customerName && c.customerName.toLowerCase().includes(q)) ||
        (c.phone && c.phone.toLowerCase().includes(q)) ||
        (c.email && c.email.toLowerCase().includes(q)) ||
        (c.inquiryFor && c.inquiryFor.toLowerCase().includes(q))
      );
    });
  }, [customers, searchQuery, statusFilter]);

  return (
    <>
      <FilterTabs />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl  text-gray-900">Customer Management</h1>
            <p className="text-gray-500 mt-1">
              Easily view, manage, and track all your customers in one place.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-gray-500 text-white hover:bg-gray-600"
              onClick={() => navigate("/customers/contracts")}
            >
              Recent Signed Contracts
            </Button>
            <AddCustomerDialog
              onAdd={(c) => {
                const newCustomer = c ?? generateRandomCustomer();
                setCustomers((prev) => [newCustomer, ...prev]);
              }}
              trigger={
                <Button size="lg" className="">
                  Add New Customer
                </Button>
              }
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Customers"
            value="126"
            color="bg-blue-600"
            icon={<Users className="h-5 w-5 text-blue-600" />}
          />
          <StatCard
            title="Active Customers"
            value="48"
            color="bg-green-600"
            icon={<UserCheck className="h-5 w-5 text-green-600" />}
          />
          <StatCard
            title="New Cust. (This Month)"
            value="15"
            color="bg-yellow-500"
            icon={<UserPlus className="h-5 w-5 text-yellow-600" />}
          />
          <StatCard
            title="Returning Customers"
            value="9"
            color="bg-orange-500"
            icon={<RefreshCw className="h-5 w-5 text-orange-600" />}
          />
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search customer, ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-40 bg-white">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inquiry For
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((customer, index) => (
                    <tr
                      key={`${customer.id}-${index}`}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.inquiryFor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant="outline"
                          className={
                            customer.status &&
                            customer.status.toLowerCase() === "active"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => navigate(`/customers/${customer.id}`)}
                        >
                          <Eye className="h-4 w-4" />
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
    </>
  );
}
