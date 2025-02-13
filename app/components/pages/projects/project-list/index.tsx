import Link from "next/link";
import ProjectCard from "./project-card";
import { Project } from "../../../../types/projects";

type ProjectListProps = {
    project: Project[]
}

const  ProjectList = ({project}: ProjectListProps) => {
    return ( 
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4
    gap-y-6">
        {project.map((p) => (
            <Link href={`/projects/${p.slug}`} key={p.title}>
                <ProjectCard project={p} />
            </Link>
        ))}
    </section> );
}
 
export default ProjectList;