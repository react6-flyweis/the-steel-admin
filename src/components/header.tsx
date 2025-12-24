import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { NotificationMenu } from "@/components/notification-menu";
import steelLogo from "@/assets/the-steel-logo-dark.svg";

export function Header() {
  return (
    <header className="bg-white border-b px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search leads, projects..."
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Right Side - Notifications and Logo */}
        <div className="flex items-center gap-6">
          <NotificationMenu />

          {/* The Steel Logo */}
          <div>
            <img
              src={steelLogo}
              alt="The Steel Logo"
              className="max-h-10 max-w-24 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
