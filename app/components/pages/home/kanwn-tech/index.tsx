'use client'

import SetionTitule from "@/app/components/section-titele"
import KanwnTech from "./kanown-tech"
import { knownTech as IKnownTech} from "@/app/types/projects"
import { motion } from "framer-motion"

type KanownTechProps ={
    techs: IKnownTech []
}

const KanownTech = ({techs}: KanownTechProps) => {
    return <section className="container py-16" >
        <SetionTitule subTitulo="competências" titule="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[64px]">
            {
                techs?.map((tech, i) => (
                    <motion.div key={tech.name} 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={{duration: 0.15, delay: i * 0.15}}
                    >
                        <KanwnTech tech={tech} />
                    </motion.div>
                    
                ))
            }
        </div>
    </section>

}

export default KanownTech