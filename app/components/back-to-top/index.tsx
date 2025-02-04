'use client'

import { TbArrowNarrowUp } from "react-icons/tb";
import Button from "../button";
import { useCallback, useEffect, useState } from "react";


const BackToTop = () => {
    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const hendleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) {
            setShow(true)
        }
        if (show && window.scrollY <= 500) {
            setShow(false)
        }
    }, [show])

    useEffect(() => {
        window.addEventListener("scroll", hendleScroll)
        return () => window.removeEventListener("scroll", hendleScroll)
    }, [hendleScroll])

    return (<section className="fixed right-4  bottom-4 z-20">
        {show? (
        <Button  onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20">
            <TbArrowNarrowUp size={20} />
        </Button>): null}
    </section>);
}

export default BackToTop