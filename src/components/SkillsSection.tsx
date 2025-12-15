import { Code, Database, Globe, Palette, Terminal, Zap, Rocket } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code,
    color: "from-lavender to-primary",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Palette,
    color: "from-pink to-accent",
    items: ["React", "React Native", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-mint to-secondary",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "Tools, Platforms & DevOps",
    icon: Terminal,
    color: "from-coral to-accent",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva", "Linux", "Docker"],
  },
  {
    category: "Core CS",
    icon: Zap,
    color: "from-primary to-lavender",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networking", "Operating Systems"],
  },
  
  {
    category: "Deployment, Hosting & SEO",
    icon: Rocket,
    color: "from-mint to-lavender",
    items: ["GoDaddy", "Vercel", "Google Search Console"],
  },
  {
    category: "Soft Skills",
    icon: Globe,
    color: "from-mint to-lavender",
    items: ["Leadership", "Team Work", "Problem Solving", "Communication", "Time Management"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-mint/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-sm text-primary mb-2">
            {"<skills>"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span> ⚡
          </h2>
          <span className="inline-block font-mono text-sm text-primary mt-2">
            {"</skills>"}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-primary-foreground group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">{skill.category}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted/80 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative tech icons */}
        <div className="flex justify-center gap-8 mt-12 text-4xl opacity-40">
          <span className="hover:scale-125 transition-transform cursor-default">🐍</span>
          <span className="hover:scale-125 transition-transform cursor-default">⚛️</span>
          <span className="hover:scale-125 transition-transform cursor-default">🎨</span>
          <span className="hover:scale-125 transition-transform cursor-default">🗄️</span>
          <span className="hover:scale-125 transition-transform cursor-default">🚀</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
