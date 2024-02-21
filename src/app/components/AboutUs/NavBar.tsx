"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Payment and delivery",
    path: "/about/payment",
  },
  {
    title: "Exchange and return",
    path: "/about/exchange",
  },
  {
    title: "FAQ",
    path: "/about/questions",
  },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-center items-center h-[104px] px-6 py-4 border-t border-b border-Black tablet:px-10 desktop:py-5">
      {navLinks.map((link) => {
        return (
          <>
            <li
              className={pathname === link.path ? "text-red-700" : "text-black"}
              key={link.title}
            >
              <Link
                href={link.path}
                className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2"
              >
                {link.title}
              </Link>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="64"
              viewBox="0 0 2 64"
              fill="none"
            >
              <line x1="1" y1="64" x2="1" stroke="#1C1C1C" />
            </svg>
          </>
        );
      })}
      {/* <li className="flex pl-6 tablet:pl-10 desktop:pl-20 py-2.5">
        <Link
          href="#"
          className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2 "
        ></Link>
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="64"
        viewBox="0 0 2 64"
        fill="none"
      >
        <line x1="1" y1="64" x2="1" stroke="#1C1C1C" />
      </svg>
      <li className="flex pl-6 tablet:pl-10 desktop:pl-20 py-2.5">
        <Link
          href="#"
          className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2 "
        ></Link>
      </li> */}
    </ul>
  );
};

// "flex pr-6 tablet:pr-10 desktop:pr-20 py-2.5"
