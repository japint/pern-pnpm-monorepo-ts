import { UserDetail } from "@/components";

// Dynamic route - [id] becomes a parameter
export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">User Details</h1>

      {/* Pass data to presentation component */}
      <UserDetail userId={id} />
    </div>
  );
}
