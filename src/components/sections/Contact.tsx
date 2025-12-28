"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto text-center space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-5xl font-bold tracking-tight">Let's Get in <span className="text-emerald-500">Touch.</span></h2>
                    <p className="text-zinc-500 text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <a
                        href="mailto:ruthvik.kumar14@gmail.com"
                        className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-[#0a0a0a] rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all transform hover:-translate-y-1"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ruthvik-kumar-lakka/"
                        target="_blank"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-500 transition-all transform hover:-translate-y-1"
                    >
                        <MessageSquare size={20} />
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
