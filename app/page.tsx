
import { HeroSection } from "./components/pages/home/hero-section";
import HighligtedProjects from "./components/pages/home/highlighted-projects";
import KanownTech from "./components/pages/home/kanwn-tech";
import WorkExperierince from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygrap-query";



export const metadata = {
  title: 'Home',
}


const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technology {
          name
        }
        profilePickter {
          url
        }
        social {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        project {
          slug
          thumbnail {
            url
          }
          title
          shotDescriton
          technology {
            name
          }
        }
          
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        comanyName
        companyUrl
        startDate
        endDate
        technology {
          name
        }
        description {
          raw
        }
      }
    }     
  `
  return fetchHygraphQuery(
    query,
    3600
  )
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KanownTech techs={pageData.knownTechs} />
      <HighligtedProjects projects={pageData.project} />
      <WorkExperierince experiences={workExperiences} />
    </>
  )
}
