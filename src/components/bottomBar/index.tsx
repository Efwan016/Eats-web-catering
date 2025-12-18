"use client";

import Help from "@/aseets/icons/Help";
import Home from "@/aseets/icons/Home";
import Order from "@/aseets/icons/Order";
import Promo from "@/aseets/icons/Promo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const mainMenu = [
    {
      key: "homepage",
      label: "Home",
      icon: Home,
      slug: "/",
    },
    {
      key: "order",
      label: "Order",
      icon: Order,
      slug: "/orders",
    },
    {
      key: "promo",
      label: "Promo",
      icon: Promo,
      slug: "/promos",
    },
    {
      key: "help",
      label: "Help",
      icon: Help,
      slug: "/helps",
    },
  ];

  const isMenuActive = (slug: string) => {
    return pathname === slug || (pathname.startsWith(slug) && slug !== "/");
  };

  return (
    <div className="sticky bottom-4 z-50">
      <div className="max-w-3xl mx-auto">
        <ul className="mx-4 rounded-full flex justify-evenly gap-x-3 bg-white shadow-lg p-2">
          {mainMenu.map((menu) => {
            const active = isMenuActive(menu.slug);
            const Icon = menu.icon;

            return (
              <li key={menu.key}>
                <Link
                  aria-current={active ? "true" : "false"}
                  href={menu.slug}
                  className={`flex flex-col items-center rounded-full px-4 py-2 w-20 transition-colors ${
                    active
                      ? "bg-amber-500 text-white"
                      : "text-gray-500 hover:text-amber-500"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      active ? "text-white" : "text-gray-500"
                    }`}
                  />
                  <span className="text-xs">{menu.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
