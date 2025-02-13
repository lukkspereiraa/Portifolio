import Button from "@/app/components/button";
import SectionTitule from "@/app/components/section-titele";
import { TechBadge } from "@/app/components/techBadge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link";
import { HiArrowLeft } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { RichText } from "@/app/components/rich-text";

type ProjectDatalistProps = {
    project: Project
}
const ProjectDatalist = ({ project }: ProjectDatalistProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 overflow-hidden" >
            <div className="absolute inset-0 z-[-1] "
                style={{ background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url})` }} />


            <SectionTitule
                subTitulo="Projetos"
                titule={project.title}
                calssName="text-center items-center sm:[&>h3]:text-4xl"
            />
            <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                <RichText content={project.descripion.raw} />
            </div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technology.map((tech, i) => (
                    <TechBadge
                        key={i}
                        name={tech.name}
                    />
                ))}
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                {project?.gitUrl && (<a href={project.gitUrl} target="_blank">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub size={20} />
                        REPOSITORIO
                    </Button>
                </a>)}

                {project?.liveProjectUrl && (<a href={project.liveProjectUrl} target="_blank">
                    <Button className="min-w-[180px]">
                        <FiGlobe size={20} />
                        PROJETO ONLINE
                    </Button>
                </a>)}
            </div>
            <Link href="/projects">
                <HiArrowLeft size={20} />
                Voltar para Projetos
            </Link>
        </section>
    );
}

export default ProjectDatalist;