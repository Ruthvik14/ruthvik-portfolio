"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface Project {
    name: string
    description: string
    highlights: string[]
    techStack: string[]
    image: string
    github: string
    live: string
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
                <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-emerald-500">04.</span> Selected Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col"
                        >
                            <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${project.name}&background=27272a&color=fff&size=512`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-8 space-y-6 flex-grow flex flex-col">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 flex items-center gap-4 mt-auto">
                                    <a href={project.github} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-500 transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-500 transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
