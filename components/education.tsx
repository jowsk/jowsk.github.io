"use client";

import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master Thesis",
    institution: "Harvard University",
    institutionUrl: "https://www.harvard.edu",
    lab: "Slade Lab",
    labUrl: "https://sladelab.seas.harvard.edu",
    location: "John A. Paulson School of Engineering and Applied Sciences, USA",
    period: "Mar 2025 — Oct 2025",
    grade: "Grade: 6.0/6.0",
  },
  {
    degree: "M.Sc. in Robotics and Data Science",
    institution: "EPFL",
    institutionUrl: "https://www.epfl.ch",
    location: "Swiss Federal Institute of Technology Lausanne, Switzerland",
    period: "Sep 2022 — Oct 2025",
    grade: null,
  },
  {
    degree: "Bachelor Exchange (3rd Year)",
    institution: "Karlsruhe Institute of Technology (KIT)",
    institutionUrl: "https://www.kit.edu",
    location: "Germany",
    period: "Sep 2021 — Sep 2022",
    grade: null,
  },
  {
    degree: "B.Sc. in Microengineering",
    institution: "EPFL",
    institutionUrl: "https://www.epfl.ch",
    location: "Swiss Federal Institute of Technology Lausanne, Switzerland",
    period: "Sep 2018 — Sep 2022",
    grade: null,
  },
];

export function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Education
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          My academic journey in engineering and robotics
        </p>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 text-primary font-medium mb-1">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:underline decoration-2 underline-offset-4"
                    >
                      {edu.institution}
                    </a>
                    {edu.lab && (
                      <>
                        <span className="text-muted-foreground">|</span>
                        <a
                          href={edu.labUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary/80 hover:text-primary hover:underline decoration-2 underline-offset-4"
                        >
                          {edu.lab}
                        </a>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {edu.location}
                  </p>
                  {edu.grade && (
                    <p className="text-primary/80 text-sm mt-2 font-medium">
                      {edu.grade}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
