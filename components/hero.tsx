"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })

      // Update URL hash without page jump
      window.history.pushState(null, "", href)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I&apos;m <span className="text-primary">Usama Hassan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Engineer specializing in React.js & MERN Stack
            </p>
          </div>

          <p className="max-w-[700px] text-muted-foreground">
            I build responsive, user-friendly web applications with a focus on performance, accessibility, and seamless
            user experience across devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn Profile">
              <a href="https://www.linkedin.com/in/usama-hassan-383b2b227" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="GitHub Profile">
              <a href="https://github.com/iamus4ma" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <Button variant="ghost" size="icon" asChild aria-label="Scroll Down">
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                <ArrowDown className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

