import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  isButtonSelected?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  isButtonSelected,
}) => {
  const buttonType =
    title === "Subscribe" || "Submit order" ? "submit" : "button";

  return (
    <button
      type={buttonType}
      className={`flex justify-center bg-Black py-4 px-8
      text-Background text-s tablet:text-sm desktop:text-m w-full font-normal uppercase
      box-border border border-Black
      transition duration-300 ease-in-out
      hover:bg-White hover:text-Black
      active:bg-White active:text-Black
      ${
        isButtonSelected === true &&
        "bg-White text-Black hover:bg-Black hover:text-Background"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
