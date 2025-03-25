import { Button } from "@/components/ui/button"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I&apos;m a passionate Frontend Developer with expertise in React.js and the MERN stack. I specialize in
              building responsive, user-friendly web applications with a focus on performance, accessibility, and
              seamless user experience across devices.
            </p>
            <p className="text-lg">
              With experience working at companies like ProSoftware Technologies and SimplexMed, I&apos;ve developed a
              strong foundation in frontend development and full-stack web applications.
            </p>
            <p className="text-lg">
              I graduated with a BS in Software Engineering from COMSATS University Islamabad, Sahiwal Campus, and
              I&apos;m constantly learning and improving my skills to stay up-to-date with the latest technologies and
              best practices.
            </p>

            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Date of Birth</p>
                  <p className="text-muted-foreground">February 7, 2000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(+92) 3414958199</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">usama.0.vip@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

