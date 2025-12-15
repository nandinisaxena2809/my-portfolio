import { Sparkles, BookOpen, Coffee, Code, Users, Award, EarthIcon } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { icon: EarthIcon, text: "MERN Stack Developer", color: "bg-lavender-soft text-primary" },
    { icon: Code, text: "200+ DSA problems", color: "bg-mint-soft text-mint" },
    { icon: Users, text: "Freelancer", color: "bg-pink-soft text-accent" },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Avatar/Image placeholder */}
          <div className="flex justify-center">
            <div className="relative -translate-y-10 md:-translate-y-16">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-lavender via-pink to-mint p-1 shadow-glow">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
  <img
    src="/me.JPG"
    alt="Developer illustration"
    className="max-w-full max-h-full object-contain"
  />
</div>
              </div>
              {/* Decorative badges */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2 text-sm font-medium animate-bounce-slow">
                MERN Stack Developer ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2 text-sm font-medium float-animation-delayed">
                ✨ Freelancer
              </div>
            </div>
          </div>

          {/* About text */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hey there! I'm <span className="text-primary font-semibold">Nandini Saxena</span>, 
                a Computer Science undergraduate at{" "}
                <span className="text-foreground font-semibold">IIIT Vadodara</span>, driven by a strong interest in problem-solving and building real products. My core strengths lie in DSA and full-stack MERN development, with a focus on scalable, clean, and user-centric solutions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Professionally, I've worked as a{" "}
                <span className="text-foreground font-semibold">Full-Stack developer</span> at{" "}
                <span className="text-primary font-semibold">Lummra</span>, and as a{" "}
                <span className="text-foreground font-semibold">freelance developer</span> for clients like{" "}
                <span className="text-primary font-semibold">TrueGTM</span>, etc., helping startups bring ideas to life.
                
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I’m not building, you’ll usually find me solving DSA problems, participating in coding contests, or contributing to tech and design initiatives on campus.
              </p>
            </div>

            {/* Fun facts */}
            <div className="flex flex-wrap gap-3">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${fact.color} text-sm font-medium transition-transform hover:scale-105`}
                >
                  <fact.icon className="w-4 h-4" />
                  {fact.text}
                </div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div className="font-mono text-base bg-muted/50 rounded-xl px-6 py-5 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-mint" />
                <div className="w-3 h-3 rounded-full bg-lavender" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">class</span>{" "}
                <span className="text-mint">NandiniSaxena</span> {"{"}
                <br />
                <span className="ml-4 text-accent">role</span>:{" "}
                <span className="text-lavender">"Full-Stack Developer"</span>
                
                <br />
                
                {"}"}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
