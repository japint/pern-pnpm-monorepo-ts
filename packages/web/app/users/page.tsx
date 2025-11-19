import { UserList } from "@/components";

// Page component - handles routing and data fetching
export default async function UsersPage() {
  // Fetch data here (or use client component with hooks)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        <a
          href="/users/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add User
        </a>
      </div>

      {/* Presentation component */}
      <UserList />
    </div>
  );
}
