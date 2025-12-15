import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Web Developer",
    company: "TrueGTM",
    period: "December 2025",
    link: "https://www.truegtm.com",
    description: [
      "Independently built and deployed TrueGTM, a production-grade web application for GTM strategy positioning",
      "End-to-end development: UI architecture, component-based frontend, and deployment",
      "Implemented SEO fundamentals (meta tags, canonical URLs, indexing readiness)",
      "Ensured performance optimization, responsive design, and clean code practices",
      "Version-controlled development and live deployment using modern tooling",
    ],
    color: "from-mint to-lavender",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Lummra",
    period: "Aug 2025 - Nov 2025",
    link: "/certificate.jpg",
    description: [
      "Contributed to an AstroTech mobile app using React Native + ExpoGo, TypeScript, and Figma",
      "Built reusable UI components ensuring responsive and performant interfaces",
      "Integrated REST APIs and optimized frontend rendering and state handling",
      "Implemented backend routes using Node.js and Express, supporting end-to-end feature development",
      "Collaborated with the team on debugging, feature iteration, and code reviews in an agile setup",
    ],
    color: "from-lavender to-primary",
  },
  
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-mint/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-lavender/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">experience.log</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span> 💼
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-primary-foreground shrink-0 group-hover:scale-110 transition-transform`}>
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                      {exp.link ? (
                        <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        >
                        {exp.title}
                        </a>
                        ) : (
                        exp.title
                        )}
                      </h3>

                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">
            Certifications & Achievements 🏆
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 text-center hover:shadow-soft transition-all">
              <span className="text-3xl mb-2 block">🎖️</span>
              <a
              href="https://learn.nvidia.com/certificates?id=Yc22wddRQuij6n0rrd2Y-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline"
              >
              NVIDIA Fundamentals of Deep Learning
              </a>
            </div>
            <div className="glass-card rounded-xl p-4 text-center hover:shadow-soft transition-all">
              <span className="text-3xl mb-2 block">🎓</span>
              <a
              href="https://www.geeksforgeeks.org/certificate/03dba9af357acdc512b38cf20c839866?utm_source=socials&utm_medium=cc_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline"
              >
              GeeksforGeeks Full-Stack Developer Bootcamp
              </a>
            </div>
            <div className="glass-card rounded-xl p-4 text-center hover:shadow-soft transition-all">
              <span className="text-3xl mb-2 block">🌟</span>
              <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7353015803744608257/?originTrackingId=ubMJ0hVF8b7B3nJ2wn3bRw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline"
              >
              GirlScript Summer of Code Contributor
              </a>
              </div>
            <div className="glass-card rounded-xl p-4 text-center hover:shadow-soft transition-all">
              <span className="text-3xl mb-2 block">💻</span>
              <p className="text-sm text-muted-foreground">200+ DSA Problems on LeetCode, CodeChef & GFG</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
