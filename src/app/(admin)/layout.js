"use client";

import AdminNavbar from "@/AdminComponent/layout/AdminNavbar";
import AdminSidebar from "@/AdminComponent/layout/AdminSidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        <AdminNavbar />
      </header>

      {/* Main Layout Container */}
      <div className="flex flex-1">
        {/* Sidebar (fixed only on lg screens) */}
        <aside className="hidden lg:block lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-64 z-40 bg-white border-r border-gray-200 overflow-y-auto">
          {/* Adjust pt-[64px] if your navbar height is different */}
          <AdminSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-64 p-4 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
