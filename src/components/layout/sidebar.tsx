import BurgerSidebar from "@/assets/burger"
import HomeIconSidebar from "@/assets/home"
import { XIcon } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"
import SidebarSecondIcon from "@/assets/sidebar-second-icon"
import SidebarThirdIcon from './../../assets/sidebar-third-icon';
import SidebarFourthIcon from "@/assets/sidebar-fourth-icon"
import SidebarFifthIcon from "@/assets/sidebar-fifth-icon"
import Sidebar6Icon from "@/assets/sidebar-6-icon"
import Sidebar7Icon from "@/assets/sidebar-7-icon"
import Sidebar8Icon from "@/assets/sidebar-8-icon"
import Sidebar9Icon from "@/assets/sidebar-9-icon"
import Sidebar10Icon from "@/assets/sidebar-10-icon"
import Sidebar11Icon from "@/assets/sidebar-11-icon"

const Sidebar = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <div className={`relative flex flex-col gap-10 p-10 py-11 items-start justify-center rounded-s-xl bg-white transition-all duration-300 ${open ? "w-56" : "w-[130px]"}`}>
            <div className="flex items-center mb-5">
                <Button variant={"link"} onClick={() => setOpen(!open)}>{open ? <XIcon className="text-[#5A5881] w-6 h-6" /> :
                    <BurgerSidebar />}</Button>
                <p className={`text-[#5A5881] opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Menu</p>
            </div>
            <div>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className="bg-[#563BFF] py-4 px-6 rounded-2xl sidebarLogo sidebarActive">
                    <HomeIconSidebar className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Home</p>
                <p className="absolute h-9 w-1 bg-[#3734A9] left-0 rounded-e-xl "></p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <SidebarSecondIcon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 1</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <SidebarThirdIcon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 2</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <SidebarFourthIcon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 3</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <SidebarFifthIcon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 4</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar6Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 5</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar7Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 6</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar8Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 7</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar9Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 8</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar10Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 9</p>
            </div>
            <div className="flex gap-2 items-center active:border-[#3734A9]">
                <div className=" py-4 px-6 rounded-2xl sidebarLogo hover:bg-[#563BFF] hover:text-white">
                    <Sidebar11Icon className="" />
                </div>
                <p className={`text-[#5A5881] text-xl opacity-0 ${open ? "transition-all duration-500 delay-100 opacity-100" : ""}`}>Tab 10</p>
            </div>
        </div>
    )
}

export default Sidebar