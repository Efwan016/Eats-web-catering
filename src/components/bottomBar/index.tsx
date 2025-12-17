"use client"

import HelpIcon from "@/aseets/icons/Help"
import HomeIcon from "@/aseets/icons/Home"
import OrderIcon from "@/aseets/icons/Order"
import PromoIcon from "@/aseets/icons/Promo"
import Link from "next/link"
import { usePathname } from "next/navigation"


const BottomBar = () => {
    const pathname = usePathname()

    const mainMenu = [
        {
            key: "homepage",
            label: "Home",
            icon: <HomeIcon />,
            slug: "/",
        },
        {
            key: "order",
            label: "Order",
            icon: <OrderIcon />,
            slug: "/orders",
        },
        {
            key: "promo",
            label: "Promo",
            icon: <PromoIcon />,
            slug: "/promos",
        },
        {
            key: "help",
            label: "Help",
            icon: <HelpIcon />,
            slug: "/helps",
        },
    ]

    const isMenuActive = (slug: string) => {
        return (
            pathname === slug ||
            (pathname.startsWith(slug) &&
                pathname.charAt(slug.length) === "/")
        )
    }

    return (
        <div className="sticky bottom-4 z-50">
            <div className="max-w-3xl mx-auto">
                <ul className="mx-4 rounded-full flex justify-evenly gap-x-3 bg-amber-600 shadow-[0px_12px_30px_0px_#07041517] p-3">
                    {mainMenu.map((menu) => {
                        const active = isMenuActive(menu.slug)

                        return (
                            <li key={menu.key}>
                                <Link
                                    aria-current={active ? "true" : "false"}
                                    href={menu.slug}
                                    className={[
                                        "flex flex-col items-center rounded-full px-3 py-1 w-17.5",
                                        active
                                            ? "bg-amber-300 text-red-700"
                                            : "text-white hover:text-gray-200",
                                    ].join(" ")}
                                >
                                    {menu.icon}
                                    <span className="text-sm">{menu.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BottomBar
