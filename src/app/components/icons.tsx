export const ArrowLeftIcon = ({
  className,
  strokeWidth = "1",
}: {
  className: string;
  strokeWidth?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M31.6666 20H8.33331"
        stroke="#1C1C1C"
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 31.6667L8.33331 20L20 8.33337"
        stroke="#1C1C1C"
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightIcon = ({
  className,
  strokeWidth = "1",
}: {
  className: string;
  strokeWidth?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M8.33331 20H31.6666"
        stroke="#1C1C1C"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.33337L31.6667 20L20 31.6667"
        stroke="#1C1C1C"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
