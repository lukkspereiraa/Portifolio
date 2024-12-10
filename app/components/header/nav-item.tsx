import Link from "next/link"
import { type } from "os"

type NaveItemProps = {
    label: string,
    href: string
}

export const NavItem = ({label, href}: NaveItemProps) =>{
    return(
        <Link href={href}>
            <samp className="text-emerald-400" >#</samp>
            {label}
        </Link>
    )
}