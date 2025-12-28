"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import ProfileCard from "@/components/ProfileCard"
import { portfolioData } from "@/data/portfolio"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Character movement logic: Hero -> Left Sticky
  // Hero is roughly the first 100vh.
  const characterX = useTransform(scrollYProgress, [0, 0.15], ["0%", "-40%"])
  const characterY = useTransform(scrollYProgress, [0, 0.15], ["0%", "50px"])
  const characterScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8])

  return (
    <main className="bg-[#0a0a0a] text-white selection:bg-emerald-500/30 min-h-screen font-sans" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <Hero characterProps={{ x: characterX, y: characterY, scale: characterScale }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative flex flex-col lg:flex-row gap-12">
        {/* Left Sticky Column (Desktop only) */}
        <aside className="lg:w-1/3 lg:sticky lg:top-32 lg:h-[calc(100vh-200px)] flex flex-col">
          <ProfileCard data={portfolioData.profile} />
        </aside>

        {/* Right Content Sections */}
        <div className="lg:w-2/3 space-y-32">
          <About content={portfolioData.about} />
          <Skills skills={portfolioData.skills} />
          <Experience experience={portfolioData.experience} />
          <Projects projects={portfolioData.projects} />
          <Contact />
        </div>
      </div>

      <footer className="py-20 text-center border-t border-white/5 text-zinc-500">
        <p>© 2025 {portfolioData.profile.name}. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  )
}
