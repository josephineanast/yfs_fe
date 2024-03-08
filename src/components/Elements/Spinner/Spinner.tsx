import { grey } from "@mui/material/colors";

const sizes = {
  sm: { width: 16, height: 16 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  xl: { width: 48, height: 48 },
};

const variants = {
  light: { color: "#fff" },
  primary: { color: grey[600] },
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

export const Spinner = ({ size = "md", variant = "primary" }: SpinnerProps) => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0%   { transfrom: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-testid="loading"
        style={{
          animation: "spin .5s linear infinite",
          ...sizes[`${size}`],
          ...variants[`${variant}`],
        }}
      >
        <circle
          style={{ opacity: 0.25 }}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          style={{ opacity: 0.75 }}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </>
  );
};
