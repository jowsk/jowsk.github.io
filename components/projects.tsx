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
      <div className="max-w-5xl">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">03.</span>
          Projects
          <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
        </h2>

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
                className={`md:col-span-7 aspect-video bg-card rounded-lg border border-border overflow-hidden ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-primary/50 font-mono text-sm">
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
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg border border-border shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-primary" />
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
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
