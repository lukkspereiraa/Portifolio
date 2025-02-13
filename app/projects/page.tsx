import PageIntro from "../components/pages/projects/page-intro";
import ProjectList from "../components/pages/projects/project-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygrap-query";

const getPageData = async (): Promise<ProjectsPageData> => { 
   
   const query = `
        query ProjectQury {
            projects{
                shotDescriton
                slug
                title
                thumbnail{
                url
                }
                technology{
                name
                }
            }
        }
   `
    return fetchHygraphQuery(
        query,
        60 * 60 * 24,
    )
}

export default async function Projects(){
    const {projects} = await getPageData()
    return(
        <>
            <PageIntro />
            <ProjectList project={projects} />
        </>
    )
}