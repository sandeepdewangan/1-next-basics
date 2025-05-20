type User = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
};

import React from "react";

const UsersServer = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

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

export default UsersServer;
