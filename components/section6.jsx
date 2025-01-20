"use client";
import { motion } from "framer-motion";
import Particles from "@/components/magicui/particles";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Link from "next/link";

export default function IconCloudDemo() {
    return (
        <div className="section h-full relative">
            <motion.div
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 20 }}

                className="absolute mx-auto p-10 flex items-center justify-center h-full w-full flex-col space-y-3">
                <Link href={"https://github.com/itsMeAfonsoQueiroz/"}>
                    <div
                        className="w-72 bg-white/10 backdrop-blur-lg border border-white/30 text-white py-3 rounded-xl shadow-lg flex items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out hover:bg-white/30">
                        Github
                    </div>
                </Link>
                <Link href={"https://www.linkedin.com/in/afonso-queiroz-7a515b316/"}>
                    <div
                        className="w-72 bg-white/10 backdrop-blur-lg border border-white/30 text-white py-3 rounded-xl shadow-lg flex items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out hover:bg-white/30">
                        LinkedIn
                    </div>
                </Link>
                <Link href={"https://www.instagram.com/ahrmqrz/"}>
                    <div
                        className="w-72 bg-white/10 backdrop-blur-lg border border-white/30 text-white py-3 rounded-xl shadow-lg flex items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out hover:bg-white/30">
                        Instagram
                    </div>
                </Link>
                <Link href={"https://www.nexweb.me"}>
                    <div
                        className="w-72 bg-white/10 backdrop-blur-lg border border-white/30 text-white py-3 rounded-xl shadow-lg flex items-center justify-center text-lg font-bold transition-all duration-300 ease-in-out hover:bg-white/30">
                        NexWeb Solutions
                    </div>
                </Link>
            </motion.div>
            <div className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-sky-500 -z-50 ">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    src="https://blog.mozilla.org/wp-content/blogs.dir/278/files/2023/04/ai.png" className="h-full w-full -z-10 absolute bottom-0 object-cover " alt="Cloud Image" />
                <div className="absolute mx-auto p-10 flex items-end justify-start h-full w-full flex-col ">
                    <div className='w-max flex items-start justify-start flex-col z-10 translate-y-10 '>
                        <GradualSpacing
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em] tex-white md:text-7xl md:leading-[5rem] text-white opacity-30 blur"
                            text="Tell my about your next project :)"
                        />
                    </div>
                </div>
                <div className="absolute mx-auto p-10 flex items-end justify-start h-full w-full flex-col ">
                    <div className='w-max flex items-start justify-start flex-col z-10 translate-y-10'>
                        <GradualSpacing
                            className="font-display text-center text-4xl font-bold tracking-[-0.1em] tex-white md:text-7xl md:leading-[5rem] text-white"
                            text="Tell my about your next project :)"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
