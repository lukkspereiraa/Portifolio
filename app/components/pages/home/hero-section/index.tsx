import Button from "@/app/components/button"
import { TechBadge } from "@/app/components/techBadge"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'

import { TbBrandGithub, TbBrandLinkedin, TbBrandInstagram, TbBrandWhatsapp } from 'react-icons/tb'
const MOCK_CONACTS = [
    {
        href: 'https://github.com/lukkspereiraa',
        icons: <TbBrandGithub />
    },
    {
        href: 'https://www.linkedin.com/in/lucas-pereira-0b035b241/',
        icons: <TbBrandLinkedin />
    },
    {
        href: 'https://www.instagram.com/lukks_pereiraa/',
        icons: <TbBrandInstagram />
    },
    {
        href: 'https://wa.me/+5588998177661',
        icons: <TbBrandWhatsapp />
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">
                        Ola! Meu nome é
                    </p>
                    <h2 className="font-medium text-4xl mt-2" >
                        Lucas Pereira
                    </h2>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                        Sou Lucas Pereira, e desenvolvedor apaixonado por criar soluções digitais inovadoras. Com experiência sólida em desenvolvimento front-end e back-end
                        Meu foco está em projetar interfaces que aliam estética e funcionalidade, sempre buscando entregar experiências impactantes aos usuários. Além disso, estou constantemente explorando novas ferramentas e tendências para oferecer soluções técnicas eficientes e criativas. Estou aberto a desafios que me permitam crescer e contribuir para projetos transformadores.
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge
                                name='Next.js'
                                key={index} />
                        ))}
                    </div>
                    <div className="sm:gap-5 flex sm:items-center flex-col sm:flex-row mt-6 lg:mt-10">
                        <Button className="shadow-button w-max">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONACTS.map((contact, index) => (
                                <a href={contact.href}
                                    key={`contact-${index}`}
                                    className="hover:text-gray-100 transition-colors"
                                    target="_blank">{contact.icons}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    src='/images/profile-pic.jpg'
                    alt="foto de perfil"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}