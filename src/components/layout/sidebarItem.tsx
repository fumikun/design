"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

type Props = {
    Icon: IconType;
    href: string;
    name: string;
};

type IconProps = {
    Icon: IconType;
    href: string;
};

export const SidebarItem = ({ Icon, href, name }: Props) => {
    const path = usePathname();
    return (
        <>
            <Link href={href} className={`${path == href
                ? " text-white bg-myconsole-red-500 rounded-lg"
                : "hover:text-slate-600 w-full rounded-lg text-slate-800 p-3 flex items-center"
                } min-w-max w-full p-3 flex items-center mb-2`}>
                <Icon color={path == href
                    ? "white"
                    : "color: rgb(203 213 225 / var(--tw-text-opacity))"
                } className="h-6 me-3" size={24} />
                <div>{name}</div>
            </Link>
        </>
    );
};


export const SidebarItemIcon = ({ Icon, href }: IconProps) => {
    const path = usePathname();
    return (
        <>
            <Link href={href} className={`${path == href
                ? " text-white bg-myconsole-red-500 rounded-lg"
                : "hover:bg-myconsole-red-300 w-full rounded-lg text-slate-900 p-3 flex items-center"
                } p-3 flex items-center mb-2 `}>
                <Icon color={path == href
                    ? "white"
                    : "color: rgb(203 213 225 / var(--tw-text-opacity))"
                } className="h-6" size={24} />
            </Link>
        </>
    );
};
