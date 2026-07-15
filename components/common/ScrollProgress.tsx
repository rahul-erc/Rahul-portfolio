"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

const {scrollYProgress}=useScroll();

return(

<motion.div

style={{
scaleX:scrollYProgress
}}

className="fixed left-0 top-0 h-1 origin-left bg-blue-500 z-[9999] w-full"

/>

)

}