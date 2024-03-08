import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkBheaviourProps = Omit<RouterLinkProps, "to"> & {
  href: RouterLinkProps["to"];
};

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  LinkBheaviourProps
>(function LinkBehavior(props, ref) {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

/**
 * React Router `Link` component
 *
 * https://reactrouter.com/en/main/components/link
 */
export const Link = React.forwardRef<HTMLAnchorElement, MuiLinkProps>(
  function Link(props, ref) {
    return <MuiLink ref={ref} component={LinkBehavior} {...props} />;
  }
);
