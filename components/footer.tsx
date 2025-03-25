import { Github, Heart, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/usama-hassan-383b2b227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/iamus4ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:usama.0.vip@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Usama Hassan. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by iamus4ma
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

