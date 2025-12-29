import { Outlet, useNavigate, useParams } from "react-router";
import { ArrowLeft, MailIcon } from "lucide-react";
import PaymentSuccessIcon from "@/assets/icons/customers/payment-success.svg";
import MoneyReceiveIcon from "@/assets/icons/customers/money-receive-square.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import StatCard from "@/components/ui/stat-card";

export default function CustomerDetailLayout() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ?? "unknown";

  const customer = {
    id,
    customerName: "John Doe",
    email: "luca.moretti@eurobuild.it",
    phone: "+39 02 8945 2231",
    inquiryFor: "Garage",
    status: "Active",
    joined: "January 15, 2023",
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            // size="lg"
            onClick={() => navigate(-1)}
            className="px-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <h1 className="text-lg ">Customer Info</h1>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <MailIcon className="h-4 w-4 mr-2" />
          Schedule Meeting
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="p-4">
        {/* <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader> */}
        <CardContent className="flex gap-8 justify-between items-end px-0">
          <div className="flex gap-2">
            {/* Avatar */}
            <Avatar className="size-16">
              <AvatarImage
                src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=128"
                alt={customer.customerName}
              />
              <AvatarFallback>
                {customer.customerName?.[0] ?? "?"}
              </AvatarFallback>
            </Avatar>

            {/* Customer Details */}
            <div className="space-y-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {customer.customerName}
                </h2>
                <p className="text-sm text-gray-500">{customer.id}</p>
                <p className="text-sm text-gray-500">
                  Joined {customer.joined}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">✉</span>
              <span className="text-gray-700">{customer.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">📞</span>
              <span className="text-gray-700">{customer.phone}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-500 uppercase">Inquiry For</p>
            <p className="text-sm font-medium text-gray-900">
              {customer.inquiryFor}
            </p>
          </div>

          <div className="flex items-center  px-8">
            <Badge className="bg-green-50 text-green-700 border-green-200">
              {customer.status}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Payment Received"
          value="$1,850"
          color="bg-[#1D51A4]"
          icon={
            <img
              src={PaymentSuccessIcon}
              alt=""
              className="h-5 w-5"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(26%) sepia(62%) saturate(1586%) hue-rotate(199deg) brightness(93%) contrast(91%)",
              }}
            />
          }
        />
        <StatCard
          title="Pending Payment"
          value="$2,125"
          color="bg-[#FD8D5B]"
          icon={
            <img
              src={MoneyReceiveIcon}
              alt=""
              className="h-5 w-5"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(63%) sepia(34%) saturate(1825%) hue-rotate(334deg) brightness(102%) contrast(98%)",
              }}
            />
          }
        />
        <StatCard
          title="Profit"
          value="$5,000"
          color="bg-[#EAB308]"
          icon={
            <img
              src={MoneyReceiveIcon}
              alt=""
              className="h-5 w-5"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(71%) sepia(99%) saturate(394%) hue-rotate(1deg) brightness(97%) contrast(92%)",
              }}
            />
          }
        />
        <StatCard
          title="Revenue Generated"
          value="$4,125"
          color="bg-[#A855F7]"
          icon={
            <img
              src={MoneyReceiveIcon}
              alt=""
              className="h-5 w-5"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(53%) sepia(95%) saturate(3803%) hue-rotate(250deg) brightness(100%) contrast(95%)",
              }}
            />
          }
        />
      </div>

      <Outlet />
    </div>
  );
}
