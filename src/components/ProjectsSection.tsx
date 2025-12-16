import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PDFEase",
    description: "A comprehensive PDF and DOC management app supporting file merging, compression, encryption, and annotation. Improved workflow efficiency by 60%.",
    tech: ["Python", "React", "File Processing"],
    gradient: "from-lavender to-pink",
    emoji: "📄",
    github: "#",
    live: "#",
  },
  {
    title: "MealMate",
    description: "Full-stack food waste management platform connecting NGOs, donors, and recipients. Reduced manual coordination by 70% with JWT auth and role-based dashboards.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    gradient: "from-mint to-lavender",
    emoji: "🍲",
    github: "#",
    live: "#",
  },
  {
    title: "TrueGTM - Freelance",
    description: "Freelance web development for TrueGTM.com, building responsive landing pages and interactive UI components for their go-to-market platform.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-pink to-coral",
    emoji: "🚀",
    github: "#",
    live: "https://truegtm.com",
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio website to showcase projects, skills, and experience. Implemented modern UI, smooth animations, and SEO best practices; deployed the site with a production-ready build pipeline.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    gradient: "from-lavender to-mint",
    emoji: "🌐",
    github: "https://github.com/nandinisaxena2809/my-portfolio",
    live: "https://nandinisaxena-portfolio.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4">
            <Folder className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">./projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Things I've <span className="gradient-text">Built</span> 🏗️
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            From internships to freelance work - each project taught me something new!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform duration-500">
                  {project.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted rounded-md text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono text-sm">
            {"// More projects on my GitHub... 🚧"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
