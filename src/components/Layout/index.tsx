import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Root } from "./Layout.styled";
import HeaderNavigation from "./Navigation";

const Layout: React.FC = () => {
  return (
    <Root>
      <Header />
      <HeaderNavigation />
      <main>
        <Outlet />
      </main>
    </Root>
  );
};

export default Layout;
