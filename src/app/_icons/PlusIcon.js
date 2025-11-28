import * as React from "react";
const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#EF4444"
      d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18Z"
    />
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.999 13.333v9.334M13.332 18h9.333"
    />
  </svg>
);
export default PlusIcon;
