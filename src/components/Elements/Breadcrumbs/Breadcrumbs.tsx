import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { Link } from "../Link";

export interface BreadcrumbsProps {
  items: Array<{
    label: string;
    link: string;
  }>;
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      sx={{ color: "grey.200", fontWeight: 500 }}
    >
      {items.map((item, index) => (
        <Typography
          key={item.label}
          component={Link}
          href={item.link}
          variant="b2"
          color={index === items.length - 1 ? "grey.A100" : "inherit"}
          sx={{ textDecoration: "none" }}
        >
          {item.label}
        </Typography>
      ))}
    </MuiBreadcrumbs>
  );
};
