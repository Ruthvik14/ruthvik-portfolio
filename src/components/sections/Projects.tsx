"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

interface Project {
    name: string
    description: string
    highlights: string[]
    techStack: string[]
    image: string
    date?: string
    github: string
    live: string
}

const getTechLogo = (name: string) => {
    const skill = portfolioData.skills.find(s => s.name === name)
    return skill?.logo || `https://ui-avatars.com/api/?name=${name}&background=10b981&color=fff`
}

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold flex items-center gap-4">
                        <span className="text-emerald-500">Featured Projects</span>
                    </h2>
                    <p className="text-zinc-400 text-sm">Stuff I've built</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all flex flex-col items-center text-center space-y-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">
                                    {project.name}
                                </h3>
                                {project.date && (
                                    <p className="text-emerald-500 text-sm font-medium">
                                        {project.date}
                                    </p>
                                )}
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 py-4 border-t border-white/5 w-full">
                                {project.techStack.map(tech => (
                                    <div key={tech} className="relative group/icon">
                                        <img
                                            src={getTechLogo(tech)}
                                            alt={tech}
                                            className="w-8 h-8 object-contain filter grayscale group-hover/icon:grayscale-0 transition-all hover:scale-110"
                                            title={tech}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <a href={project.github} target="_blank" className="text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2 text-sm font-medium">
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" className="text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2 text-sm font-medium">
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
