import React from "react";
import "../../globals.css";
import Link from "next/link";

const Notifications = () => {
  return (
    <div className="p-10 border">
      Notifications
      <Link href="/dashboard/archived">Archieved</Link>
    </div>
  );
};

export default Notifications;
