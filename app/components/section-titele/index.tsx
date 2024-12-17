import { cn } from "@/app/lib/utils"

type SectionTituleProps = {
    titule: string,
    subTitulo: string,
    calssName?: string
}

const SectionTitule = ({
    titule,
    subTitulo,
    calssName
}: SectionTituleProps) => {
    return <div className={cn("flex flex-col gap-4", calssName)}>
        <span className="font-mono text-sm text-emerald-400" >
            {`.../${subTitulo}`}
        </span>
        <h3 className="text-3xl font-medium">
            {titule}
        </h3>
    </div>
}

export default SectionTitule