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
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A curated set of tools and technologies I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
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
