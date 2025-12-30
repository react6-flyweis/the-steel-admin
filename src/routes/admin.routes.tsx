import type { RouteObject } from "react-router";
import { lazy } from "react";
import { NotFound } from "@/pages/not-found";
import { AdminLayout } from "@/components/admin-layout";

const SignIn = lazy(() => import("@/pages/sign-in"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const SalesTaxReporting = lazy(() => import("@/pages/sales-tax-reporting"));
const SalesTaxFiling = lazy(() => import("@/pages/sales-tax-filing"));
const PipelineStages = lazy(() => import("@/pages/pipeline-stages"));
const Customers = lazy(() => import("@/pages/customers/customers"));
const CustomerInsights = lazy(
  () => import("@/pages/customers/customer-insights")
);
const CustomerDetailLayout = lazy(
  () => import("@/pages/customers/customer-detail/customer-layout")
);
const CustomerInfo = lazy(
  () => import("@/pages/customers/customer-detail/customer-info")
);
const CustomerPayments = lazy(
  () => import("@/pages/customers/customer-detail/customer-payments")
);
const CustomerStatus = lazy(
  () => import("@/pages/customers/customer-detail/customer-status")
);
const CustomerOrder = lazy(
  () => import("@/pages/customers/customer-detail/customer-order")
);

const Contracts = lazy(() => import("@/pages/customers/contracts"));
const ContractDetail = lazy(() => import("@/pages/customers/contract-detail"));
const Meetings = lazy(() => import("@/pages/customers/meetings"));
const ScheduleMeeting = lazy(
  () => import("@/pages/customers/schedule-meeting")
);
const Leads = lazy(() => import("@/pages/leads"));
const AddNewLead = lazy(() => import("@/pages/add-new-lead"));
const Notifications = lazy(() => import("@/pages/notifications"));

export const adminRoutes: RouteObject[] = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "leads", element: <Leads /> },
      { path: "leads/add", element: <AddNewLead /> },
      { path: "customers", element: <Customers /> },
      { path: "customers/insights", element: <CustomerInsights /> },
      { path: "customers/meetings", element: <Meetings /> },
      { path: "customers/meetings/schedule", element: <ScheduleMeeting /> },
      {
        path: "customers/meetings/reschedule/:id",
        element: <ScheduleMeeting />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetailLayout />,
        children: [
          { index: true, element: <CustomerInfo /> },
          { path: "payments", element: <CustomerPayments /> },
          { path: "status", element: <CustomerStatus /> },
          { path: "order", element: <CustomerOrder /> },
        ],
      },
      { path: "customers/contracts", element: <Contracts /> },
      { path: "customers/contracts/:id", element: <ContractDetail /> },
      { path: "sales-tax", element: <SalesTaxReporting /> },
      { path: "sales-tax-filing", element: <SalesTaxFiling /> },
      { path: "pipeline-stages", element: <PipelineStages /> },
      { path: "users", element: <div>Users Page</div> },
      { path: "messages", element: <div>Messages Page</div> },
      { path: "notifications", element: <Notifications /> },
      { path: "teams", element: <div>Teams Page</div> },
      { path: "gallery", element: <div>Gallery Page</div> },
      { path: "analytics", element: <div>Analytics Page</div> },
      { path: "documents", element: <div>Documents Page</div> },
      { path: "settings", element: <div>Settings Page</div> },
      { path: "links", element: <div>Links Page</div> },
      { path: "reports", element: <div>Reports Page</div> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
