"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4`}>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-xl font-bold gradient-text">
          TZ.
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
        >
          Let's Talk
        </Link>
      </motion.div>
    </nav>
  )
}
