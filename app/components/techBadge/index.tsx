'use client'

import {motion } from "framer-motion"
import { ComponentProps } from "react";

type techBadgeProps  = ComponentProps<typeof motion.span> &{
 name: String;
};
export const TechBadge = ({name, ...props}: techBadgeProps) => {
    return ( 
        <motion.samp className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg" 
            {...props}
            >    
            {name}
        </motion.samp>
    );
}