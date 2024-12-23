
import { HeroSection } from "./components/pages/home/hero-section";
import HighligtedProjects from "./components/pages/home/highlighted-projects";
import KanownTech from "./components/pages/home/kanwn-tech";
import WorkExperierince from "./components/pages/home/work-experience";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <KanownTech />
      <HighligtedProjects />
      <WorkExperierince />
    </>
  )
}
