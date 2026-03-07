import { Pencil } from "lucide-react";
import * as React from "react";
const PenCil123 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.334 2a1.885 1.885 0 1 1 2.667 2.666l-9 9-3.667 1 1-3.666 9-9Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PenCil123;
