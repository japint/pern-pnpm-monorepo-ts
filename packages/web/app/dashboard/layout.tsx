// Dashboard-specific layout - wraps all dashboard pages
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - only visible on dashboard pages */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <a
            href="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Overview
          </a>
          <a
            href="/dashboard/settings"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="/dashboard/profile"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Profile
          </a>
        </nav>
      </aside>

      {/* Main content area for dashboard pages */}
      <div className="flex-1 bg-gray-100 p-8">{children}</div>
    </div>
  );
}
