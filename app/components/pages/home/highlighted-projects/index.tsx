import HorizontalDivider from "@/app/components/divider/horizontal"
import SectionTitule from "@/app/components/section-titele"
import ProjectsCard from "./project-card"

const HighligtedProjects = () => {
    return <section className="container py-16">
        <SectionTitule subTitulo="Destaques" titule="Projetos em destaque" />
        <HorizontalDivider className='mb-16' />

        <div>
            <ProjectsCard/>
            <ProjectsCard/>
        </div>
    </section>
}
export default HighligtedProjects