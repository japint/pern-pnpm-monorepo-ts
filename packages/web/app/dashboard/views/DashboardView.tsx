export default function DashboardView() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">1,234</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">
            Active Sessions
          </h3>
          <p className="text-4xl font-bold text-green-600 mt-2">89</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-4xl font-bold text-purple-600 mt-2">$45K</p>
        </div>
      </div>
    </div>
  );
}
