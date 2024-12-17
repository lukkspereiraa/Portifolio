import SetionTitule from "@/app/components/section-titele"
import KanwnTech from "./kanown-tech"
import { TbBrandNextjs } from "react-icons/tb"


const KanownTech = () => {
    return <section className="container py-16" >
        <SetionTitule subTitulo="competências" titule="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[64px]">
            {Array.from({ length: 8 }).map((index => (
                <KanwnTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Next.js',
                    shadowDate: true,
                    starData: "2024-06-01"
                }} />
            )))}
        </div>
    </section>

}

export default KanownTech