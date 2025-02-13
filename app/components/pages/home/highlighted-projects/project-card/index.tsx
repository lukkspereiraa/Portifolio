import Image from "next/image"
import { TechBadge } from "@/app/components/techBadge"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "@/app/components/link"
import { Project } from "@/app/types/projects"


type ProjectCarsProps = {
    project: Project
}

const ProjectsCard = ({ project }: ProjectCarsProps) => {
    return <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">

        <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
            <Image
                width={420}
                height={304}
                src={project.thumbnail.url}
                alt={`Thumbanail do projeto ${project.title}`}
                className="w-full h-full object-cover rounded-lg "
            />
        </div>

        <div className="flex-1 lg:py-[18px]">

            <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                <Image width={20} 
                height={20} 
                alt="" 
                src='/images/icons/project-title-icon.svg' />
                {project.title}
            </h3>
            <p className="text-gray-400 my-4">
                {project.shotDescriton}
            </p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                {project.technology.map(tech => (
                    <TechBadge key={`${project.title}-tech${tech.name}`} name={tech.name} />
                ))}
            </div>
            <Link href={`/projects/${project.slug}`}>
                Ver projeto
                <HiArrowNarrowRight />
            </Link>
        </div>
    </div>
}

export default ProjectsCard