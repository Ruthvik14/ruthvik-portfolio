"use client"

import { motion } from "framer-motion"

interface Skill {
    name: string
    logo: string
}

export default function Skills({ skills }: { skills: Skill[] }) {
    return (
        <section id="skills" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold flex items-center gap-4">
                        <span className="text-emerald-500"> Skills I Bring to the Table</span>
                    </h2>
                    <p className="text-zinc-400 text-sm">Technologies I work with</p>
                </div>

                {/* Grid of all skills */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.02 }}
                            className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-12 h-12 object-contain mb-3 filter grayscale group-hover:grayscale-0 transition-all group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name[0]}&background=10b981&color=fff&size=128`;
                                }}
                            />
                            <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
