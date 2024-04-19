export const ArrowLeftIcon = ({
  className,
  strokeWidth = "1",
  disabled = false,
}: {
  className?: string;
  strokeWidth?: string;
  disabled: boolean;
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
        stroke={disabled ? "#BFBFBF" : "#1C1C1C"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 31.6667L8.33331 20L20 8.33337"
        stroke={disabled ? "#BFBFBF" : "#1C1C1C"}
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
  disabled = false,
}: {
  className?: string;
  strokeWidth?: string;
  disabled: boolean;
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
        stroke={disabled ? "#BFBFBF" : "#1C1C1C"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.33337L31.6667 20L20 31.6667"
        stroke={disabled ? "#BFBFBF" : "#1C1C1C"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Cross = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M9 3L3 9"
        stroke="#E64035"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3L9 9"
        stroke="#E64035"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
