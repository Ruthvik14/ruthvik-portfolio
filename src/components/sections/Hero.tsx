"use client"

import { useState, useEffect } from "react"
import { motion, MotionValue } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

interface HeroProps {
    characterProps: {
        x: MotionValue<string>
        y: MotionValue<string>
        scale: MotionValue<number>
    }
}

const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "AWS Specialist"
]

export default function Hero({ characterProps }: HeroProps) {
    const [currentRole, setCurrentRole] = useState("")
    const [roleIndex, setRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 500 : 2000

        const timer = setTimeout(() => {
            const currentFullRole = roles[roleIndex]

            if (!isDeleting && charIndex < currentFullRole.length) {
                // Typing
                setCurrentRole(currentFullRole.substring(0, charIndex + 1))
                setCharIndex(charIndex + 1)
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                setCurrentRole(currentFullRole.substring(0, charIndex - 1))
                setCharIndex(charIndex - 1)
            } else if (!isDeleting && charIndex === currentFullRole.length) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), pauseTime)
            } else if (isDeleting && charIndex === 0) {
                // Move to next role
                setIsDeleting(false)
                setRoleIndex((roleIndex + 1) % roles.length)
            }
        }, typeSpeed)

        return () => clearTimeout(timer)
    }, [charIndex, isDeleting, roleIndex])

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dot-white/[0.05]">
            {/* Background Code Snippet (Monospace) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <pre className="font-mono text-sm leading-relaxed max-w-2xl transform -rotate-12 translate-y-20">
                    {`<html>
  <head>
    <title>My Portfolio</title>
  </head>
  <body>
    <script>
      console.log("Hello World!");
      const dev = {
        name: "Ruthvik",
        passionate: true,
        skills: ["Java", "Next.js", "AWS"]
      };
    </script>
  </body>
</html>`}
                </pre>
            </div>

            {/* Main Content */}
            <div className="z-10 text-center space-y-8 px-4">
                <motion.div
                    style={{ x: characterProps.x, y: characterProps.y, scale: characterProps.scale }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-4"
                >
                    <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                    <img
                        src="/assets/character/character.png"
                        alt="Character"
                        className="w-full h-full object-contain relative z-20 drop-shadow-2xl"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=RK&background=10b981&color=fff&size=512";
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                        Hi, I'm <span className="text-emerald-500">{portfolioData.profile.name}</span>
                    </h1>
                    <div className="text-zinc-400 text-lg md:text-2xl font-medium tracking-wide h-8 md:h-12 flex items-center justify-center">
                        <span>I'm a </span>
                        <span className="text-emerald-500 ml-2 min-w-[200px] md:min-w-[400px] text-left">
                            {currentRole}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex items-center justify-center gap-6 pt-4"
                >
                    <SocialIcon href={portfolioData.profile.socials.github} icon={<Github />} />
                    <SocialIcon href={portfolioData.profile.socials.linkedin} icon={<Linkedin />} />
                    {/* <SocialIcon href={portfolioData.profile.socials.twitter} icon={<Twitter />} /> */}
                    <SocialIcon href={`mailto:${portfolioData.profile.email}`} icon={<Mail />} />
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
            >
                <span className="text-xs uppercase tracking-[0.2em] font-semibold">Scroll Down</span>
                <ChevronDown size={20} className="text-emerald-500" />
            </motion.div>
        </section>
    )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
        >
            {icon}
        </a>
    )
}
