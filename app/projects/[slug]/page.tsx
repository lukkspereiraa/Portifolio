import ProjectDatalist from "@/app/components/pages/project/project-datalist";
import ProjectSection from "@/app/components/pages/project/project-datalist/project-section";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygrap-query";
import { ProjectPageInfo, ProjectsPageStaticData } from "@/app/types/page-info";
import { Metadata } from "next";
import { notFound } from "next/navigation";


type ProjectProps = {
    params: Promise<{
        slug: string
    }>
}

const getProjectDetalis = async (slug: string): Promise<ProjectPageInfo> => {

    const query = `
         query ProjectQury {
            project(where:{slug: "${slug}"}){
            pageThumbnail{
                url
            }
                thumbnail{
                url
                }
                section{
                title
                image{
                    url
                }
                }
                title
                shotDescriton
                descripion{
                raw
                text
                }
                technology{
                name
                }
                liveProjectUrl
                gitUrl
            }
        }
    `
    const data = fetchHygraphQuery<ProjectPageInfo>(
        query,
        1000 * 60 * 60 * 24, // 1 day
    )
    return data
}

export default async function Project({ params }: ProjectProps) {
    const { project } = await getProjectDetalis((await params).slug)
    
    if (!project?.title) return notFound()
    return (<>


        <ProjectDatalist project={project} />
        <ProjectSection sections={project.section} />
    </>);
}

export async function generateStaticParams() {
    const query = `
        query ProjectSlugs{
            projects(first:100){
                slug
            }
        }
    `
    const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

    return projects
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {

    const data = await getProjectDetalis((await params).slug)
    const project = data.project

    return {
        title: project.title,
        description: project.descripion.text,
        openGraph: {
            images: [
                {
                    url: project.thumbnail.url,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ]
        }
    }
}