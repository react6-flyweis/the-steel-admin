import type { RouteObject } from "react-router";
import { lazy } from "react";
import { NotFound } from "@/pages/not-found";
import { AdminLayout } from "@/components/admin-layout";

const SignIn = lazy(() => import("@/pages/sign-in"));

// Dashboard section
const Dashboard = lazy(() => import("@/pages/dashboard/dashboard"));
const SalesTaxReportingLegacy = lazy(
  () => import("@/pages/dashboard/sales-tax-reporting")
);
const SalesTaxFiling = lazy(() => import("@/pages/dashboard/sales-tax-filing"));
const PipelineStages = lazy(() => import("@/pages/dashboard/pipeline-stages"));

// customers section
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

const Notifications = lazy(() => import("@/pages/notifications"));

// leads section
const Leads = lazy(() => import("@/pages/leads/leads"));
const AddNewLead = lazy(() => import("@/pages/leads/add-new-lead"));
const FollowUp = lazy(() => import("@/pages/leads/follow-up"));
const LeadCommunicationTimelinePage = lazy(
  () => import("@/pages/leads/lead-communication-timeline")
);
const SingleLeadTimelinePage = lazy(
  () => import("@/pages/leads/single-lead-timeline")
);
const SingleLeadEmailsPage = lazy(
  () => import("@/pages/leads/single-lead-emails")
);
const SingleLeadChatsPage = lazy(
  () => import("@/pages/leads/single-lead-chats")
);
const SmartReminders = lazy(() => import("@/pages/leads/smart-reminders"));
const SmartReminderDetail = lazy(() => import("@/pages/leads/single-reminder"));
const SingleLeadNotesPage = lazy(
  () => import("@/pages/leads/single-lead-notes")
);
const SingleLeadCallsPage = lazy(
  () => import("@/pages/leads/single-lead-calls")
);
const AiScriptGeneratorPage = lazy(
  () => import("@/pages/leads/ai-script-generator")
);
const LeadScoring = lazy(() => import("@/pages/leads/lead-scoring"));
const FollowUpKpis = lazy(() => import("@/pages/leads/follow-up-kpis"));
const AIMarketing = lazy(() => import("@/pages/leads/ai-marketing"));

// employees section
const Employees = lazy(() => import("@/pages/employees/employees"));
const EmployeeProfile = lazy(
  () => import("@/pages/employees/employee-profile")
);
const EmployeePerformance = lazy(
  () => import("@/pages/employees/employee-performance")
);
const EmployeeAuditLog = lazy(() => import("@/pages/employees/audit-log"));

// Payments section
const SalesTaxReporting = lazy(
  () => import("@/pages/payments/sales-tax-reporting")
);

// plant management section
const EquipmentView = lazy(() => import("@/plant/components/EquipmentView"));
const MaterialInventoryView = lazy(
  () =>
    import(
      "@/plant/components/material_inventory_management/MaterialInventoryView"
    )
);
const ProductionManagementView = lazy(
  () => import("@/plant/components/ProductionManagementView")
);
const MaintenanceAndSchedulingView = lazy(
  () =>
    import(
      "@/plant/components/maintenance_and_scheduling/MaintenanceAndSchedulingView"
    )
);
const UpcomingScheduleView = lazy(
  () =>
    import("@/plant/components/maintenance_and_scheduling/UpcomingScheduleView")
);
const BreakdownCasesView = lazy(
  () =>
    import("@/plant/components/maintenance_and_scheduling/BreakdownCasesView")
);
const ServiceProvidersView = lazy(
  () =>
    import("@/plant/components/maintenance_and_scheduling/ServiceProvidersView")
);
const EquipmentAllocationView = lazy(
  () =>
    import("@/plant/components/equipment_allocation/EquipmentAllocationView")
);
const TransferRequestsView = lazy(
  () => import("@/plant/components/equipment_allocation/TransferRequestsView")
);
const UsageTrackingView = lazy(
  () => import("@/plant/components/equipment_allocation/UsageTrackingView")
);
const PlantDashboard = lazy(() => import("@/plant/PlantPage"));

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
      { path: "leads/follow-up", element: <FollowUp /> },
      {
        path: "leads/follow-up/communication-timeline",
        element: <LeadCommunicationTimelinePage />,
      },
      {
        path: "leads/:leadId/timeline",
        element: <SingleLeadTimelinePage />,
      },
      {
        path: "leads/:leadId/emails",
        element: <SingleLeadEmailsPage />,
      },
      {
        path: "leads/:leadId/chats",
        element: <SingleLeadChatsPage />,
      },
      {
        path: "leads/:leadId/notes",
        element: <SingleLeadNotesPage />,
      },
      {
        path: "leads/:leadId/calls",
        element: <SingleLeadCallsPage />,
      },
      {
        path: "leads/follow-up/smart-reminders",
        element: <SmartReminders />,
      },
      {
        path: "leads/follow-up/smart-reminders/:id",
        element: <SmartReminderDetail />,
      },
      {
        path: "leads/follow-up/script-generator",
        element: <AiScriptGeneratorPage />,
      },
      {
        path: "leads/follow-up/scoring",
        element: <LeadScoring />,
      },
      {
        path: "leads/follow-up/kpis",
        element: <FollowUpKpis />,
      },
      { path: "leads/ai-marketing", element: <AIMarketing /> },
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
      { path: "sales-tax", element: <SalesTaxReportingLegacy /> },
      {
        path: "payments",
        children: [
          { path: "sales-tax-reporting", element: <SalesTaxReporting /> },
        ],
      },
      { path: "sales-tax-filing", element: <SalesTaxFiling /> },
      { path: "pipeline-stages", element: <PipelineStages /> },
      { path: "employees", element: <Employees /> },
      { path: "employees/performance", element: <EmployeePerformance /> },
      { path: "employees/audit-log", element: <EmployeeAuditLog /> },
      { path: "employees/:id", element: <EmployeeProfile /> },
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

      //plants routes
      { path: "plant", element: <PlantDashboard /> },
      { path: "plant/equipment_management", element: <EquipmentView /> },
      {
        path: "plant/material_inventory_management",
        element: <MaterialInventoryView />,
      },
      {
        path: "plant/production_management",
        element: <ProductionManagementView />,
      },
      {
        path: "plant/maintenance_logs",
        element: <MaintenanceAndSchedulingView />,
      },
      {
        path: "plant/upcoming_schedule",
        element: <UpcomingScheduleView />,
      },
      {
        path: "plant/breakdown_cases",
        element: <BreakdownCasesView />,
      },
      {
        path: "plant/service_providers",
        element: <ServiceProvidersView />,
      },
      {
        path: "plant/equipment_allocation",
        element: <EquipmentAllocationView />,
      },
      {
        path: "plant/transfer_requests",
        element: <TransferRequestsView />,
      },
      {
        path: "plant/usage_tracking",
        element: <UsageTrackingView />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
