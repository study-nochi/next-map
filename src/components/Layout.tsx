import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
