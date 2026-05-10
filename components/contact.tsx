"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wide">Let&apos;s Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I&apos;m currently open to new opportunities in robotics and machine learning. 
          Whether you have a challenging project, want to discuss the latest in autonomous 
          systems, or just want to say hi, my inbox is always open. I&apos;ll do my best to 
          get back to you!
        </p>
        <Link
          href="https://linkedin.com/in/joannawolski"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
        </Link>
      </div>
    </section>
  );
}
