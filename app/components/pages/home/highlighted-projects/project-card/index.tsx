import Image from "next/image"
import imageProjct from "../../../../../../public/images/projects/imagemProjcts.png"

const ProjectsCard = () => {
    return <div>
        <div>
            <Image
                width={420}
                height={304} src={imageProjct}
                alt="foto do projeto nome" />
        </div>
    </div>
}

export default ProjectsCard