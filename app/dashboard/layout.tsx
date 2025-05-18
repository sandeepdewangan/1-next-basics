import React from "react";

const DashboardLayout = ({
  children,
  analytics,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div>
        {analytics}
        {revenue}
        {notifications}
      </div>
    </div>
  );
};

export default DashboardLayout;
