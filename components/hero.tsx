"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl w-full mx-auto relative flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
        <div className="max-w-3xl">
          <p className="text-primary font-medium text-sm mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            <span className="text-balance">Joanna Wolski</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8 leading-tight">
            <span className="text-balance">Robotics & Machine Learning Engineer</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            M.Sc. in Robotics and Data Science from EPFL, currently researching assistive robotics at MILA Quebec.
            Specializing in <span className="text-primary font-medium">autonomous navigation</span>, <span className="text-primary font-medium">wearable exoskeletons</span>, and <span className="text-primary font-medium">vision-language models</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary/30 text-primary font-medium rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Get in Touch
          </Link>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/jowsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/joannawolski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:joannawolski@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="self-center md:self-auto">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-border/60 shadow-lg">
            <Image
              src="/placeholder-user.jpg"
              alt="Portrait of Joanna Wolski"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
