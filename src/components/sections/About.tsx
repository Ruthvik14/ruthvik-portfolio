"use client"

import { motion } from "framer-motion"

export default function About({ content }: { content: string }) {
    return (
        <section id="about" className="scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-emerald-500">01.</span> About Me
                </h2>
                <div className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                    {content}
                </div>
            </motion.div>
        </section>
    )
}
