import { UserPlus, Heart, CalendarDays, Lock } from "lucide-react";

const quickActionsData = [
  {
    title: "BECOME A MEMBER",
    shortTitle: "Member",
    href: "/membership",
    icon: UserPlus,
    color: "#166534",
  },
  {
    title: "DONATE",
    shortTitle: "Donate",
    href: "/donate",
    icon: Heart,
    color: "#F97316",
  },
  {
    title: "EVENTS",
    shortTitle: "events",
    href: "/news",
    icon: CalendarDays,
    color: "#166534",
  },
  {
    title: "MEMBER LOGIN",
    shortTitle: "Login",
    href: "/login",
    icon: Lock,
    color: "#1D4ED8",
  },
];

export default quickActionsData;
