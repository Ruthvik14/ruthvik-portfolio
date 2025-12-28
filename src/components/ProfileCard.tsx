"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

interface ProfileCardProps {
    data: {
        name: string
        role: string
        tagline: string
        location: string
        email: string
        socials: { github: string; linkedin: string; twitter: string }
    }
}

export default function ProfileCard({ data }: ProfileCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl space-y-6 backdrop-blur-sm"
        >
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">{data.name}</h2>
                <p className="text-emerald-500 font-medium">{data.role}</p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
                {data.tagline}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                    <Mail size={16} className="text-emerald-500" />
                    <span>{data.email}</span>
                </div>
                {/* <div className="flex items-center gap-3 text-zinc-400 text-sm">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>{data.location}</span>
                </div> */}
            </div>

            <div className="flex gap-4 pt-4">
                <SocialLink href={data.socials.github} icon={<Github size={20} />} />
                <SocialLink href={data.socials.linkedin} icon={<Linkedin size={20} />} />
                <SocialLink href={data.socials.twitter} icon={<Twitter size={20} />} />
            </div>
        </motion.div>
    )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            className="text-zinc-500 hover:text-emerald-500 transition-colors"
        >
            {icon}
        </a>
    )
}
