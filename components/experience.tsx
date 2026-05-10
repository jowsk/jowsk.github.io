"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Robotics Company",
    title: "Senior ML Engineer",
    period: "2023 — Present",
    description: [
      "Lead development of perception systems for autonomous mobile robots using multi-sensor fusion",
      "Designed and deployed real-time object detection models achieving 95% accuracy at 30 FPS on edge devices",
      "Mentored team of 4 engineers on best practices for ML model deployment in production robotics systems",
      "Implemented SLAM algorithms reducing localization error by 40% in dynamic environments",
    ],
  },
  {
    company: "AI Startup",
    title: "Machine Learning Engineer",
    period: "2021 — 2023",
    description: [
      "Built end-to-end computer vision pipelines for industrial quality inspection using PyTorch and OpenCV",
      "Developed reinforcement learning agents for robotic manipulation tasks in simulation and real-world",
      "Reduced model inference latency by 60% through quantization and TensorRT optimization",
      "Created automated data pipelines processing 100K+ images daily for model training",
    ],
  },
  {
    company: "Research Lab",
    title: "Research Engineer",
    period: "2019 — 2021",
    description: [
      "Conducted research on deep learning methods for 3D point cloud processing and semantic segmentation",
      "Published 3 papers in top-tier robotics conferences (ICRA, IROS, RSS)",
      "Developed ROS2 packages for sensor calibration and data collection across multiple robot platforms",
      "Collaborated with cross-functional teams to integrate research prototypes into production systems",
    ],
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">02.</span>
          Experience
          <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-colors ${
                  activeTab === index
                    ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-4 md:py-0 md:pl-4">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].title}{" "}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary mt-1.5">▹</span>
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
