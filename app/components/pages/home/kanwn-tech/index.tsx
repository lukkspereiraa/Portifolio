import SetionTitule from "@/app/components/section-titele"
import KanwnTech from "./kanown-tech"
import { knownTech as IKnownTech} from "@/app/types/projects"

type KanownTechProps ={
    techs: IKnownTech []
}

const KanownTech = ({techs}: KanownTechProps) => {
    return <section className="container py-16" >
        <SetionTitule subTitulo="competências" titule="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[64px]">
            {
                techs?.map((tech) => (
                    <KanwnTech key={tech.name} tech={tech} />
                ))
            }
        </div>
    </section>

}

export default KanownTech