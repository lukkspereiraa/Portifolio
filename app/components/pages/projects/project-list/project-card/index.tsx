import Image from "next/image";
import imagem from "../../../../../../public/images/projects/imagemProjcts.png"
const ProjectCard = () => {
    return ( <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
        <div className="w-full h-48 overflow-hidden">
            <Image 
            alt="iamgem do projeto"
            width={380}
            height={320}
            src={imagem}
            unoptimized
            className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
            />
        </div>
        <div className="flex-1 flex flex-col p-8">
            <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
                projeto
            </strong>
            <p className="mt-2 text-gray-400 line-clamp-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellendus suscipit facere voluptate quam blanditiis obcaecati, quisquam animi illum voluptatum nobis esse m
            </p>
            <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
                java, cobol, c#, c++
            </span>
        </div>
    </div> );
}
 
export default ProjectCard;