'use client'

import { TbArrowNarrowUp } from "react-icons/tb";
import Button from "../button";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


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

    return (<AnimatePresence>
        {show && <motion.div className="fixed right-4  bottom-4 z-20"
            initial={{ opacity: 0, right: -10 }}
            animate={{ opacity: 1, right: 18 }}
            exit={{ opacity: 0, right: -10 }} 
        >
            {(
                <Button onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20">
                    <TbArrowNarrowUp size={20} />
                </Button>)}
        </motion.div>}
    </AnimatePresence>);
}

export default BackToTop