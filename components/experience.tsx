"use client";

import { useState, type SyntheticEvent } from "react";

const experiences = [
  {
    company: "Mila - Quebec Artificial Intelligence Institute",
    companyShort: "Mila",
    companyUrl: "https://mila.quebec",
    title: "Research Collaborator",
    period: "Feb 2026 — Present",
    description: [
      "Developing a robotic guide dog system for assistive navigation in real-world environments for visually impaired users",
      "Designed a multimodal perception system on a Unitree Go2 quadruped robot, integrating IMU, LiDAR and vision with Vision-Language Models (VLMs) for semantic scene understanding",
      "Training Reinforcement Learning (RL) policies for goal-directed locomotion and obstacle avoidance in unstructured environments",
      "Built end-to-end robotics pipelines using PyTorch for autonomous robotic system, including sensor fusion, mapping, control, and hardware deployment",
    ],
  },
  {
    company: "Harvard SEAS",
    companyShort: "Harvard",
    companyUrl: "https://www.seas.harvard.edu",
    lab: "Slade Lab",
    labUrl: "https://sladelab.seas.harvard.edu",
    title: "Visiting Student Researcher",
    period: "Mar 2025 — Oct 2025",
    description: [
      "Conducted research on wearable robotic exoskeletons to reduce human metabolic cost during overground walking",
      "Developed IMU-based control algorithms implemented on STM32 microcontrollers for real-time actuation of active hip and passive ankle exoskeleton systems",
      "Enabled seamless, data-driven interaction between human movement and robotic actuation",
      "Modeled human behavior by collecting and analyzing large-scale multimodal biomechanical datasets, including motion capture, EMG, force plates, and metabolic systems",
    ],
  },
  {
    company: "Chanel",
    companyShort: "Chanel",
    companyUrl: "https://www.chanel.com",
    title: "Data Science Intern",
    period: "Sep 2024 — Mar 2025",
    description: [
      "Engineered forecasting models for supply chain optimization using clustering and time-series analysis, addressing cannibalization and last-piece assortment",
      "Developed a computer vision pipeline for product recognition and classification, implementing CNN architectures for object detection in TensorFlow",
      "Designed and automated end-to-end ML pipelines for model deployment and orchestration within the Azure Databricks ecosystem",
    ],
  },
  {
    company: "EPFL",
    companyShort: "EPFL",
    companyUrl: "https://www.epfl.ch",
    lab: "Mobile Robotic Systems Group (MOBOTS)",
    labUrl: "https://www.epfl.ch/labs/mobots/",
    title: "Student Researcher",
    period: "Autumn 2023",
    description: [
      "Developed an Abstract Syntax Tree (AST)-based machine learning framework in Python to analyze student programming strategies in computational thinking tasks from PISA",
      "Modeled structured program representations to classify strategies, detect errors, and infer behavioral patterns",
      "Generated automated feedback providing actionable learning recommendations based on inferred strategies",
    ],
  },
  {
    company: "EPFL",
    companyShort: "EPFL",
    companyUrl: "https://www.epfl.ch",
    lab: "Basics of Mobile Robotics (MICRO-452)",
    labUrl: "https://edu.epfl.ch/coursebook/en/basics-of-mobile-robotics-MICRO-452",
    title: "Teaching Assistant",
    period: "Autumn 2023",
    description: [
      "MSc course: Basics of Mobile Robotics (Prof. Mondada)",
      "Supported MSc students during lab sessions and project work on perception, localization (Kalman Filtering), and navigation (path planning, obstacle avoidance)",
      "Used the Thymio mobile robot platform for hands-on learning experiences",
    ],
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [logoErrors, setLogoErrors] = useState<{ [key: string]: boolean }>({});

  const companyLogoMap: { [key: string]: string } = {
    "Mila": "/logos/mila.png",
    "Harvard": "/logos/harvard.png",
    "Chanel": "/logos/chanel.png",
    "EPFL": "/logos/epfl.png",
  };

  const getCompanyLogoPath = (companyShort: string) => {
    return companyLogoMap[companyShort] || "/logos/placeholder.png";
  };

  const getCompanyInitials = (companyShort: string) => {
    return companyShort
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogoError = (companyShort: string) => {
    setLogoErrors((prev) => ({ ...prev, [companyShort]: true }));
  };

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${exp.title}`}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-medium text-left rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  activeTab === index
                    ? "text-primary-foreground bg-primary shadow-md"
                    : "text-muted-foreground bg-card hover:text-primary hover:bg-card/80 border border-border/50"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center text-xs font-bold text-primary shrink-0 overflow-hidden">
                  {!logoErrors[exp.companyShort] ? (
                    <img
                      src={getCompanyLogoPath(exp.companyShort)}
                      alt={`${exp.companyShort} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={() => handleLogoError(exp.companyShort)}
                    />
                  ) : (
                    getCompanyInitials(exp.companyShort)
                  )}
                </div>
                <div className="flex flex-col leading-tight">
                  <span>{exp.companyShort}</span>
                  <span
                    className={`text-xs ${
                      activeTab === index ? "text-primary-foreground/80" : "text-muted-foreground/80"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-4 md:py-0 md:pl-6 flex-1 bg-card rounded-2xl p-6 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-2 text-primary font-medium mb-2">
              {/* Company Link */}
              <a
                href={experiences[activeTab].companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-2 underline-offset-4"
              >
                {experiences[activeTab].company}
              </a>

              {/* Lab Link (Optional) */}
              {experiences[activeTab].lab && (
                <>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={experiences[activeTab].labUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/80 hover:text-primary hover:underline decoration-2 underline-offset-4"
                  >
                    {experiences[activeTab].lab}
                  </a>
                </>
              )}
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}