import { useState } from "react";
import { matchPath } from "react-router";
import { Link, useLocation } from "react-router-dom";
// material
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
// icons

import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const NavButton = styled(ListItemButton)(({ theme: { palette, spacing } }) => ({
  color: palette.neutral.dark,
  borderRadius: 4,
  ".MuiListItemIcon-root": {
    minWidth: 48,
    svg: {
      fontSize: 22,
    },
  },
  ".MuiListItemText-root .MuiTypography-root": {
    fontWeight: 500,
  },
  "&.Mui-selected": {
    color: palette.grey[600],
  },
  margin: spacing(0.5, 2),
})) as typeof ListItemButton;

const NavButtonTop = styled(ListItemButton)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.neutral.dark,
    borderRadius: 4,
    ".MuiListItemIcon-root": {
      minWidth: 48,
      svg: {
        fontSize: 22,
      },
    },
    ".MuiListItemText-root .MuiTypography-root": {
      fontWeight: 500,
    },
    ".navItem-dropdown-icon": {
      fontSize: 20,
    },
    "&.Mui-selected": {
      background: "transparent",
      color: palette.primary.main,
      ".MuiListItemIcon-root": {
        color: "inherit",
      },
      ".MuiListItemText-root .MuiTypography-root": {
        color: "inherit",
      },
      ".navItem-dropdown-icon": {
        color: "inherit",
      },
    },
    margin: spacing(0.5, 2),
  })
) as typeof ListItemButton;

const SidebarContainer = styled(Box)(({ theme }) => ({
  padding: "24px 16px 24px 16px",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  borderRight: `solid 1px ${theme.palette.grey[100]}`,
}));

const isActivePath = (navItem: NavigationItem, activePath: string): boolean => {
  if ("pathname" in navItem) {
    const pathMatch = matchPath(navItem.pathname, activePath);
    const subitemMatch = navItem.hiddenSubItems?.some((item) =>
      matchPath(item.pathname, activePath)
    );
    return Boolean(pathMatch) || Boolean(subitemMatch);
  }

  return navItem.subItems.some((item) => isActivePath(item, activePath));
};

// -----------------------------------------------------------------------------------------------

type NavigationGroupType = {
  label: string;
  icon?: JSX.Element;
  subItems: NavigationItem[];
};

type NavigationGroupProps = NavigationGroupType & {
  level: number;
  activePath: string;
};

const NavigationGroup = ({
  level,
  activePath,
  ...navProps
}: NavigationGroupProps) => {
  const { label, icon, subItems } = navProps;
  const isActive = isActivePath(navProps, activePath);
  const [isOpen, setIsOpen] = useState(isActive);

  const handleToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      <NavButtonTop selected={isActive} onClick={handleToggle}>
        {level === 0 && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "b2", fontWeight: 500 }}
        />
        {isOpen ? (
          <KeyboardArrowUp className="navItem-dropdown-icon" />
        ) : (
          <KeyboardArrowDown className="navItem-dropdown-icon" />
        )}
      </NavButtonTop>
      <Collapse in={isOpen} timeout={200} unmountOnExit>
        <Box display="flex" py={0.5}>
          <Box
            ml={5.2}
            mr={0.8}
            width="2px"
            borderRadius="1px"
            bgcolor="grey.100"
          />
          <List disablePadding sx={{ flexGrow: 1, my: -1 }}>
            {subItems.map((item) =>
              "subItems" in item ? (
                <NavigationGroup
                  key={item.label}
                  {...item}
                  activePath={activePath}
                  level={level + 1}
                />
              ) : (
                <NavigationLink
                  key={item.label}
                  {...item}
                  activePath={activePath}
                  level={level + 1}
                />
              )
            )}
          </List>
        </Box>
      </Collapse>
    </>
  );
};

// -----------------------------------------------------------------------------------------------

type NavigationLinkType = {
  label: string;
  icon?: JSX.Element;
  pathname: string;
  hiddenSubItems?: {
    pathname: string;
  }[];
};

type NavigationLinkProps = NavigationLinkType & {
  level: number;
  activePath: string;
};

const NavigationLink = ({
  level,
  activePath,
  ...navProps
}: NavigationLinkProps) => {
  const { label, icon, pathname } = navProps;
  const isActive = isActivePath(navProps, activePath);

  const NavButtonComponent = level === 0 ? NavButtonTop : NavButton;

  return (
    <NavButtonComponent component={Link} to={pathname} selected={isActive}>
      {level === 0 && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText
        primary={label}
        primaryTypographyProps={{ variant: "b2", fontWeight: 500 }}
      />
    </NavButtonComponent>
  );
};

// -------------------------------------------------------------------------------------

type NavigationItem = NavigationLinkType | NavigationGroupType;

export interface SidebarProps {
  navItems: NavigationItem[];
}

const DashboardSidebar = ({ navItems }: SidebarProps) => {
  const location = useLocation();
  const activePath =
    location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");

  return (
    <SidebarContainer>
      <Box sx={{ flexGrow: 1, maxHeight: "100%", overflow: "auto", mx: -2 }}>
        <List disablePadding>
          {navItems.map((navItem) =>
            "subItems" in navItem ? (
              <NavigationGroup
                {...navItem}
                key={navItem.label}
                activePath={activePath}
                level={0}
              />
            ) : (
              <NavigationLink
                {...navItem}
                key={navItem.label}
                activePath={activePath}
                level={0}
              />
            )
          )}
        </List>
      </Box>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
