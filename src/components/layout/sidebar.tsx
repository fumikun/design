"use client"
import Image from "next/image";
import logo from "@/image/myconsole.svg"
import { SidebarItemIcon, SidebarItem } from "./sidebarItem";
import { HiOutlineHome, HiOutlineDocument } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <div className="bg-white min-h-screen min-w-fit p-3 w-max">
            <div className="flex items-center">
                <Image src={logo} width={50} height={50} alt="" className="p-1 bg-slate-50 rounded-lg shadow" />
                <div className="text-xl ms-3 text-slate-900">Console</div>
            </div>
            <div className="mt-6 w-full">
                <SidebarItem Icon={HiOutlineHome} href={"/"} name={"Home"} />
                <SidebarItem Icon={HiOutlineDocument} href={"/toggler"} name={"toggler"} />
            </div>
        </div >
    )
}
export default Sidebar;