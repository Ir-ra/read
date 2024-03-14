"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const activeLink = usePathname();

  return (
    <ul className="navbar-container flex justify-start tablet:justify-center items-center h-[104px] px-6 py-4 border-t border-b border-Black tablet:px-10 desktop:py-5">
      <li className="flex items-center">
        <Link
          href="/about/payment"
          className="text-xsx text-center uppercase tablet:text-sm desktop:text-l mr-5 tablet:mr-10"
          style={{
            fontWeight: activeLink === "/about/payment" ? "700" : "300",
          }}
        >
          Payment and delivery
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="64"
          viewBox="0 0 2 64"
          fill="none"
        >
          <line x1="1" y1="64" x2="1" stroke="#1C1C1C" />
        </svg>
      </li>

      <li className="flex items-center">
        <Link
          href="/about/exchange"
          className="text-xsx text-center uppercase tablet:text-sm desktop:text-l mx-5 tablet:mx-10"
          style={{
            fontWeight: activeLink === "/about/exchange" ? "700" : "300",
          }}
        >
          Exchange and return
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="64"
          viewBox="0 0 2 64"
          fill="none"
        >
          <line x1="1" y1="64" x2="1" stroke="#1C1C1C" />
        </svg>
      </li>
      <li className="flex ml-5 tablet:ml-10">
        <Link
          href="/about/questions"
          className="text-xsx text-center uppercase tablet:text-sm desktop:text-l "
          style={{
            fontWeight: activeLink === "/about/questions" ? "700" : "300",
          }}
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
};
