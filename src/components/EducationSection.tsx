import { GraduationCap, Calendar, Award, School } from "lucide-react";

const EducationCard = ({
  degree,
  field,
  institute,
  duration,
  score,
  subjects,
  icon: Icon,
}) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft relative">
      <div className="flex items-start gap-6">
        <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl items-center justify-center flex-shrink-0 shadow-glow">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {degree}
            </h3>
            {field && (
              <span className="px-3 py-1 bg-mint/30 text-foreground rounded-full text-sm font-medium">
                {field}
              </span>
            )}
          </div>

          <p className="text-lg text-primary font-semibold mb-2">
            {institute}
          </p>

          <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
            {score && (
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                {score}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {subjects.map((sub, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-lavender/20 rounded-full text-sm text-foreground"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-lavender/30 text-primary rounded-full text-sm font-medium mb-4">
            📚 Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Academic Journey
          </h2>
        </div>

        <div className="relative space-y-10">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-lavender hidden md:block" />

          {/* B.Tech */}
          <EducationCard
            degree="Bachelor of Technology (B.Tech.)"
            field="Computer Science & Engineering"
            institute="Indian Institute of Information Technology, Vadodara"
            duration="2023 – 2027"
            score="CPI: 7.76 / 10"
            icon={GraduationCap}
            subjects={[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Computer Networks",
                "Operating Systems",
            ]}
          />

          {/* Intermediate */}
          <EducationCard
            degree="Intermediate"
            institute="Shirdi Sai Public School Moradabad"
            duration="2022 – 2023"
            score="Percentage: 96%"
            icon={School}
            subjects={[
              "Physics",
              "Chemistry",
              "Mathematics",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
