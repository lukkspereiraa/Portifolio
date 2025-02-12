import SectionTitule from "@/app/components/section-titele";
import ExperienceItem from "./experience-item";
import { WorkExperience } from "@/app/types/workeExperince";

type WorkExperienceProps = {
    experiences: WorkExperience[]
}

const WorkExperierince = ({ experiences }: WorkExperienceProps) => {
    return (<section className=" container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
        <div className=" max-w-[420px]">
            <SectionTitule subTitulo="experiências" titule="Experiências Profissinal" />
            <p className="text-gray-400 mt-6" >
                Estou sempre aberto a novos desafios e projetos emocinantes. Vamos trabalhar juntos para criar soluçõs incríves para sua empresa!
            </p>
        </div>

        <div className="flex flex-col gao-4">
            {experiences?.map(experoience=>(
                <ExperienceItem 
                    key={experoience.comanyName}
                    experience={experoience}  
                />
            ))}
            

        </div>

    </section>);
}

export default WorkExperierince;