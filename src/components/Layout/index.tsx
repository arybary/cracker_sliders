import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
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
      <Footer/>
    </Root>
  );
};

export default Layout;
