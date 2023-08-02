export const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACTS US", path: "/contacts" },
  { name: "CHECKOUT", path: "/checkout" },
  { name: "ACCOUNT", path: "/account" },
];

export const pack = {
  small: { cost: 28.5, weight: 0.5 },
  medium: { cost: 33, weight: 0.66 },
  large: { cost: 81.5, weight: 1.5 },
};

export const initialCrackers = {
  1: {
    id: "1",
    props: {
      crackerPropsValue1: 4,
      crackerPropsValue2: 25,
      crackerPropsValue3: 61,
      crackerPropsValue4: 20,
    },
    cost: 81.5,
    weight: 1.5,
  },
  2: {
    id: "2",
    props: {
      crackerPropsValue1: 14,
      crackerPropsValue2: 19,
      crackerPropsValue3: 51,
      crackerPropsValue4: 16,
    },
    cost: 28.5,
    weight: 0.5,
  },
  3: {
    id: "3",
    props: {
      crackerPropsValue1: 5,
      crackerPropsValue2: 14,
      crackerPropsValue3: 65,
      crackerPropsValue4: 16,
    },
    cost: 33,
    weight: 0.66,
  },
};
