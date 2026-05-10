"use client";

import { Bot, Brain, Cpu, Eye } from "lucide-react";

const highlights = [
  {
    icon: Bot,
    title: "Robotics",
    description: "ROS/ROS2, motion planning, SLAM, sensor fusion",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, reinforcement learning, neural networks",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Object detection, segmentation, 3D reconstruction",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Real-time systems, microcontrollers, edge computing",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a passionate Robotics and Machine Learning Engineer with a focus on building 
              intelligent systems that can perceive, reason, and act in the physical world. My 
              journey began with a fascination for autonomous robots and has evolved into expertise 
              across the full robotics stack.
            </p>
            <p>
              Currently, I&apos;m focused on developing perception systems for autonomous vehicles 
              and industrial robots. I enjoy tackling complex problems at the intersection of 
              hardware and software, from sensor calibration to deploying neural networks on 
              embedded platforms.
            </p>
            <p>
              When I&apos;m not training models or debugging ROS nodes, you&apos;ll find me contributing 
              to open-source robotics projects, experimenting with new sensor technologies, or 
              building custom robots in my home lab.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
