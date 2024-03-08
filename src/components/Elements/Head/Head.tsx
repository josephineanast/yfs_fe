import { Helmet } from "react-helmet-async";

export interface PageProps {
  title?: string;
}

export const Head = ({ title = "Page Title" }: PageProps) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
