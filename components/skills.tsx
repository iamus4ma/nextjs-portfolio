import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, FileJson, Globe, LayoutGrid, Server } from "lucide-react"

const skills = [
  {
    name: "HTML",
    icon: <Globe className="h-8 w-8 text-primary" />,
    level: 90,
  },
  {
    name: "CSS",
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    level: 85,
  },
  {
    name: "JavaScript",
    icon: <FileJson className="h-8 w-8 text-primary" />,
    level: 85,
  },
  {
    name: "React Js",
    icon: <Code className="h-8 w-8 text-primary" />,
    level: 90,
  },
  {
    name: "Next Js",
    icon: <Server className="h-8 w-8 text-primary" />,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: <Database className="h-8 w-8 text-primary" />,
    level: 75,
  },
  {
    name: "Node Js/Express",
    icon: <Server className="h-8 w-8 text-primary" />,
    level: 75,
  },
  {
    name: "MERN Stack",
    icon: <Code className="h-8 w-8 text-primary" />,
    level: 80,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-[800px]">
            I&apos;ve developed a strong skill set in frontend and full-stack development, with expertise in the
            following technologies:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Introduction to Web Development with HTML, CSS, JavaScript</h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/5AM4NBAS7WTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Developing Front-End Apps with React</h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/YVFYMNWP3ALW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Developing Back-End Apps with Node.js and Express</h4>
                <a
                  href="https://coursera.org/share/98f3024ca1604834aa5230bdb3ae871d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Building RESTful APIs with Node.js and Express</h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/W7B5C7QDS75H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

