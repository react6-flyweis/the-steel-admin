import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  UsersRound,
  Image,
  BarChart3,
  FileText,
  Settings,
  Link2,
  Table,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  | "reports";

const navigationGroups = [
  {
    id: "dashboard" as NavGroup,
    icon: LayoutDashboard,
    label: "Dashboard",
    color: "bg-[#1e3a8a]",
    items: [{ path: "/", label: "Dashboard" }],
  },
  {
    id: "users" as NavGroup,
    icon: Users,
    label: "Users",
    color: "bg-[#EAB308]",
    items: [
      { path: "/users", label: "All Users" },
      { path: "/users/active", label: "Active Users" },
      { path: "/users/pending", label: "Pending Users" },
    ],
  },
  {
    id: "messages" as NavGroup,
    icon: MessageSquare,
    label: "Messages",
    color: "bg-[#a855f7]",
    items: [
      { path: "/messages", label: "Inbox" },
      { path: "/messages/sent", label: "Sent" },
      { path: "/messages/drafts", label: "Drafts" },
    ],
  },
  {
    id: "teams" as NavGroup,
    icon: UsersRound,
    label: "Teams",
    color: "bg-[#ea580c]",
    items: [
      { path: "/teams", label: "All Teams" },
      { path: "/teams/create", label: "Create Team" },
      { path: "/teams/invites", label: "Invitations" },
    ],
  },
  {
    id: "gallery" as NavGroup,
    icon: Image,
    label: "Gallery",
    color: "bg-[#16a34a]",
    items: [
      { path: "/gallery", label: "All Images" },
      { path: "/gallery/upload", label: "Upload" },
      { path: "/gallery/albums", label: "Albums" },
    ],
  },
  {
    id: "analytics" as NavGroup,
    icon: BarChart3,
    label: "Analytics",
    color: "bg-[#000000]",
    items: [
      { path: "/analytics", label: "Overview" },
      { path: "/analytics/traffic", label: "Traffic" },
      { path: "/analytics/conversion", label: "Conversions" },
    ],
  },
  {
    id: "documents" as NavGroup,
    icon: FileText,
    label: "Documents",
    color: "bg-[#a855f7]",
    items: [
      { path: "/documents", label: "All Documents" },
      { path: "/documents/shared", label: "Shared" },
      { path: "/documents/archived", label: "Archived" },
    ],
  },
  {
    id: "settings" as NavGroup,
    icon: Settings,
    label: "Settings",
    color: "bg-[#0ea5e9]",
    items: [
      { path: "/settings", label: "General" },
      { path: "/settings/profile", label: "Profile" },
      { path: "/settings/security", label: "Security" },
    ],
  },
  {
    id: "links" as NavGroup,
    icon: Link2,
    label: "Links",
    color: "bg-[#ca8a04]",
    items: [
      { path: "/links", label: "All Links" },
      { path: "/links/create", label: "Create Link" },
      { path: "/links/analytics", label: "Link Analytics" },
    ],
  },
  {
    id: "reports" as NavGroup,
    icon: Table,
    label: "Reports",
    color: "bg-[#dc2626]",
    items: [
      { path: "/reports", label: "All Reports" },
      { path: "/reports/generate", label: "Generate Report" },
      { path: "/reports/scheduled", label: "Scheduled" },
    ],
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
            const Icon = group.icon;
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
                  className={`z-10 size-9 flex items-center justify-center rounded-full ${
                    group.color
                  } ${isActive ? "" : ""}`}
                >
                  <Icon className="size-5 text-white" />
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
