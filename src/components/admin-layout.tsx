import { Outlet, useLocation } from "react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useState, useEffect, useRef } from "react";

export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      try {
        scrollRef.current.scrollTo({ top: 0, left: 0 });
      } catch {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div
        ref={scrollRef}
        className="flex-1 flex flex-col ml-0 lg:ml-70 overflow-auto"
      >
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 bg-[#E8EFF9] pb-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
