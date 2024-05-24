"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AccountBar = () => {
  const activeLink = usePathname();
  return (
    <ul className="flex flex-col gap-6">
      <li className="">
        <Link
          href="/account/personal_information"
          className="text-xsx uppercase"
          style={{
            fontWeight:
              activeLink === "/account/personal_information" ? "700" : "300",
          }}
        >
          personal information
        </Link>
      </li>

      <li className="">
        <Link
          href="/account/delivery_details"
          className="text-xsx uppercase"
          style={{
            fontWeight:
              activeLink === "/account/delivery_details" ? "700" : "300",
          }}
        >
          delivery details
        </Link>
      </li>
      <li className="">
        <Link
          href="/account/order_history"
          className="text-xsx uppercase"
          style={{
            fontWeight: activeLink === "/account/order_history" ? "700" : "300",
          }}
        >
          order history
        </Link>
      </li>
      <li className="">
        <Link
          href="/account/favorites"
          className="text-xsx uppercase"
          style={{
            fontWeight: activeLink === "/account/favorites" ? "700" : "300",
          }}
        >
          favorites
        </Link>
      </li>
    </ul>
  );
};
