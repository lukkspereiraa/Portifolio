import Image from "next/image";
import { TechBadge } from "@/app/components/techBadge";
import { WorkExperience } from "@/app/types/workeExperince";
import { RichText } from "@/app/components/rich-text";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { ptBR } from "date-fns/locale";

type ExperienceItemProps = {
    experience: WorkExperience
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const { 
        companyLogo, 
        comanyName, 
        role, 
 
        endDate, 
        description, 
        technology } = experience;

        const startDate = new Date(experience.startDate);
        const formatDate = format(startDate, "MMM yyyy", { locale: ptBR });
        const endDateFormated = endDate ? format(new Date(endDate), "MMM yyyy", { locale: ptBR }) : "Atualmente";  

        const end = endDate ? new Date(endDate) : new Date();
        const month = differenceInMonths(end, startDate);
        const years = differenceInYears(end, startDate) 
        const monthsRemainder = month % 12;

        const formattedDuration =
        years > 0
          ? `${years} ano${years > 1 ? 's' : ''}${
              monthsRemainder > 0
                ? ` e ${monthsRemainder} mes${monthsRemainder > 1 ? 'es' : ''}`
                : ''
            }`
          : `${month} mes${month > 1 ? 'es' : ''}`


    return (<div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-4">
            <div className="rounded-full border border-gray-500 p-0.5">
                <Image src={companyLogo.url}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="logo da empresa" />
            </div>
            <div className="h-full w-[1px] bg-gray-800" />
        </div>

        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a href="#"
                    target="_blank"
                    className="text-gray-500 hover:text-emerald-500 transition-colors" >
                    @ {comanyName}
                </a>
                <h4 className="text-gray-300">{role}</h4>
                <span className="text-gray-500">
                    {formatDate} . {endDateFormated} . ({formattedDuration})
                </span>
                <div>
                    <div className=" text-gray-400">
                        <RichText content={description.raw} />
                    </div>
                </div>
                <p className="text-gray-400 text-sm mt-6 font-semibold">
                    Competências
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w[3350px] mb-8">
                    {technology.map((tech) => (
                        <TechBadge key={`${comanyName}-${tech.name}`} name={tech.name} />
                    ))}
                </div>
            </div>
        </div>
    </div>);
}

export default ExperienceItem;