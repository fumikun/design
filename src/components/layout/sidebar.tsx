"use client"
import Image from "next/image";
import logo from "@/image/myconsole.svg"
import { SidebarItem } from "./sidebarItem";
import { HiOutlineHome } from "react-icons/hi2";
import { BsToggleOff } from "react-icons/bs";

type SidebarProps = {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={"bg-white min-h-screen min-w-fit p-3 w-max flex-none" + " " + className}>
            <div className="flex items-center">
                <Image src={logo} width={50} height={50} alt="" className="p-1 bg-slate-50 rounded-lg shadow" />
                <div className="text-xl ms-3 text-slate-900">Designs</div>
            </div>
            <div className="mt-6 w-full">
                <SidebarItem Icon={HiOutlineHome} href={"/"} name={"Home"} />
                <SidebarItem Icon={BsToggleOff} href={"/toggler"} name={"toggler"} />
            </div>
        </div >
    )
}
export default Sidebar;