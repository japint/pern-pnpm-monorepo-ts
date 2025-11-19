// Presentation component - User detail view
interface UserDetailViewProps {
  userId: string;
}

export default function UserDetailView({ userId }: UserDetailViewProps) {
  const user = {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">User Details</h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
        </div>

        <div className="space-y-2">
          <div>
            <span className="text-sm font-medium text-gray-500">ID:</span>
            <p className="text-gray-900">{user.id}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Email:</span>
            <p className="text-gray-900">{user.email}</p>
          </div>
        </div>

        <div className="pt-4 flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Edit
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
