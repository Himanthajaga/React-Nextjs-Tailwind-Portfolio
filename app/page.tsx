import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioAbout } from "@/components/portfolio-about"
import { PortfolioProjects } from "@/components/portfolio-projects"
import { PortfolioContact } from "@/components/portfolio-contact"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <div id="about">
          <PortfolioAbout />
        </div>
        <div id="projects">
          <PortfolioProjects />
        </div>
        <div id="contact">
          <PortfolioContact />
        </div>
      </main>

      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
