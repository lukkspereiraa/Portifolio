import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type KanwnTechTypeProps = {
    tech: {
        icon: ReactNode,
        name: string,
        starData: string,
        shadowDate: boolean

    }
}

const KanwnTech = ({ tech }: KanwnTechTypeProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.starData),
        'pt-BR').replace('há', '')
    return <div className="p-6 rounded-lg 
    bg-gray-600/20 text-gray-500 
    flex flex-col gap-2
    hover:text-emerald-500 hover:bg-gray600/30
    transition-all">
        <div className="flex items-center justify-between">
            <p className="font-medium">
                {tech.name}
            </p>
            {tech.icon}
        </div>
        <span>
            {tech.shadowDate ? relativeTime : ''}
        </span>
    </div>
}
export default KanwnTech
