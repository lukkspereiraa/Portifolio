'use client'

import { Link } from "@/app/components/link";
import SectionTitule from "@/app/components/section-titele";
import { motion } from "framer-motion";
import { HiArrowNarrowLeft } from "react-icons/hi";

const PageIntro = () => {
    return (<section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
        <SectionTitule
            subTitulo="Projetos"
            titule="Meus projetos"
            calssName="text-center items-center [&>h3]:text-4xl" />

        <motion.div className="flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-gray-400 text-center max-w-[604px] my-6 text-sm sm:text-base">
                Aqui você pode ver alguns dos projetos que eu desenvolvi. Navegue e fique à vontade para explorar os projetos
            </p>
            <Link href='/'>
                <HiArrowNarrowLeft size={20} />
                Voltar para Home
            </ Link>
        </motion.div>

    </section>);
}

export default PageIntro;