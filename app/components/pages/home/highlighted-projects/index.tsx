import HorizontalDivider from "@/app/components/divider/horizontal"
import SectionTitule from "@/app/components/section-titele"
import ProjectsCard from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"


type ProjectsProps = {
    projects: Project[]
}

const HighligtedProjects = ({ projects }: ProjectsProps) => {
    return <section className="container py-16">
        <SectionTitule subTitulo="Destaques" titule="Projetos em destaque" />
        <HorizontalDivider className='mb-16' />

        <div>
            {projects?.map(project => (
                <div key={project.slug}>
                    <ProjectsCard  project={project} />
                    <HorizontalDivider className="my-16" />
                </div>
            ))}
            
            <p className="flex items-center gap-1.5">
                <span className="text-gray-400">se interessou?</span>
                <Link className="inline-flex" href="/projects ">
                    Ver Todos
                    <HiArrowNarrowRight />
                </Link>
            </p>
        </div>
    </section>
}
export default HighligtedProjects