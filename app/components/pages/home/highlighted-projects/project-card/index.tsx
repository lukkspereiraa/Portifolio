'use client'

import Image from "next/image"
import { TechBadge } from "@/app/components/techBadge"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "@/app/components/link"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"


type ProjectCarsProps = {
    project: Project
}

const ProjectsCard = ({ project }: ProjectCarsProps) => {
    const anime = {
        initial: {
            y: 50,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 50,
            opacity: 0
        },
        transition: {
            duration: 0.5
        }
    }

    return <motion.div className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <motion.div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.3 }}

        >
            <Image
                width={420}
                height={304}
                src={project.thumbnail.url}
                alt={`Thumbanail do projeto ${project.title}`}
                className="w-full h-full object-cover rounded-lg "
            />
        </motion.div>

        <div className="flex-1 lg:py-[18px]">

            <motion.h3 className="flex items-center gap-3 font-medium text-lg text-gray-50"
                {...anime}
                transition={{ duration: 0.7 }}
            >
                <Image width={20}
                    height={20}
                    alt=""
                    src='/images/icons/project-title-icon.svg' />
                {project.title}
            </motion.h3>
            <motion.p className="text-gray-400 my-4"
                {...anime}
                transition={{ duration: 0.2, delay: 0.3 }}
            >
                {project.shotDescriton}
            </motion.p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                {project.technology.map((tech, i) => (
                    <TechBadge key={`${project.title}-tech${tech.name}`} name={tech.name}
                        initial={{opacity: 0, scale:0 }}
                        whileInView={{opacity: 1, scale:1 }}
                        exit={{opacity: 0, scale:0 }}
                        transition={{duration: 0.2, delay: 0.5 + i * 0.1}}
                    />
                ))}
            </div>
            <Link href={`/projects/${project.slug}`}>
                Ver projeto
                <HiArrowNarrowRight />
            </Link>
        </div>
    </motion.div>
}

export default ProjectsCard