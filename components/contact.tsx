"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">05. What&apos;s Next?</p>
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
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-mono rounded-md hover:bg-primary/10 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </Link>
      </div>
    </section>
  );
}
