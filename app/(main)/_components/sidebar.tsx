"use client"
import { Logo } from "@/components/logo"

export const Sidebar = ()=>{
    return (
        <aside className="w-[270px] h-full">
            <div className="h-[64px] flex items-center justify-center">
                <Logo />
            </div>

        </aside>
    )
}