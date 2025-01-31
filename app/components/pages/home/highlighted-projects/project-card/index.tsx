import Image from "next/image"
import imageProjct from "../../../../../../public/images/projects/imagemProjcts.png"
import { TechBadge } from "@/app/components/techBadge"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "@/app/components/link"

const ProjectsCard = () => {
    return <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div className="w-full h-full">
            <Image
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg "
                width={420}
                height={304} src={imageProjct}
                alt="foto do projeto nome" />
        </div>
        <div>
            <h3 className="flex gap-3 font-medium items-center text-lg text-gray-50">
                <Image width={20} height={20} alt="" src='/images/icons/project-title-icon.svg' />
                Repositorio
            </h3>
            <p className="text-gray-400 my-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora molestiae numquam ad possimus magni, quis, culpa quasi, pariatur officiis similique voluptate harum distinctio obcaecati itaque quibusdam aliquam eius. Vitae?</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
            </div>
            <Link href=''>
                Ver projeto 
                <HiArrowNarrowRight/>
            </Link>
        </div>
    </div>
}

export default ProjectsCard