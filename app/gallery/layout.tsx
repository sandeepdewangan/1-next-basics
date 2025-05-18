import React from "react";

const Layout = ({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      {/* initialy model is null as in default.tsx */}
      {modal}
      {children}
    </>
  );
};

export default Layout;
