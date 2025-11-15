"use client";
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

type TCtx = {
  user: User | null;
  loading: boolean;
  error: string | null;
  loadUser: (id: string) => Promise<void>;
};

const UserContext = createContext<TCtx | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadUser(id: string) {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const res = await axios.get<User>(`${apiUrl}/users/${id}`);
      setUser(res.data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load user";
      setError(message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, error, loadUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
}
