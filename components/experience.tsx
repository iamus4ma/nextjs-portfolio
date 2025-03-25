import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "ProSoftware Technologies",
    location: "Rawalpindi, Pakistan",
    period: "December 2024 - Present",
    description:
      "Working as a Frontend Developer, designing and developing user-friendly web interfaces with a focus on performance, accessibility, and seamless user experience across devices.",
    current: true,
  },
  {
    title: "React JS Developer",
    company: "SimplexMed",
    location: "Abbottabad District, Khyber Pakhtunkhwa, Pakistan",
    period: "July 2023 - December 2024",
    description:
      "Worked as a React JS Developer, building and optimizing user interfaces for web applications with a focus on performance, responsiveness, and user experience.",
    current: false,
  },
  {
    title: "Trainee MERN Stack Developer",
    company: "CUI Sahiwal Software House",
    location: "Sahiwal, Pakistan",
    period: "December 2022 - June 2023",
    description:
      "Worked as a Trainee MERN Stack Developer, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-[800px]">
            My professional journey as a developer, showcasing my growth and expertise in frontend and full-stack
            development.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/20 bg-card shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span>{experience.title}</span>
                    {experience.current && (
                      <span className="text-xs font-normal bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>
                    <span className="block">{experience.company}</span>
                    <span className="block text-sm">
                      {experience.location} | {experience.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{experience.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

