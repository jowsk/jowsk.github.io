"use client";

import { Bot, Brain, Flame, ScanFace } from "lucide-react";

const highlights = [
  {
    icon: Bot,
    title: "Robotics",
    description: "SLAM, perception, navigation, motion planning, control",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, reinforcement learning, VLMs, NLP",
  },
  {
    icon: ScanFace,
    title: "Personality",
    description: "Curious, creative, positive",
  },
    {
    icon: Flame,
    title: "Passions",
    description: "Skiing, Kitefoiling",
  },
  // {
  //   icon: Eye,
  //   title: "Computer Vision",
  //   description: "Object detection, CNNs, multimodal perception",
  // },
  // {
  //   icon: Cpu,
  //   title: "Embedded Systems",
  //   description: "STM32 microcontrollers, real-time control, wearable robotics",
  // },
];

const languages = [
  { name: "French", level: "Mother Tongue" },
  { name: "English", level: "C1" },
  { name: "Polish", level: "Fluent" },
  { name: "German", level: "B2" },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-[13fr_7fr] gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m an EPFL engineer specializing in Robotics and Machine Learning, passionate about building intelligent systems that can perceive, reason, and act in the physical world. My interests lie at the intersection of machine learning, embodied AI, and real-world robotics.
            </p>
            <p>
              Currently, I&apos;m a Research Collaborator at Mila Quebec Artificial Intelligence Institute, where I develop a robotic guide dog system for assistive navigation. Previously, I worked at the Slade Lab at Harvard University SEAS on wearable robotic exoskeletons, and at Chanel as a Data Scientist intern.
            </p>
            <p>
              Wherever I am, I&apos;m driven by curiosity. I love research and enjoy finding new solutions to both old and emerging problems.
            </p>
            <p>
              When I&apos;m not in the lab, you&apos;ll probably find me skiing in the mountains or kitefoiling on the water.
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

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Languages
          </h3>
          <div className="flex flex-nowrap gap-4 overflow-x-auto pb-1">
            {languages.map((language) => (
              <div
                key={language.name}
                className="min-w-[170px] flex-1 bg-card rounded-2xl p-5 border border-border/50 text-center"
              >
                <p className="text-foreground font-semibold">{language.name}</p>
                <p className="text-muted-foreground text-sm mt-1">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
