"use client";

import { Bot, Brain, Cpu, Eye } from "lucide-react";

const highlights = [
  {
    icon: Bot,
    title: "Robotics",
    description: "SLAM, autonomous navigation, motion planning, sensor fusion",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, reinforcement learning, VLMs, NLP",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Object detection, CNNs, multimodal perception",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "STM32 microcontrollers, real-time control, wearable robotics",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          About Me
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Building intelligent systems that bridge software and the physical world
        </p>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Robotics and Machine Learning Engineer currently pursuing my M.Sc. in Robotics 
              and Data Science at EPFL, with a Master Thesis at Harvard University&apos;s Slade Lab. 
              My passion lies in building intelligent systems that can perceive, reason, and act 
              in the physical world.
            </p>
            <p>
              Currently, I&apos;m a Research Collaborator at MILA Quebec, developing a robotic guide 
              dog system for assistive navigation using Vision-Language Models and Reinforcement 
              Learning on a Unitree Go2 quadruped robot. Previously, I worked on wearable robotic 
              exoskeletons at Harvard and computer vision pipelines at Chanel.
            </p>
            <p>
              I speak English, French (native), Polish (fluent), and German. When I&apos;m not training 
              RL policies or debugging sensor fusion algorithms, I enjoy exploring the intersection 
              of robotics and human augmentation technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
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
