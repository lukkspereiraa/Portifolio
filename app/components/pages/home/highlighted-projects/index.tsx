import HorizontalDivider from "@/app/components/divider/horizontal"
import SectionTitule from "@/app/components/section-titele"
import ProjectsCard from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

const HighligtedProjects = () => {
    return <section className="container py-16">
        <SectionTitule subTitulo="Destaques" titule="Projetos em destaque" />
        <HorizontalDivider className='mb-16' />

        <div>
            <ProjectsCard />
            <HorizontalDivider className="my-16" />
            <ProjectsCard />
            <HorizontalDivider className="my-16" />

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