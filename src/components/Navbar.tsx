import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-mono">&lt;Nandini Saxena/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="sm"
              className="rounded-xl font-medium"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </Button>
          ))}
          <ThemeToggle />
          <Button
            variant="cute"
            size="sm"
            className="ml-2"
            onClick={() => scrollToSection("#contact")}
          >
            Hire Me ✨
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-4 animate-scale-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="justify-start rounded-xl"
                onClick={() => scrollToSection(link.href)}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="cute"
              className="mt-2"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me ✨
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
