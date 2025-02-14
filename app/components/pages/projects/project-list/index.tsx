'use client'
import Link from "next/link";
import ProjectCard from "./project-card";
import { Project } from "../../../../types/projects";
import { motion } from "framer-motion";

type ProjectListProps = {
    project: Project[]
}

const ProjectList = ({ project }: ProjectListProps) => {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4
    gap-y-6">
            {project.map((p, i) => (
                <motion.div key={p.title}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                    <Link href={`/projects/${p.slug}`} >
                        <ProjectCard project={p} />
                    </Link>
                </motion.div>

            ))}
        </section>);
}

export default ProjectList;