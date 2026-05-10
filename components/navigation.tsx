"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <Link href="/" className="font-mono text-primary font-bold text-lg">
          {"<RML />"}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-mono text-sm"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
