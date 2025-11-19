"use client";
import React, { useEffect } from "react";
import { useUser } from "./context";

export default function Page() {
  const { user, loading, error, loadUser } = useUser();

  useEffect(() => {
    loadUser("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">User Information</h1>
      {loading && <p className="text-blue-600">Loading user data...</p>}
      {error && <p className="text-red-600 font-semibold">Error: {error}</p>}
      {!loading && !error && user && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">User Details:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
      {!loading && !error && !user && (
        <p className="text-gray-600">No user data available.</p>
      )}
    </div>
  );
}
