import ProjectDatalist from "@/app/components/pages/project/project-datalist";
import ProjectSection from "@/app/components/pages/project/project-datalist/project-section";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygrap-query";
import { ProjectPageInfo, ProjectsPageStaticData } from "@/app/types/page-info";


type ProjectProps = {
    params: {
      slug: string
    }
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
    return fetchHygraphQuery(
        query,
        100, // 1 day
    )
}

export default async function Project({ params: { slug } }: ProjectProps) {
    const { project } = await getProjectDetalis(slug)

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