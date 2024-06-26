import Link from "next/link";

import { Logo } from "../Logo/Logo";

export const MainNav = () => {
  return (
    <nav className="hidden desktop:flex items-center">
      <Logo />

      <ul className="flex items-center justify-center text-s uppercase ">
        <Link href="/" className="mainNavLinks">
          home
        </Link>

        <Link href="/shop" className="mainNavLinks">
          shop
        </Link>

        <Link
          href="/about/payment"
          className="mainNavLinks mr-auto"
          scroll={false}
        >
          about us
        </Link>
      </ul>
    </nav>
  );
};
