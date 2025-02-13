import Image from "next/image";
import loginImg from "@/../../public/images/projects/logionImg.png"
import { ProjectSection } from "@/app/types/projects";

type ProjectSectionProps = {
    sections: ProjectSection[]
}


const ProjectSection = ({ sections }: ProjectSectionProps) => {
    return (<section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
        {sections.map(section => (
            <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-300" >
                    {section.title}
                </h2>
                <Image 
                    src={section.image.url}
                    width={1080}
                    height={672}
                    alt={"tela de:"+ section.title}
                    className="w-full aspect-auto rounded-lg object-cover"
                    unoptimized
                />
            </div>
        ))}
    </section>);
}

export default ProjectSection;