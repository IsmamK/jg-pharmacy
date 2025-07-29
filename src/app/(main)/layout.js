"use client";

import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <Navbar />
          <SubNavbar />
        </header>
        
        <div className="flex flex-3 flex-col lg:flex-row">
          {/* Persistent Sidebar */}
          <aside className="lg:w-90 lg:h-[calc(100vh-120px)] lg:sticky lg:top-[120px] border-r border-gray-200 bg-white overflow-y-auto">
            <Sidebar />
          </aside>
          
          {/* Main Content */}
          <main className="flex-3">
            {children}
          </main>
        </div>
        
      </body>
    </html>
  );
}