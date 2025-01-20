"use client";
import { motion } from "framer-motion";
import ReactFullpage from "@fullpage/react-fullpage";
import RetroGrid from "@/components/magicui/retro-grid";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import WordPullUp from "@/components/magicui/word-pull-up";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section6 from "@/components/section6";
import { useEffect, useState } from "react";

export default function Home() {

  const [api, setApi] = useState();

  return (
    <div className="w-full h-[100svh] relative">
      <div className="absolute z-50 m-3 bottom-0 lg:top-1/2  lg:bottom-1/2 lg:right-0 ">
        <div className="gap-0.5 flex flex-row lg:flex-col">
          {[...Array(6)].map((_, index) => (
            <button onClick={() => api && api.moveTo(index + 1)} className={`${api && index === api.getActiveSection() ? "bg-white" : "bg-white/40"} h-4 w-4 rounded   border border-black/20`}>{api && api.getActiveSection().index}</button>
          ))}
        </div>
      </div>
      <ReactFullpage
        scrollingSpeed={600}
        render={({ state, fullpageApi }) => {
          setApi(fullpageApi);
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section h-full">
                <div className="relative h-[100svh] w-full bg-purple-600 flex items-center justify-center overflow-hidden">
  <RetroGrid />
  <motion.div
    initial={{ translateX: -600 }}
    whileInView={{ translateX: 0 }}
    transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 20 }}
    className="absolute h-full w-full hidden lg:flex">
  </motion.div>
  <div className="flex items-center justify-center w-full h-full relative">
    <div
      className="glassmorphic-bg flex flex-col items-center justify-center rounded-lg p-16 md:p-24 lg:p-32 shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
      <WordPullUp
        className="text-6xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-white"
        words="Hey, I'm Afonso Queiroz"
      />
      <p className="text-lg text-white/80 text-center mt-4">
        Crafting solutions with creativity and precision
      </p>
    </div>
    <div className="absolute bottom-8 flex items-center justify-center">
      <button
        onClick={() => {
          fullpageApi.moveSectionDown();
        }}
        className="border-2 border-white/50 h-12 rounded-full w-7 z-50 animate-pulse">
        <div className="h-full w-full relative p-1.5">
          <div className="absolute h-3 w-3 bg-white rounded-full animate-bounce bottom-1.5" />
        </div>
      </button>
    </div>
  </div>
</div>

                </div>
                <div className="section h-full">
                  <div id="second" className="relative h-[100svh] w-full bg-indigo-500 flex items-center justify-center overflow-hidden">
                    <DotPattern
                      className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]",
                      )}
                    />

                    <motion.div
                      initial={{ translateY: 600 }}
                      whileInView={{ translateY: 200 }}
                      transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                      className="w-96 h-full translate-y-1/3 rounded-full border-[55px] absolute flex border-indigo-700" />
                    <motion.div
                      initial={{ translateY: 600 }}
                      whileInView={{ translateY: 200 }}
                      transition={{ delay: 0, duration: 1, type: "spring", stiffness: 20 }}
                      className="w-96 h-full translate-y-1/3 rounded-full border-[55px] absolute flex border-indigo-700 blur-2xl" />
                    <div className="w-full h-full absolute flex items-center">
                      <VelocityScroll
                        text="A versatile Full Stack Developer and experienced System Administrator, adept at designing, building, and maintaining robust systems and applications."
                        default_velocity={1}
                        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                      />
                    </div>
                  </div>

                </div>
                <Section3 />
                <Section4 />
                <Section6 />
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </div>
  );
}
