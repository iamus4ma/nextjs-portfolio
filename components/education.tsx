import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const educations = [
  {
    degree: "BS Software Engineering",
    institution: "COMSATS University Islamabad, Sahiwal Campus",
    location: "Sahiwal, Pakistan",
    period: "September 2019 - June 2023",
    website: "https://sahiwal.comsats.edu.pk/",
    description:
      "Completed Bachelor of Science in Software Engineering with a focus on web development, software design, and programming fundamentals.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-[800px]">My academic background and educational qualifications.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educations.map((education, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/20 bg-card shadow-sm">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                {index < educations.length - 1 && <div className="w-0.5 h-full bg-muted-foreground/20"></div>}
              </div>

              <Card className="w-full mb-8">
                <CardHeader>
                  <CardTitle>{education.degree}</CardTitle>
                  <CardDescription>
                    <span className="block">
                      <a
                        href={education.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {education.institution}
                      </a>
                    </span>
                    <span className="block text-sm">
                      {education.location} | {education.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{education.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

