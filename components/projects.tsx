"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Aerial Robotics - Autonomous Drone Navigation",
    description:
      "Engineered an autonomous navigation system for a quadrotor drone utilizing SLAM and Visual-Inertial Odometry. Developed and tuned flight controllers in simulation before successful deployment on physical hardware for real-world testing. Implemented Path Planning algorithms and trajectory tracking controllers, ensuring stable flight and precise navigation through planned waypoints.",
    technologies: ["Python", "SLAM", "VIO", "Path Planning", "ROS"],
    github: "https://github.com",
    demo: null,
    image: "/projects/drone.jpg",
  },
  {
    title: "Mobile Robotics - Autonomous Navigation",
    description:
      "Developed a differential-drive autonomous system implementing Global and Local Path Planning with dynamic Obstacle Avoidance. Implemented Extended Kalman Filters (EKF) for robust State Estimation and sensor fusion, optimizing localization accuracy in cluttered environments.",
    technologies: ["Python", "EKF", "Path Planning", "Sensor Fusion"],
    github: "https://github.com",
    demo: null,
    image: "/projects/mobile.jpg",
  },
  {
    title: "Deep Learning - Robust Content Moderation",
    description:
      "Developed robust moderation architectures by investigating adversarial training techniques to detect unsafe content. Engineered a deep learning model that outperformed baseline systems in identifying complex adversarial inputs.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Adversarial ML"],
    github: "https://github.com",
    demo: null,
    image: "/projects/moderation.jpg",
  },
];

const otherProjects = [
  {
    title: "Computational Motor Control",
    description:
      "Simulated bio-inspired open- and closed-loop control architectures in MuJoCo for amphibious robotic systems with adaptive gait switching based on terrain (land vs. water).",
    technologies: ["Python", "MuJoCo", "Control Systems"],
    github: "https://github.com",
  },
  {
    title: "Haptic Human-Robot Interfaces",
    description:
      "Designed and implemented a PID-controlled haptic interface driven by electromyography (EMG) signals for real-time human-robot interaction.",
    technologies: ["Python", "EMG", "PID Control"],
    github: "https://github.com",
  },
  {
    title: "Natural Language Processing",
    description:
      "Fine-tuned Meta's Llama foundational models using Direct Preference Optimization (DPO) and custom classification heads for engineering-specific Q&A and multiple-choice reasoning.",
    technologies: ["Python", "PyTorch", "LLMs", "DPO"],
    github: "https://github.com",
  },
  {
    title: "Image Analysis & Pattern Recognition",
    description:
      "Developed a computer vision pipeline for automatic detection and re-clustering of puzzle pieces in heterogeneous scenes, leveraging feature extraction and data-driven clustering methods.",
    technologies: ["Python", "OpenCV", "Clustering"],
    github: "https://github.com",
  },
  {
    title: "Model Predictive Control",
    description:
      "Designed a model predictive control (MPC) system in MATLAB to simulate and stabilize rocket flight dynamics following a predefined trajectory.",
    technologies: ["MATLAB", "MPC", "Control Systems"],
    github: "https://github.com",
  },
  {
    title: "Wearable Exoskeletons Research",
    description:
      "Developed IMU-based control algorithms on STM32 for real-time actuation of hip and ankle exoskeletons, enabling data-driven human-robot interaction.",
    technologies: ["C", "STM32", "IMU", "Embedded"],
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          A selection of projects I&apos;ve worked on
        </p>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`md:col-span-7 aspect-video bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">
                    Project Preview
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-7 md:row-start-1 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-center text-xl font-semibold text-foreground mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary/50 text-muted-foreground rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
