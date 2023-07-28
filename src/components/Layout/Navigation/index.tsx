import { useLocation } from "react-router-dom";
import { Navigation, NavigationLink } from "./Navigation.styled";

const HeaderNavigation = () => {
  const location = useLocation();

  return (
    <Navigation>
      <NavigationLink to="/" isActive={location.pathname === '/'}>
        HOME
      </NavigationLink>
      <NavigationLink to="/about" isActive={location.pathname === '/about'}>
        ABOUT US
      </NavigationLink>
      <NavigationLink to="/contacts" isActive={location.pathname === '/contacts'}>
        CONTACTS US
      </NavigationLink>
      <NavigationLink to="/checkout" isActive={location.pathname === '/checkout'}>
        CHECKOUT
      </NavigationLink>
      <NavigationLink to="/account" isActive={location.pathname === '/account'}>
        ACCOUNT
      </NavigationLink>
    </Navigation>
  );
};

export default HeaderNavigation;
