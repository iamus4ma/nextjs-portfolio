"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from 'lucide-react'
import { useState } from "react"

const projects = [
  {
    title: "Royal Falcon Limousine",
    description: "A comprehensive web application built using the MERN stack for booking luxury services.",
    image: "https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?q=80&w=2071&auto=format&fit=crop",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
    liveLink: "https://royal-falcon-client.vercel.app/",
    githubLink: "",
    status: "Current",
  },
  {
    title: "Just Fashion Web Portals",
    description:
      "MERN stack web app with admin and brand portals. Admins manage site operations, while brands handle products, inventory, and sales.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
    liveLink: "https://admin.justfashionapp.com/",
    secondaryLink: "https://brand.justfashionapp.com/",
    githubLink: "",
    status: "Current",
  },
  {
    title: "USA-Estate",
    description:
      "MERN stack real estate platform with Google authentication via Firebase, allowing users to explore, list, and manage properties with advanced search.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    tags: ["MERN Stack", "React", "Firebase", "Google Auth"],
    liveLink: "https://usa-estate.onrender.com/",
    githubLink: "",
    status: "Completed",
  },
  {
    title: "Chat App",
    description: "A MERN stack chat application with Socket.io for real-time messaging and online user status.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN Stack", "Socket.io", "Real-time"],
    liveLink: "https://chat-kro.onrender.com",
    githubLink: "",
    status: "Completed",
  },
  {
    title: "Personal Portfolio",
    description: "Using React Js I created my personal portfolio to showcase my skills, projects and experience.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Portfolio"],
    liveLink: "https://usamahassan.vercel.app/",
    githubLink: "",
    status: "Completed",
  },
  {
    title: "CUI Course Folder",
    description: "A MERN Stack web application for managing and organizing teaching materials at University.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN Stack", "Education", "FYP"],
    liveLink: "",
    githubLink: "",
    status: "Completed",
  },
  {
    title: "Inventory Management System",
    description:
      "A MERN Stack system streamlining university inventory management for improved organization and accessibility.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["MERN Stack", "Inventory", "Management"],
    liveLink: "",
    githubLink: "",
    status: "Completed",
  },
]

export default function Projects() {
  // State to track images that failed to load
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const handleImageError = (title: string) => {
    setFailedImages(prev => ({
      ...prev,
      [title]: true
    }))
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-[800px]">
            Here are some of the projects I&apos;ve worked on. Each project showcases different skills and technologies
            I&apos;ve mastered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={failedImages[project.title] 
                    ? "https://placehold.co/600x400/3b82f6/ffffff?text=Project+Image" 
                    : project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  crossOrigin="anonymous"
                  loading="lazy"
                  onError={() => handleImageError(project.title)}
                />
                {project.status === "Current" && (
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full z-20">
                    Active
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.liveLink && (
                  <Button size="sm" variant="default" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.secondaryLink && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.secondaryLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Brand Portal
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}