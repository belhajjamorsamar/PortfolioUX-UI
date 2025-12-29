"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Briefcase, Zap, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function CaseStudyModal({ project, isOpen, onClose }: { project: any; isOpen: boolean; onClose: () => void }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.95 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto flex-1 p-6 md:p-12 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  {project.type}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h2>
              </div>

              {/* Banner */}
              <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-secondary/30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar size={16} />
                    <span className="text-xs font-bold uppercase">Year</span>
                  </div>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase size={16} />
                    <span className="text-xs font-bold uppercase">Role</span>
                  </div>
                  <p className="font-medium">Lead UI/UX Designer</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <Zap size={16} />
                    <span className="text-xs font-bold uppercase">Tools</span>
                  </div>
                  <p className="font-medium">Figma, Adobe XD</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase">Goal</span>
                  </div>
                  <p className="font-medium">Engagement</p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <section className="space-y-4">
                    <h3 className="text-2xl font-bold">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </section>
                  <section className="space-y-4">
                    <h3 className="text-2xl font-bold">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transforming complex functional requirements into a seamless, human-centered experience while
                      maintaining a modern aesthetic that resonates with the target audience.
                    </p>
                  </section>
                  <section className="space-y-4">
                    <h3 className="text-2xl font-bold">Our Process</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {["User Research", "Wireframing", "High-Fidelity UI", "Prototyping"].map((step) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border"
                        >
                          <CheckCircle2 className="text-primary" size={18} />
                          <span className="font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-primary text-white space-y-4">
                    <h4 className="text-xl font-bold">Key Outcome</h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      The final design resulted in a 40% increase in user engagement and positive feedback regarding the
                      visual clarity and ease of navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
