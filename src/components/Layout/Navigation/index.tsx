import { useLocation } from "react-router-dom";
import { navItems } from "../../../constant";
import { Navigation, NavigationLink } from "./Navigation.styled";

const HeaderNavigation = () => {
  const location = useLocation();

  return (
    <Navigation>
      {navItems.map(({ name, path }) => (
        <NavigationLink
          key={path}
          to={path}
          active={location.pathname === path ? "true" : "false"}
        >
          {name}
        </NavigationLink>
      ))}
    </Navigation>
  );
};

export default HeaderNavigation;
