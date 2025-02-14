'use client'

import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion"

type SectionTituleProps = {
    titule: string,
    subTitulo: string,
    calssName?: string
}

const SectionTitule = ({
    titule,
    subTitulo,
    calssName
}: SectionTituleProps) => {
    const animaition = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return <div className={cn("flex flex-col gap-4", calssName)}>
        <motion.span className="font-mono text-sm text-emerald-400"
            {...animaition}
            transition={{ duration: 0.5 }}
        >
            {`.../${subTitulo}`}
        </motion.span>
        <motion.h3 className="text-3xl font-medium"
            {...animaition}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {titule}
        </motion.h3>
    </div>
}

export default SectionTitule