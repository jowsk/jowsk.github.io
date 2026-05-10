"use client";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C", "CUDA", "Rust", "TypeScript"],
  },
  {
    title: "Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "TensorRT",
      "ONNX",
    ],
  },
  {
    title: "Robotics & Embedded",
    skills: ["ROS/ROS2", "Gazebo", "MoveIt2", "PX4", "Arduino", "NVIDIA Jetson"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "Docker", "Linux", "CMake", "CI/CD", "AWS"],
  },
  {
    title: "Perception & Vision",
    skills: [
      "SLAM",
      "Object Detection",
      "Point Clouds",
      "Sensor Fusion",
      "Calibration",
      "3D Reconstruction",
    ],
  },
  {
    title: "AI/ML Techniques",
    skills: [
      "Deep Learning",
      "Reinforcement Learning",
      "CNNs",
      "Transformers",
      "GANs",
      "Imitation Learning",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">04.</span>
          Skills & Technologies
          <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-3 font-mono text-sm"
                  >
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
