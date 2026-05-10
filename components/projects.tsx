"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Autonomous Drone Navigation",
    description:
      "End-to-end autonomous navigation system for quadcopters using deep reinforcement learning. Trained in simulation with domain randomization and deployed on real hardware achieving 95% success rate in obstacle-rich environments.",
    technologies: ["Python", "PyTorch", "ROS2", "Gazebo", "PX4"],
    github: "https://github.com",
    demo: "https://youtube.com",
    image: "/projects/drone.jpg",
  },
  {
    title: "Real-Time Object Detection Pipeline",
    description:
      "Production-ready object detection system optimized for edge deployment. Features custom YOLOv8 model with TensorRT acceleration, achieving 60 FPS on NVIDIA Jetson with 92% mAP on custom industrial dataset.",
    technologies: ["Python", "PyTorch", "TensorRT", "CUDA", "Docker"],
    github: "https://github.com",
    demo: null,
    image: "/projects/detection.jpg",
  },
  {
    title: "Multi-Robot SLAM System",
    description:
      "Distributed SLAM system enabling multiple robots to collaboratively map large environments. Implements pose graph optimization with loop closure detection and map merging for warehouse automation.",
    technologies: ["C++", "ROS2", "g2o", "OpenCV", "PCL"],
    github: "https://github.com",
    demo: "https://youtube.com",
    image: "/projects/slam.jpg",
  },
];

const otherProjects = [
  {
    title: "Point Cloud Segmentation",
    description:
      "Implementation of PointNet++ for semantic segmentation of LiDAR point clouds with custom data augmentation pipeline.",
    technologies: ["Python", "PyTorch", "Open3D"],
    github: "https://github.com",
  },
  {
    title: "Robot Arm Control",
    description:
      "MoveIt2-based motion planning and control system for 6-DOF robot arm with collision avoidance and trajectory optimization.",
    technologies: ["C++", "ROS2", "MoveIt2"],
    github: "https://github.com",
  },
  {
    title: "Sensor Fusion Library",
    description:
      "Lightweight C++ library for fusing IMU, GPS, and wheel odometry data using Extended Kalman Filter.",
    technologies: ["C++", "Eigen", "CMake"],
    github: "https://github.com",
  },
  {
    title: "Sim-to-Real Transfer",
    description:
      "Framework for training policies in simulation and deploying to real robots with domain adaptation techniques.",
    technologies: ["Python", "Isaac Gym", "PyTorch"],
    github: "https://github.com",
  },
  {
    title: "Visual Odometry",
    description:
      "Stereo visual odometry pipeline using ORB features with bundle adjustment for accurate pose estimation.",
    technologies: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com",
  },
  {
    title: "Behavior Trees Library",
    description:
      "Flexible behavior tree implementation for robot task planning with visualization and debugging tools.",
    technologies: ["C++", "ROS2", "Qt"],
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
