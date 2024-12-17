"use client"
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import {usePathname} from "next/navigation"

type NaveItemProps = {
    label: string,
    href: string
}

export const NavItem = ({label, href}: NaveItemProps) =>{

    const pathName = usePathname();
    const isActive = pathName === href;

    

    return(
        <Link className={cn(
            "text-gray-400 flex items-center gap-2 font-mono font-medium",
            isActive && 'text-gray-50'
        )} href={href}>
            <samp className="text-emerald-400" >#</samp>
            {label}
        </Link>
    )
}