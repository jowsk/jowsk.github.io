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
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Experience
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          My professional journey in robotics and machine learning
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap text-left rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "text-primary-foreground bg-primary shadow-md"
                    : "text-muted-foreground bg-card hover:text-primary hover:bg-card/80 border border-border/50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-4 md:py-0 md:pl-6 flex-1 bg-card rounded-2xl p-6 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].title}
            </h3>
            <p className="text-primary font-medium mb-2">
              {experiences[activeTab].company}
            </p>
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
