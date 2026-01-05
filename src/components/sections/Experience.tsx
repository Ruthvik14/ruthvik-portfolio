"use client"

import { motion } from "framer-motion"

interface ExperienceEntry {
    title: string
    org: string
    dates: string
    location?: string
    bullets: string[]
    techStack?: string[]
}

interface ExperienceGroup {
    type: string
    entries: ExperienceEntry[]
}

export default function Experience({ experience }: { experience: ExperienceGroup[] }) {
    return (
        <section id="experience" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-emerald-500">Experience</span>
                </h2>

                <div className="space-y-16">
                    {experience.map((group) => (
                        <div key={group.type} className="space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 border-b border-white/5 pb-2">
                                {group.type}
                            </h3>

                            <div className="space-y-10">
                                {group.entries.map((entry, idx) => (
                                    <div key={idx} className="relative pl-8 border-l border-emerald-500/30 space-y-4 group">
                                        <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#0a0a0a] border-2 border-emerald-500 rounded-full group-hover:scale-150 transition-transform" />

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h4 className="text-xl font-bold group-hover:text-emerald-500 transition-colors">
                                                {entry.title}
                                            </h4>
                                            <span className="text-sm font-semibold text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                {entry.dates}
                                            </span>
                                        </div>

                                        <p className="text-emerald-500/80 font-medium">
                                            {entry.org} {entry.location && `• ${entry.location}`}
                                        </p>

                                        <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
                                            {entry.bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>

                                        {entry.techStack && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {entry.techStack.map((tech) => (
                                                    <div key={tech} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/5 rounded-lg group-hover:border-emerald-500/20 transition-all">
                                                        <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-500 group-hover:text-emerald-500">
                                                            {tech}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
