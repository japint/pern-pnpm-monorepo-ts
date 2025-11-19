import UserDetailView from "./views/UserDetailView";

// Dynamic route - [id] becomes a parameter
export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  // Fetch data here if needed, pass as props to view
  return <UserDetailView userId={id} />;
}
