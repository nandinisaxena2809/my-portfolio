import { Code, Palette, Briefcase } from "lucide-react";

const clubs = [
  {
    role: "Design Co-Lead",
    organization: "IIITV Finance & Consulting Club",
    period: "August 2024 - July 2025",
    description:
      "Led the design initiatives for social media posts and event promotions; conducted a Canva design workshop for 50+ students; coordinated with cross functional teams to enhance event visibility and student engagement.",
    icon: Palette,
    color: "from-lavender to-pink",
  },
  {
    role: "Organizer",
    organization: "Prudentia, IIIT Vadodara",
    period: "2024",
    description:
      "Contributed to content creation, PR, and marketing; played a key role in event outreach, strengthening organizational and collaborative skills.",
    icon: Briefcase,
    color: "from-mint to-accent",
  },
  {
    role: "Member",
    organization: "Microsoft Learn Student Ambassador, IIIT Vadodara",
    period: "2024 - Present",
    description:
      "Engaged in technical learning initiatives, community programs, and peer-driven knowledge sharing.",
    icon: Code,
    color: "from-mint to-accent",
  },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-mint/30 text-primary rounded-full text-sm font-medium mb-4">
            🌟 Leadership & Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Clubs, Events & Leadership Roles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-3xl p-6 border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${club.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <club.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {club.role}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {club.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {club.period}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {club.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
