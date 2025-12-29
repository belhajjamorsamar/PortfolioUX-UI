"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectProps {
  title: string
  year: string
  type: string
  description: string
  color: string
  image: string
  onClick: () => void
}

export function ProjectCard({ title, year, type, description, color, image, onClick }: ProjectProps) {
  return (
    <motion.div whileHover={{ y: -10 }} className="group relative cursor-pointer" onClick={onClick}>
      <div
        className={`relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-all group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.3)]`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-black/20 to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white p-3 rounded-full text-primary">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2 px-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
            {type} • {year}
          </span>
        </div>
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
