"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { CaseStudyModal } from "@/components/case-study-modal"
import { useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Palette,
  Code2,
  Users,
  Layout,
  Smartphone,
  PenTool,
} from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Mammut Web Redesign",
    year: "2025",
    type: "Redesign",
    description: "Complete UI/UX overhaul for Mammut Web Solution, enhancing navigation and visual clarity.",
    image: "/1.png",
    color: "#EC4899",
    category: "Redesign",
    link: "https://drive.google.com/drive/folders/1RbK_HZZgEyBTsPAE079tlRWFlmn9G-vd",
  },
  {
    id: 2,
    title: "Delfi Learning App",
    year: "2024",
    type: "Mobile App",
    description: "Gamified French-learning mobile experience designed specifically for children.",
    image: "/5.png",
    color: "#A78BFA",
    category: "Mobile Apps",
    link: "https://drive.google.com/drive/folders/1uU_LR_mTwHR68Tj_G-VvdVeJ5pUtHdkl",
  },
  {
    id: 3,
    title: "Commix Agency",
    year: "2024",
    type: "Web Design",
    description: "Premium agency landing page with bold typography and high-end motion design.",
    image: "/33.png",
    color: "#FB7185",
    category: "Web Design",
    // pas encore de lien
  },
  {
    id: 4,
    title: "Event Ticketing App",
    year: "2024",
    type: "Mobile App",
    description: "Discovery-first ticketing platform with advanced filtering and seamless checkout.",
    image: "/44.png",
    color: "#38BDF8",
    category: "Mobile Apps",
    link: "https://www.figma.com/design/gaKACOqW3THNewSIQGFTjL/Event-Booking-App?node-id=0-1&t=P75YBiXcBQayn7M8-1",
  },
  {
    id: 5,
    title: "Charity Connect",
    year: "2025",
    type: "Platform",
    description: "A bridge between donors and charitable associations featuring complex admin dashboards.",
    image: "/55.png",
    color: "#FDBA74",
    category: "Platforms",
  },
  {
    id: 6,
    title: "Industrial Stock Manager",
    year: "2024",
    type: "Enterprise",
    description: "Real-time robot stock management system with e-commerce synchronization.",
    image: "/66.png",
    color: "#EC4899",
    category: "Enterprise Systems",
  },
];


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -top-[20%] -left-[10%] w-[60%] aspect-square rounded-full bg-primary opacity-20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[50%] aspect-square rounded-full bg-accent opacity-20 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/20 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for internships
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              UI/UX Designer crafting <span className="gradient-text">beautiful</span> digital experiences.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Master’s student in UX/UI Design. I design human-centered interfaces blending creativity, usability, and
              modern UI craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </button>
             <a
  href="/CV_Takoua_Zrelli.pdf"
  download
  className="bg-white text-foreground px-8 py-4 rounded-full font-bold border border-border hover:bg-secondary/50 transition-colors flex items-center gap-2"
>
  Download CV <Download size={20} />
</a>
            </div>
           <div className="flex items-center gap-6 pt-4">
  <motion.a
    href="https://www.linkedin.com/in/takoi-zrelli-b5914827a/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, color: "#EC4899" }}
    className="text-muted-foreground transition-colors"
  >
    <Linkedin size={24} />
  </motion.a>

  <motion.a
    href="mailto:Takoi0zrelli@gmail.com"
    whileHover={{ y: -5, color: "#EC4899" }}
    className="text-muted-foreground transition-colors"
  >
    <Mail size={24} />
  </motion.a>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-[4rem] rotate-3 shadow-2xl">
              <Image src="/touta.jfif" alt="Takoua Zrelli" fill className="object-cover" />
            </div>
            {/* Decorative UI elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-6 -right-6 z-20 glass p-4 rounded-3xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Palette size={20} />
              </div>
              <span className="font-bold text-sm">Visual Art</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 glass p-4 rounded-3xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Code2 size={20} />
              </div>
              <span className="font-bold text-sm">Frontend Dev</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">The Designer</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Designing with empathy, building with precision.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Takoua Zrelli is a UI/UX Designer and Master’s student in UX/UI Design (2nd year). I am passionate about
                designing user-centered digital experiences and creating visually appealing, functional interfaces. With
                technical knowledge in front-end tools, I bridge the gap between design and development effortlessly.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <MapPin size={16} /> Location
                  </div>
                  <p className="text-sm">Sousse, Tunisia</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Mail size={16} /> Email
                  </div>
                  <p className="text-sm">takoiOzrelli@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "UX Research", icon: Users, bg: "bg-primary/10", color: "text-primary" },
                { title: "UI Design", icon: Layout, bg: "bg-accent/10", color: "text-accent" },
                { title: "Prototyping", icon: Smartphone, bg: "bg-blue-100", color: "text-blue-500" },
                { title: "Interaction", icon: PenTool, bg: "bg-purple-100", color: "text-purple-500" },
              ].map((skill, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] glass hover:scale-105 transition-transform space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center`}>
                    <skill.icon size={24} />
                  </div>
                  <h4 className="font-bold">{skill.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Portfolio</h2>
              <h3 className="text-4xl md:text-6xl font-bold">Selected Works</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Web Design", "Mobile Apps", "Redesign", "Platforms", "Enterprise Systems"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-white border border-border hover:bg-secondary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {filteredProjects.map((project) => (
    <ProjectCard
      key={project.id}
      {...project}
      onClick={() => {
        if (project.link) {
          window.open(project.link, "_blank");
        } else {
          setSelectedProject(project);
        }
      }}
    />
  ))}
</div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Journey</h2>
            <h3 className="text-4xl font-bold">Experience & Growth</h3>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2025",
                company: "Mammut Web Solution",
                role: "Summer Internship",
                desc: "Complete UI/UX overhaul to enhance user interface and experience. Analyzed existing friction points, created high-fidelity wireframes, and implemented front-end improvements following best UX/UI practices with user testing iterations.",
              },
              {
                year: "2024",
                company: "MAS Group",
                role: "UI/UX Developer Intern",
                desc: "Designed an industrial robot stock management dashboard with real-time data sync.",
              },
              {
                year: "2023",
                company: "SwiftCode",
                role: "Frontend Developer Intern",
                desc: "Developed e-commerce solutions with a focus on intuitive UI implementation.",
              },
              {
                year: "2023",
                company: "InfoSoft",
                role: "App Design Intern",
                desc: "Created a touch-friendly POS application interface for enterprise users.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[100px_1fr] gap-8 group"
              >
                <span className="text-xl font-black text-primary/20 group-hover:text-primary transition-colors">
                  {exp.year}
                </span>
                <div className="glass p-8 rounded-3xl space-y-2 group-hover:scale-[1.02] transition-transform">
                  <h4 className="text-xl font-bold">
                    {exp.role} @ <span className="text-primary">{exp.company}</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-accent opacity-10 blur-[80px] -z-10"
        />
        <div className="max-w-6xl mx-auto glass p-8 md:p-16 rounded-[4rem] shadow-2xl space-y-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">
                Let's create something <span className="gradient-text">beautiful</span> together.
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a project or opportunity? I'm always down to chat about design and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Email me at</p>
                    <p className="font-bold">takoiOzrelli@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Based in</p>
                    <p className="font-bold">Sousse, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-secondary/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-hidden"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-secondary/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-hidden"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-secondary/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-hidden resize-none"
              ></textarea>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-medium text-muted-foreground">© 2025 Takoua Zrelli. Crafted with passion.</p>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Behance
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Dribbble
            </Link>
          </div>
        </div>
      </footer>

      <CaseStudyModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}
