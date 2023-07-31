import { useLocation } from "react-router-dom";
import { Navigation, NavigationLink } from "./Navigation.styled";

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACTS US', path: '/contacts' },
  { name: 'CHECKOUT', path: '/checkout' },
  { name: 'ACCOUNT', path: '/account' },
];

const HeaderNavigation = () => {
  const location = useLocation();

  return (
    <Navigation>
      {navItems.map(({name,path})=><NavigationLink key={path} to={path} active={(location.pathname === path ? 'true' : 'false')}>
        {name}
      </NavigationLink>)}
     
    </Navigation>
  );
};

export default HeaderNavigation;
