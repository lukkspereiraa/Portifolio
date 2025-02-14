'use client'

import { HiArrowNarrowRight } from "react-icons/hi";
import SectionTitule from "../section-titele";
import Button from "../button";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";



const contatcFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContatcFormData = z.infer<typeof contatcFormSchema>

const ContatcForm = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitted }
    } = useForm<ContatcFormData>({
        resolver: zodResolver(contatcFormSchema)
    })

    const onSubmit = async (data: ContatcFormData) => {
        try {
            await axios.post('/api/contact', data)
            toast.success("Mensagem enviada com sucesso!")
            reset()
        } catch (error) {
            toast.error("Ocorreu um erro ao enviar a mensagem, tente novamente.")
        }
    }


    return <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
        <div className="w-full max-w-[420px] mx-auto">
            <SectionTitule
                subTitulo="contato"
                titule="Vamos trabalhar juntos? Entre em contato"
                calssName="items-center text-center"
            />

            <motion.form className="mt-12 w-ful flex flex-col gap-4" action=""

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "
                    {...register('name')} />

                <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "
                    {...register('email')} />

                <textarea
                    placeholder="Mensagem"
                    className="resize-none w-full h-[132px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 "
                    maxLength={500}
                    {...register('message')} />

                <Button className="h-max mx-auto mt-6 shadow-button" disabled={isSubmitted}>
                    Enviar mensagem
                    <HiArrowNarrowRight size={18} />
                </Button>
            </motion.form>
        </div>
    </section >;
}
export default ContatcForm;