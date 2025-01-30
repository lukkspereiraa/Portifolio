import Button from "@/app/components/button";
import SectionTitule from "@/app/components/section-titele";
import { TechBadge } from "@/app/components/techBadge";
import { TbBrandGithub } from "react-icons/tb";
import {FiGlobe} from "react-icons/fi"
import { Link } from "@/app/components/link";
import { HiArrowLeft } from "react-icons/hi";

const ProjectDatalist = () => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 overflow-hidden" >
            <div className="absolute inset-0 z-[-1] "
                style={{ background: "url(/images/hero-bg.png) no-repeat center/cover, url(/images/projects/imagemProjcts.png)" }} />


                <SectionTitule 
                subTitulo="Projetos"
                titule="Portifolio"
                calssName="text-center items-center sm:[&>h3]:text-4xl"
                />
                <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                    Projeto do meu Portifolio pessoal onde esta porjetos feitos por mim
                </p>
                <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                    <TechBadge name="Next.JS"/>
                    <TechBadge name="Next.JS"/>
                    <TechBadge name="Next.JS"/>
                    <TechBadge name="Next.JS"/>
                    <TechBadge name="Next.JS"/>
                    <TechBadge name="Next.JS"/>
                </div>
                <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                    <a href="#" target="_blank">
                        <Button className="min-w-[180px]">
                            <TbBrandGithub size={20}/>
                            REPOSITORIO
                        </Button>
                    </a>

                    <a href="#" target="_blank">
                        <Button className="min-w-[180px]">
                            <FiGlobe size={20}/>
                            PROJETO ONLINE
                        </Button>
                    </a>
                </div>
                <Link href="/projects">
                    <HiArrowLeft size={20} />
                    Voltar para Projetos
                </Link>
        </section>
    );
}

export default ProjectDatalist;