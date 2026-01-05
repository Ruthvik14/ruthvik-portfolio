"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "experience", "projects"]
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    {portfolioData.profile.name.split(' ')[0]} <span className="text-emerald-500">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-emerald-500 ${activeSection === link.href.substring(1) ? "text-emerald-500" : "text-zinc-400"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* <a
                        href="/Ruthvik_Lakka_Java.pdf"
                        className="px-4 py-2 bg-emerald-500 text-[#0a0a0a] rounded-lg text-sm font-bold hover:bg-emerald-400 transition-colors"
                    >
                        Resume
                    </a> */}
                </div>

            </div>
        </nav>
    )
}
