"use client"

import Button from "@/app/components/button"
import { CmsIcon } from "@/app/components/cms-icon"
import { TechBadge } from "@/app/components/techBadge"
import { HomePageInfo } from "@/app/types/page-info"
import { RichText } from "@graphcms/rich-text-react-renderer"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'

type HeroSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }
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

                    {/* introdução */}
                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    {/* tecnologias */}
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technology.map((tech, index) => (
                            <TechBadge
                                key={`tech-${index}`}
                                name={tech.name}
                            />
                        ))}
                    </div>

                    <div className="sm:gap-5 flex sm:items-center flex-col sm:flex-row mt-6 lg:mt-10">
                        <Button className="shadow-button w-max" onClick={handleContact} >
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        {/* contatos */}
                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {homeInfo.social.map((contact, index) => (
                                <a
                                    key={`contact-${index}`}
                                    href={contact.url}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors "
                                >
                                    <CmsIcon 
                                    icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* foto de perfil */}
                <Image
                    width={420}
                    height={404}
                    src={homeInfo.profilePickter.url}
                    alt="foto de perfil"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}