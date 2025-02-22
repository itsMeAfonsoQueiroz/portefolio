import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { stack1, stack2, svgs } from "@/lib/data/stack";
import { Icon } from '@iconify/react'
import GradualSpacing from "@/components/magicui/gradual-spacing";

const ReviewCard = ({
    name,
    parent,
    svg,
    off
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 backdrop-blur-xl  cursor-pointer overflow-hidden rounded-xl border border-gray-100/30 p-4",
            )}
        >
            <div className="blur-lg opacity-20 scale-[6] -z-10 absolute top-0 left-0">
                {!off ? <Icon icon={svg} fontSize={34} /> : <img
                    className="min-h-2 min-w-2"
                    src={svgs[svg]}
                />}
            </div>

            <div className="flex flex-row items-center gap-2">
                {!off ? <Icon icon={svg} fontSize={34} /> : <img
                    className="h-9"
                    src={svgs[svg]}
                />}

                <div className="flex flex-col">
                    <figcaption className="text- font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium flex items-center justify-center text-white/70 w-max">
                        {parent}</p>
                </div>
            </div>
        </figure>
    );
};

export default function IconCloudDemo() {
    return (
        <div className="section h-[100svh] flex items-center justify-center overflow-hidden">
            <AuroraBackground>
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="relative">
                        {/* Centraliza o carrossel */}
                        <Marquee className="[--duration:45s]">
                            {stack1.map((review, index) => (
                                <ReviewCard parent={review.parent} key={index} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse className="[--duration:45s] mt-4">
                            {stack2.map((review, index) => (
                                <ReviewCard parent={review.parent} key={index} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="absolute bottom-10 right-10 flex items-end justify-end flex-col">
                    <GradualSpacing
                        className="font-display text-center text-4xl font-bold tracking-[-0.1em] tex-white md:text-7xl md:leading-[5rem] text-white"
                        text="Master Kira's Slaves"
                    />
                    <GradualSpacing
                        delay={0.5}
                        className="font-display text-center text-4xl font-bold tracking-[-0.1em] tex-white md:text-7xl md:leading-[5rem] text-white"
                        text="and Allies"
                    />
                </div>
            </AuroraBackground>
        </div>
    );
}

