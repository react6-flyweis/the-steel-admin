import { useState } from "react";
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

// Mock data - replace with actual API calls
const initialCustomers = [
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
  {
    id: "ID-2025-1047",
    customerName: "John Doe",
    phone: "+39 02 8945 2231",
    email: "luca.moretti@eurobuild.it",
    inquiryFor: "Garage",
    status: "Active",
  },
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [customers, setCustomers] = useState(initialCustomers);
  const navigate = useNavigate();

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
              onAdd={(c) => setCustomers((prev) => [c, ...prev])}
              trigger={
                <Button size="lg" className="">
                  Add New Customer
                </Button>
              }
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  {customers.map((customer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
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
                          className="bg-green-50 text-green-700 border-green-200"
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
