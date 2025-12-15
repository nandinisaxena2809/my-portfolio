import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="w-4 h-4" />
            <span className="font-mono text-sm">
              &lt;/Portfolio&gt;
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-accent fill-accent inline" />{" "}
          </p>

          <p className="text-sm text-muted-foreground">
            © {currentYear} • Nandini Saxena • All rights reserved
          </p>
        </div>

        {/* Fun decorative element */}
        <div className="text-center mt-6">
          <p className="font-mono text-xs text-muted-foreground/50">
            {"// if (energyLevel === 0) { me.sleep() } else { me.code() }"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
