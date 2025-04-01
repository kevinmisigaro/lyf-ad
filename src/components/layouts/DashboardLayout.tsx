import React, { ReactNode } from "react";
import SideNav from "../nav/SideNav";
import TopNav from "../nav/TopNav";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNav />

        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;