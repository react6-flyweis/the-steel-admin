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
      { path: "sales-tax-filing", element: <SalesTaxFiling /> },
      { path: "pipeline-stages", element: <PipelineStages /> },
      { path: "sales-tax", element: <SalesTaxReportingLegacy /> },

      // leads routes
      {
        path: "leads",
        children: [
          { index: true, element: <Leads /> },
          { path: "add", element: <AddNewLead /> },
          { path: "ai-marketing", element: <AIMarketing /> },

          // /leads/follow-up routes
          {
            path: "follow-up",
            children: [
              { index: true, element: <FollowUp /> },
              {
                path: "communication-timeline",
                element: <LeadCommunicationTimelinePage />,
              },
              {
                path: "script-generator",
                element: <AiScriptGeneratorPage />,
              },
              {
                path: "scoring",
                element: <LeadScoring />,
              },
              {
                path: "kpis",
                element: <FollowUpKpis />,
              },
              {
                path: "smart-reminders",
                children: [
                  { index: true, element: <SmartReminders /> },
                  {
                    path: ":id",
                    element: <SmartReminderDetail />,
                  },
                ],
              },
            ],
          },

          // /leads/:leadId routes
          {
            path: ":leadId",
            children: [
              { path: "timeline", element: <SingleLeadTimelinePage /> },
              {
                path: "emails",
                element: <SingleLeadEmailsPage />,
              },
              {
                path: "chats",
                element: <SingleLeadChatsPage />,
              },
              {
                path: "notes",
                element: <SingleLeadNotesPage />,
              },
              {
                path: "calls",
                element: <SingleLeadCallsPage />,
              },
            ],
          },
        ],
      },

      // customers routes
      {
        path: "customers",
        children: [
          { index: true, element: <Customers /> },
          { path: "insights", element: <CustomerInsights /> },

          // /customers/meetings routes
          {
            path: "meetings",
            children: [
              { index: true, element: <Meetings /> },
              { path: "schedule", element: <ScheduleMeeting /> },
              {
                path: "reschedule/:id",
                element: <ScheduleMeeting />,
              },
            ],
          },
          {
            path: "contracts",
            children: [
              { index: true, element: <Contracts /> },
              { path: ":id", element: <ContractDetail /> },
            ],
          },

          // /customers/:id routes
          {
            path: ":id",
            element: <CustomerDetailLayout />,
            children: [
              { index: true, element: <CustomerInfo /> },
              { path: "payments", element: <CustomerPayments /> },
              { path: "status", element: <CustomerStatus /> },
              { path: "order", element: <CustomerOrder /> },
            ],
          },
        ],
      },

      //  payments routes
      {
        path: "payments",
        children: [
          { path: "sales-tax-reporting", element: <SalesTaxReporting /> },
        ],
      },

      // employees routes
      {
        path: "employees",
        children: [
          { index: true, element: <Employees /> },
          { path: "performance", element: <EmployeePerformance /> },
          { path: "audit-log", element: <EmployeeAuditLog /> },
          { path: ":id", element: <EmployeeProfile /> },
        ],
      },

      // global routes
      { path: "notifications", element: <Notifications /> },

      //plants routes
      {
        path: "plant",
        children: [
          { index: true, element: <PlantDashboard /> },
          { path: "equipment_management", element: <EquipmentView /> },
          {
            path: "material_inventory_management",
            element: <MaterialInventoryView />,
          },
          {
            path: "production_management",
            element: <ProductionManagementView />,
          },
          {
            path: "maintenance_logs",
            element: <MaintenanceAndSchedulingView />,
          },
          {
            path: "upcoming_schedule",
            element: <UpcomingScheduleView />,
          },
          {
            path: "breakdown_cases",
            element: <BreakdownCasesView />,
          },
          {
            path: "service_providers",
            element: <ServiceProvidersView />,
          },
          {
            path: "equipment_allocation",
            element: <EquipmentAllocationView />,
          },
          {
            path: "transfer_requests",
            element: <TransferRequestsView />,
          },
          {
            path: "usage_tracking",
            element: <UsageTrackingView />,
          },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
