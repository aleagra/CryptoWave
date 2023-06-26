import React from "react";

function BarsIcon({ toggleOpen, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="absolute left-0 h-7 w-7 cursor-pointer max-lg:ml-6 lg:hidden"
      onClick={toggleOpen}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          open
            ? "M6 18L18 6M6 6l12 12"
            : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        }
      />
    </svg>
  );
}

export default BarsIcon;
