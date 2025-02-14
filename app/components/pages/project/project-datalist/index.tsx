'use client'

import Button from "@/app/components/button";
import SectionTitule from "@/app/components/section-titele";
import { TechBadge } from "@/app/components/techBadge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link";
import { HiArrowLeft } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { RichText } from "@/app/components/rich-text";
import { motion } from "framer-motion";

type ProjectDatalistProps = {
    project: Project
}
const ProjectDatalist = ({ project }: ProjectDatalistProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 overflow-hidden" >
            <motion.div className="absolute inset-0 z-[-1] "
                style={{ background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url})` }}
                initial={{ opacity: 0, scale: 1.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />


            <SectionTitule
                subTitulo="Projetos"
                titule={project.title}
                calssName="text-center items-center sm:[&>h3]:text-4xl"
            />
            <motion.div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8 }}
            >
                <RichText content={project.descripion.raw} />
            </motion.div>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                {project.technology.map((tech, i) => (
                    <TechBadge
                        key={i}
                        name={tech.name}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.6, delay: i * 0.4 }}

                    />
                ))}
            </div>
            <motion.div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8 }}
            >
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
            </motion.div>
            <Link href="/projects">
                <HiArrowLeft size={20} />
                Voltar para Projetos
            </Link>
        </section>
    );
}

export default ProjectDatalist;