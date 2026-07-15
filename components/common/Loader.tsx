"use client";

import { motion } from "framer-motion";

export default function Loader(){

return(

<div className="fixed inset-0 flex items-center justify-center bg-[#030712] z-[9999]">

<motion.div

animate={{

rotate:360

}}

transition={{

repeat:Infinity,

duration:1,

ease:"linear"

}}

className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent"

/>

</div>

)

}