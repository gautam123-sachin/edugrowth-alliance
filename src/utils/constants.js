import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export const NAV_BAR_LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "Referral Program",
    path: "/referral-program",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];

export const FEATURES = [
  {
    title: "Quality Education",
    description:
      "Access a wide range of high-quality educational resources and courses.",
    icon: <SchoolIcon fontSize="large" />,
  },
  {
    title: "Referral Program",
    description:
      "Earn commissions by referring others to EduNet and growing the community.",
    icon: <PeopleAltIcon fontSize="large" />,
  },
  {
    title: "Earning Potential",
    description:
      "Unlock passive income opportunities through our Learn and Earn model.",
    icon: <MonetizationOnIcon fontSize="large" />,
  },
];
