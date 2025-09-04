"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function PortfolioHero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Reset after a pause
        setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium">
                Available for new opportunities
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                <span className="text-accent">{displayedText}</span>
                <span className="animate-pulse">|</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
                I craft digital experiences that blend innovative design with
                cutting-edge technology. Passionate about creating solutions
                that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#projects"
                className="group inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-accent text-white hover:bg-accent/80 transition"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full border border-accent text-accent hover:bg-accent/10 transition"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://github.com/Himanthajaga"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full hover:bg-accent/10 flex items-center justify-center w-10 h-10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/himantha-gamachchige-35792b28b"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full hover:bg-accent/10 flex items-center justify-center w-10 h-10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:himanthagamachchige@gmail.com"
                className="rounded-full hover:bg-accent/10 flex items-center justify-center w-10 h-10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Rotating border - behind everything */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-spin p-2 z-0"></div>
              {/* Lightning effect overlay - only on border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none z-10"></div>
              {/* Static image - above border, not inside it */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-72 h-72 rounded-full bg-background p-2">
                  <img
                    src="/ocean1.jpg"
                    alt="Profile Picture"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
