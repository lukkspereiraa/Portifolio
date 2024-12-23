import Image from "next/image";
import logoEmpresa from '@/public/images/LogoConec+.png'
import { TechBadge } from "@/app/components/techBadge";

const ExperienceItem = () => {
    return ( <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
            <div className="rounded-full border border-gray-500 p-0.5">
                <Image src={logoEmpresa} 
                width={40} 
                height={40} 
                className="rounded-full"
                alt="logo da empresa"/>
            </div>
            <div className="h-full w-[1px] bg-gray-800" />
        </div>

        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a href="#" 
                target="_blank" 
                className="text-gray-500 hover:text-emerald-500 transition-colors" >
                    @ connect plus. -Empresa descontinuada-
                </a>
                <h4 className="text-gray-300">ux designer e dev front-end</h4>
                <span className="text-gray-500">
                    out 2022 . 0 momento . (5 meses)
                </span>
                <div>
                    <p className=" text-gray-400">
                    Uma empresa universitária que participou de algumas edições dos Corredores Digitais, onde eu era responsável pela criação do UX, assim como pelo front-end das aplicações
                    </p>
                </div>
                <p className="text-gray-400 text-sm mt-6 font-semibold">
                    Competências
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w[3350px] mb-8">
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>

                </div>
            </div>
        </div>
    </div> );
}

export default ExperienceItem;