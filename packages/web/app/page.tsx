"use client";
import React, { useEffect } from "react";
import { useUser } from "./context/UserContext";

export default function Page() {
  const { user, loading, error, loadUser } = useUser();

  useEffect(() => {
    loadUser("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>User Information</h1>
      {loading && <p>Loading user data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && user && (
        <div>
          <h2>User Details:</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
      {!loading && !error && !user && <p>No user data available.</p>}
    </main>
  );
}
