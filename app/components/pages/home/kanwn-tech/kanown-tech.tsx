import { CmsIcon } from "@/app/components/cms-icon"
import { knownTech as IKnownTech } from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"


type KanwnTechTypeProps = {
    tech: IKnownTech
}

const KanwnTech = ({ tech }: KanwnTechTypeProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate),
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
            {<CmsIcon icon={tech.iconSvg} />}
        </div>
        <span>
            {relativeTime} de experiênce
        </span>
    </div>
}
export default KanwnTech
