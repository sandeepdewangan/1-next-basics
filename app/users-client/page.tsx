"use client";

type User = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
};

import React, { useEffect, useState } from "react";

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknwn error occured");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <ol>
      {users.map((u) => (
        <li key={u.id}>
          Username: {u.username}, Name: {u.name}, Email: {u.email}, Phone:
          {u.phone}
        </li>
      ))}
    </ol>
  );
};

export default UsersClient;
