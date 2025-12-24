import { Outlet } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-70">
        <Header />
        <main className="flex-1 bg-[#E8EFF9]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
