import React from "react";

const DashboardLayout = ({
  children,
  analytics,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        {analytics}
        {revenue}
        {notifications}
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
