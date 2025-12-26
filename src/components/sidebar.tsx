import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
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

const navigationGroups = [
  {
    id: "dashboard" as NavGroup,
    icon: dashboardIcon,
    label: "Dashboard",
    color: "bg-[#1e3a8a]",
    items: [{ path: "/", label: "Dashboard" }],
  },
  {
    id: "users" as NavGroup,
    icon: customer,
    label: "Customer",
    color: "bg-[#EAB308]",
    items: [{ path: "/customers", label: "Customer" }],
  },
  {
    id: "links" as NavGroup,
    icon: leadsIcon,
    label: "Leads",
    color: "bg-[#a855f7]",
    items: [{ path: "/leads", label: "Leads" }],
  },
  {
    id: "teams" as NavGroup,
    icon: employee,
    label: "Employee Management",
    color: "bg-[#ea580c]",
    items: [{ path: "/employees", label: "Employees" }],
  },
  {
    id: "settings" as NavGroup,
    icon: payments,
    label: "Payments",
    color: "bg-[#16a34a]",
    items: [{ path: "/payments", label: "Payments" }],
  },
  {
    id: "analytics" as NavGroup,
    icon: reportsIcon,
    label: "Reports & Analytics",
    color: "bg-[#000000]",
    items: [{ path: "/analytics", label: "Analytics" }],
  },
  {
    id: "documents" as NavGroup,
    icon: invoices,
    label: "Invoices",
    color: "bg-[#a855f7]",
    items: [{ path: "/invoices", label: "Invoices" }],
  },
  {
    id: "gallery" as NavGroup,
    icon: plant,
    label: "Plant",
    color: "bg-[#0ea5e9]",
    items: [{ path: "/plant", label: "Plant" }],
  },
  {
    id: "reports" as NavGroup,
    icon: finance,
    label: "Finance",
    color: "bg-[#ca8a04]",
    items: [{ path: "/finance", label: "Finance" }],
  },
  {
    id: "construction" as NavGroup,
    icon: construction,
    label: "Construction",
    color: "bg-[#dc2626]",
    items: [{ path: "/construction", label: "Construction" }],
  },
  {
    id: "messages" as NavGroup,
    icon: communication,
    label: "Communication",
    color: "bg-gray-400",
    items: [{ path: "/communication", label: "Communication" }],
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<NavGroup>("dashboard");

  const currentGroup = navigationGroups.find((g) => g.id === selectedGroup);

  const handleGroupChange = (groupId: NavGroup) => {
    setSelectedGroup(groupId);
    const group = navigationGroups.find((g) => g.id === groupId);
    if (group && group.items.length > 0) {
      navigate(group.items[0].path);
    }
  };

  return (
    <div className="flex">
      {/* Icon Sidebar */}
      <aside className="w-14 pt-28 bg-[#2563eb] h-screen fixed left-0 top-0 flex flex-col items-center   gap-4  z-20">
        <nav className="flex flex-col gap-3">
          {navigationGroups.map((group) => {
            const iconSrc = group.icon as string;
            const isActive = selectedGroup === group.id;

            return (
              <button
                key={group.id}
                onClick={() => handleGroupChange(group.id)}
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
        <nav className="flex-1 p-3 px-3">
          <div className="space-y-2">
            {currentGroup?.items.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-4 py-2 rounded-xl transition-colors",
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-700 hover:bg-gray-100",
                    currentGroup?.color
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
}
