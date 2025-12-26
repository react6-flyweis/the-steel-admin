import { Outlet } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-70">
        <Header />
        <main className="flex-1 bg-[#E8EFF9] pb-5 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
