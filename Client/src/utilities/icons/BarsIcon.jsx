function BarsIcon({ className = "", onClick, open = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={onClick}
      className={`h-5 w-5 cursor-pointer transition ${className}`}
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
