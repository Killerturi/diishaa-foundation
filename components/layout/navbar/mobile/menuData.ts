import {
  House,
  Users,
  HeartHandshake,
  BadgeHelp,
  Newspaper,
  Phone,
  HandCoins,
} from "lucide-react";

const menuData = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "About Us",
    href: "/about",
    icon: Users,
  },
  {
    title: "Our Focus",
    href: "/focus",
    icon: HeartHandshake,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: HandCoins,
  },
  {
    title: "Join us",
    href: "/join-us",
    icon: BadgeHelp,
  },
  {
    title: "News",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export default menuData;
