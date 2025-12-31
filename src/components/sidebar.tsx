import { NavLink, useLocation, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dashboardIcon from "@/assets/icons/sidebar/dashboard.svg";
import communication from "@/assets/icons/sidebar/communication.svg";
import construction from "@/assets/icons/sidebar/construction.svg";
import customer from "@/assets/icons/sidebar/customer.svg";
import employee from "@/assets/icons/sidebar/employee.svg";
import finance from "@/assets/icons/sidebar/finance.svg";
import invoices from "@/assets/icons/sidebar/invoices.svg";
import leadsIcon from "@/assets/icons/sidebar/leads.svg";
import payments from "@/assets/icons/sidebar/payments.svg";
import plant from "@/assets/icons/sidebar/plant.svg";
import reportsIcon from "@/assets/icons/sidebar/reports.svg";
import { Button } from "./ui/button";
import { UserMenu } from "@/components/user-menu";
// import { Button } from "./ui/button";
import activeBgImage from "@/assets/images/active-bg.png";
import { cn } from "@/lib/utils";

type NavGroup =
  | "dashboard"
  | "users"
  | "messages"
  | "teams"
  | "gallery"
  | "analytics"
  | "documents"
  | "settings"
  | "links"
  | "reports"
  | "construction";

interface NavigationGroup {
  id: NavGroup;
  icon: string;
  label: string;
  color: string;
  link: string;
  items: { path: string; label: string }[];
}

const navigationGroups: NavigationGroup[] = [
  {
    id: "dashboard" as NavGroup,
    icon: dashboardIcon,
    label: "Dashboard",
    color: "bg-[#1e3a8a]",
    link: "/",
    items: [{ path: "/", label: "Dashboard" }],
  },
  {
    id: "users" as NavGroup,
    icon: customer,
    label: "Customer",
    color: "bg-[#EAB308]",
    link: "/customers",
    items: [
      { path: "/customers", label: "Customer" },
      { path: "/customers/meetings", label: "Meetings" },
      { path: "/customers/insights", label: "Insights" },
    ],
  },
  {
    id: "links" as NavGroup,
    icon: leadsIcon,
    label: "Leads",
    color: "bg-[#a855f7]",
    link: "/leads",
    items: [
      // [
      {
        path: "/leads",
        label: "Leads",
      },
      // { path: "/leads/overview", label: "Overview" },
      // {
      //   path: "/leads/follow-up",
      //   label: "Follow ups",
      //   collapsible: true,
      //   subItems: [
      { path: "/leads/follow-up", label: "Overview" },
      {
        path: "/leads/follow-up/communication-timeline",
        label: "Lead Communication Timeline",
      },
      {
        path: "/leads/follow-up/smart-reminders",
        label: "Smart Follow up Reminders",
      },
      {
        path: "/leads/follow-up/script-generator",
        label: "AI Follow-Up Script Generator",
      },
      { path: "/leads/follow-up/scoring", label: "Lead Scoring" },
      { path: "/leads/follow-up/kpis", label: "Follow-Up KPIs" },
      //   ],
      // },
      { path: "/leads/ai-support", label: "AI Support" },
      // ],
    ],
  },
  {
    id: "teams" as NavGroup,
    icon: employee,
    label: "Employee Management",
    color: "bg-[#ea580c]",
    link: "/employees",
    items: [{ path: "/employees", label: "Employees" }],
  },
  {
    id: "settings" as NavGroup,
    icon: payments,
    label: "Payments",
    color: "bg-[#16a34a]",
    link: "/payments",
    items: [{ path: "/payments", label: "Payments" }],
  },
  {
    id: "analytics" as NavGroup,
    icon: reportsIcon,
    label: "Reports & Analytics",
    color: "bg-[#000000]",
    link: "/analytics",
    items: [{ path: "/analytics", label: "Analytics" }],
  },
  {
    id: "documents" as NavGroup,
    icon: invoices,
    label: "Invoices",
    color: "bg-[#a855f7]",
    link: "/invoices",
    items: [{ path: "/invoices", label: "Invoices" }],
  },
  {
    id: "gallery" as NavGroup,
    icon: plant,
    label: "Plant",
    color: "bg-[#0ea5e9]",
    link: "/plant",
    items: [
      { path: "/plant", label: "Plant Overview" },
      { path: "/plant/equipment_management", label: "Equipment" },
      {
        path: "/plant/material_inventory_management",
        label: "Material Inventory",
      },
      {
        path: "/plant/production_management",
        label: "Production Management",
      },
      {
        path: "/plant/maintenance_logs",
        label: "Maintenance Logs",
      },
      {
        path: "/plant/upcoming_schedule",
        label: "Upcoming Schedule",
      },
      {
        path: "/plant/breakdown_cases",
        label: "Breakdown Cases",
      },
      {
        path: "/plant/service_providers",
        label: "Service Providers",
      },
      {
        path: "/plant/equipment_allocation",
        label: "Equipment Allocation",
      },
      {
        path: "/plant/transfer_requests",
        label: "Transfer Requests",
      },
      {
        path: "/plant/usage_tracking",
        label: "Usage Tracking & Logs",
      },
    ],
  },
  {
    id: "reports" as NavGroup,
    icon: finance,
    label: "Finance",
    color: "bg-[#ca8a04]",
    link: "/finance",
    items: [{ path: "/finance", label: "Finance" }],
  },
  {
    id: "construction" as NavGroup,
    icon: construction,
    label: "Construction",
    color: "bg-[#dc2626]",
    link: "/construction",
    items: [{ path: "/construction", label: "Construction" }],
  },
  {
    id: "messages" as NavGroup,
    icon: communication,
    label: "Communication",
    color: "bg-gray-400",
    link: "/communication",
    items: [{ path: "/communication", label: "Communication" }],
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active group based on current path
  const activeGroup =
    navigationGroups.find((group) =>
      group.items.some((item) => {
        if (item.path === "/") {
          return location.pathname === "/";
        }
        return location.pathname.startsWith(item.path);
      })
    ) || navigationGroups[0];

  // Get the index of the active group
  const activeGroupIndex = navigationGroups.findIndex(
    (group) => group.id === activeGroup.id
  );

  // Calculate padding based on active group index
  // Each icon with gap is approximately 48px (36px icon + 12px gap)
  const menuPaddingTop = 10 + activeGroupIndex * 48;

  const handleGroupChange = (group: (typeof navigationGroups)[0]) => {
    navigate(group.link);
  };

  return (
    <div className="flex">
      {/* Icon Sidebar */}
      <aside className="w-14 pt-28 bg-[#2563eb] h-screen fixed left-0 top-0 flex flex-col items-center   gap-4  z-20">
        <nav className="flex flex-col gap-3">
          {navigationGroups.map((group) => {
            const iconSrc = group.icon as string;
            const isActive = activeGroup.id === group.id;

            return (
              <button
                key={group.id}
                onClick={() => handleGroupChange(group)}
                className={`relative flex items-center justify-center transition-all `}
                title={group.label}
              >
                {isActive && (
                  <img
                    src={activeBgImage}
                    alt="Active background"
                    className="absolute -right-3 max-w-13 object-contain"
                  />
                )}
                <div
                  className={`z-10 w-9 h-9 flex items-center justify-center rounded-full ${
                    group.color
                  } ${isActive ? "" : ""}`}
                >
                  <img
                    src={iconSrc}
                    alt={group.label}
                    className="max-w-5 max-h-5 object-contain"
                  />
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Sidebar */}
      <aside className="w-56 bg-[#E8EFF9] h-screen fixed left-14 top-0 flex flex-col overflow-y-auto z-30">
        {/* Header */}
        <div className="p-2 border-b relative">
          <UserMenu />
          <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
            <Button
              className="rounded bg-gray-300 px-4 text-foreground hover:bg-gray-400"
              size="sm"
            >
              <span>Today</span>
            </Button>
            <div className="flex gap-1">
              <button className="hover:text-gray-600">
                <ChevronLeft className="size-4" />
              </button>
              <button className="hover:text-gray-600">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav
          className="flex-1 p-3 px-3"
          style={{ paddingTop: `${menuPaddingTop}px` }}
        >
          <div className="space-y-2">
            {activeGroup?.items.map((item, i) => {
              const isFirst = i === 0;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  // style={{ marginTop: i > 0 ? `${i * 8}px` : undefined }}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-2 rounded-lg transition-colors",
                      {
                        [`text-white ${activeGroup.color}`]:
                          isFirst || isActive,
                      },
                      {
                        "bg-white shadow-lg": !isFirst && !isActive,
                      },
                      { "w-4/5 mb-5": isFirst }
                    )
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
}
