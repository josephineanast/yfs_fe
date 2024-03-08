import CategoryIcon from "@mui/icons-material/Category";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const navItems = [
  {
    icon: <CategoryIcon />,
    label: "Sub-Category",
    pathname: "/app",
  },
  {
    icon: <SupervisorAccountIcon />,
    label: "Admin",
    pathname: "/app/admin",
  },
  {
    icon: <TextSnippetIcon />,
    label: "Results",
    pathname: "/app/results",
  },
  {
    icon: <AddBusinessIcon />,
    label: "Building",
    pathname: "/app/building",
  },
];

export default navItems;
