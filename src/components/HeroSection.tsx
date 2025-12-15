import { ArrowDown, Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lavender/30 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint/30 rounded-full blur-3xl float-animation-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink/20 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 text-4xl float-animation opacity-60">💻</div>
      <div className="absolute bottom-40 left-20 text-3xl float-animation-delayed opacity-60">✨</div>
      <div className="absolute top-1/3 left-32 text-2xl float-animation opacity-50">🎀</div>
      <div className="absolute bottom-1/3 right-32 text-3xl float-animation-delayed opacity-50">🌸</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Code-style greeting */}
          <div className="inline-block mb-6 animate-slide-up">
            <div className="glass-card rounded-2xl px-6 py-3 font-mono text-sm">
              <span className="text-primary">const</span>{" "}
              <span className="text-mint">greeting</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-accent">"Hello, World!"</span>
              <span className="text-muted-foreground">;</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            I'm{" "}
            <span className="gradient-text">Nandini Saxena</span>
            <span className="inline-block ml-2 animate-bounce-slow"></span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-mono text-primary">&lt;</span>
            Full-Stack Developer & CSE Undergrad
            <span className="font-mono text-primary">/&gt;</span>
            {" "}who loves to code
            <Heart className="inline w-5 h-5 ml-1 text-accent fill-accent" />
          </p>

          <p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            B.Tech. CSE @ IIIT Vadodara • MERN Stack Developer • DSA Enthusiast 
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="cute"
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code2 className="w-5 h-5" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-lavender-soft hover:text-primary"
              asChild
            >
              <a href="https://github.com/nandinisaxena2809" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-mint-soft hover:text-mint"
              asChild
            >
              <a href="https://linkedin.com/in/nandini-saxena-5a6851280" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-pink-soft hover:text-accent"
              asChild
            >
              <a href="mailto:nandinisaxena2809@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-slow"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
