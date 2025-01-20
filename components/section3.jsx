"use client"
import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion"
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import Link from "next/link";
import BlurIn from "./magicui/blur-in"
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function IconCloudDemo() {
    return (
        <div className="section h-full">
            <div className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-purple-500">
                <div className="absolute top-0 h-full w-full z-10 hidden lg:flex items-center justify-center  ">
                </div>
                <motion.div
                    whileInView={{ translateY: 0 }}
                    initial={{ translateY: -130 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    className="lg:hidden flex absolute  top-0" >
                </motion.div>
                <motion.div
                    whileInView={{ translateY: 20 }}
                    initial={{ translateY: 150 }}
                    transition={{ duration: 1, type: "spring", stiffness: 20 }}
                    className="lg:hidden flex absolute  bottom-0">
                </motion.div>
                <div className="flex w-max items-end flex-col justify-end absolute z-50 top-0 left-0 m-10">
                    <GradualSpacing
                        className="font-display text-center text-4xl font-bold tracking-[-0.1em]  tex-white md:text-7xl md:leading-[5rem]  text-black"
                        text="My projects"
                    />
                </div>
                <div className="w-11/12 lg:w-3/5 flex  lg:items-start items-center lg:justify-center  lg:-translate-y-12 h-full  z-50  ">
                    <TabsDemo />
                </div>
            </div>
        </div>
    );
}


const styles = {
    glassmorphicButton: {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        color: '#fff',
        fontSize: '16px',
    },
    glassmorphicButtonHover: {
        background: 'rgba(255, 255, 255, 0.25)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    },
};

function TabsDemo() {
    return (
        <div className="h-[20rem] md:h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center lg:my-40 lg:translate-y-8">
            <Tabs
                tabs={stack.map((v) => {
                    return {
                        title: v.name,
                        value: v.name,
                        content: (
                            <div className="w-full overflow-hidden relative rounded-xl text-white text-xl md:text-4xl font-bold h-52 lg:h-full lg:p-10 lg:bg-purple-400 lg:shadow-purple-400 lg:shadow-[0px_0px_25px_5px]">
                                <p className="lg:block hidden">{v.name}</p>
                                <DummyContent path={v.url} url={v.images[0]} />
                            </div>
                        ),
                    };
                })}
                containerClassName="flex flex-wrap gap-4 justify-center items-center w-full"
                tabClassName=""
                renderTab={({ tab, isSelected }) => (
                    <div
                        style={{
                            ...styles.glassmorphicButton,
                            ...(isSelected ? styles.glassmorphicButtonHover : {}),
                        }}
                        className="text-center"
                    >
                        {tab.title}
                    </div>
                )}
            />
        </div>
    );
}


const DummyContent = ({ url, path }) => {
    return (
        <Link href={`${path}`}>
            <img
                src={url}
                alt="dummy image"
                className="object-cover object-left-top  absolute inset-x-0  rounded-xl mx-auto  lg:w-[90%] lg:mt-5"
            />
        </Link>
    );
};


const stack = [{
    "name": "11TM",
    "description": "Seamlessly integrate AI with personalized templates, cluster management, and secure API key generation. 🚀 Revolutionize your workflow effortlessly!",
    "tags": "next13 react postgresql zod mistar-ai huggingface ai",
    "url": "https://www.11tm.pt",
    "images": [
        "./projects/11tm.png",
    ],
    "md": 11
},
{
    "name": "Atlantico",
    "description": "🚀 Unleash your creativity with our free text-to-image web app! 💬✨ Join 2500+ users and explore 20,000+ images. Exciting new features include reacting to others' creations and improved performance. Transform words into visuals effortlessly – join for free on our website! 🎨🌟 #TextToImage #CreativeFreedom",
    "tags": "next13 react firebase huggingface ai",
    "url": "/",
    "images": [
        "./projects/atlantico.png",
    ],
    "md": 2
},
{
    "name": "CBF",
    "description": "📚 Dive into collaboration with Schooler – the ultimate document-sharing app for teachers and students! 🚀✨ Explore member management, security rules, and a sleek search feature. Enjoy the flexibility of white and dark modes. Elevate your learning journey with Schooler! 💻📄",
    "tags": "next13 neon prisma shadcn posgresql",
    "url": "/",
    "images": [
        "./projects/cbf.png",

    ],
    "md": 3
},
{
    "name": "Enigma",
    "description": "🌐 Dive into diagram magic with Neoflow! 🚀✨ Powered by AI, it effortlessly creates stunning class, flow, and sequence diagrams. Plus, enjoy team management and gorgeous design! 💻📊 #Neoflow #DiagramCreation ",
    "tags": "next13 prisma shadcn CockroachDB llama mermaidJs firework_ai excalidraw",
    "url": "/",
    "images": [
        "./projects/enigma.png",
    ],
    "md": 4
},
{
    "name": "Master Group",
    "url": "http://mangahook.vercel.app/",
    "description": "Dive into a world of manga magic with our free reading app! 📚🌟 Inspired by seamless design, it offers limitless creativity. Explore manga effortlessly, anytime, anywhere! 🚀",
    "tags": "next13 express scraping manga",
    "images": [
        "/",
    ],
    "md": 10
},
{
    "name": "Noah Pombas",
    "description": "✨ Introducing Story Ai: Your AI-powered creative companion! 🚀📖 Transform ideas into stories effortlessly. 🌈 Simply choose your theme, pages, and genre to get a delightful and optimistic story. 🎉 Unleash creativity with ease! ✨",
    "tags": "next13 react firebase stable_diffusion llama lahuggingface ai",
    "url": "https://www.noahpombas.ch",
    "images": [
        "./projects/noahpombas.png",
    ],
    "md": 1
},
{
    "name": "Saúde Digital",
    "description": "📖 Manga Hook API: Your go-to documentation for fetching manga data effortlessly! 🔍🚀 Explore, search, and discover manga narratives seamlessly. #MangaHookAPI #OpenSourceLibrary",
    "tags": "astro documentation SSG",
    "url": "/",
    "images": [
        "./projects/saudedigital.png",

    ],
    "md": 5
},
{
    "name": "Voxville",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "https://www.voxville.net/voxville/about.html",
    "images": [
        "./projects/voxville.png",

    ]
},
{
    "name": "Cloudy",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "/",
    "images": [
        "./projects/cloudy.png",

    ]
},
{
    "name": "Árvore do Conhecimento",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "https://www.arvoreconhecimento.pt",
    "images": [
        "./projects/ac.png",
    ]
},
{
    "name": "LAYA Host",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "/",
    "images": [
        "./projects/laya.png",
    ]
},
{
    "name": "Vinagre's",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "https://padaria.afonsoqueiroz.pt",
    "images": [
        "./projects/vinagres.png",
    ]
},
{
    "name": "Air Suite",
    "description": "Revolutionize creativity with our React app! 🚀 Infused with Adobe XD vibes, it's the ultimate blend of style and functionality. Effortlessly unleash ideas! ✨",
    "tags": "react nextjs design ui",
    "url": "/",
    "images": [
        "./projects/airsuite.png",
    ]
},
]

