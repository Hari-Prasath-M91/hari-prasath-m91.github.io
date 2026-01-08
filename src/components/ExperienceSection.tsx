import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const experienceData = [
  {
    role: "Team Lead",
    type: "Part-time",
    company: "Sstudize",
    location: "Remote, India",
    period: "Jul 2025 – Present",
    current: true,
    responsibilities: [
      "Leading projects from concept design → UX/UI → web development → deployment",
      "Managing multiple LLM-powered AI agents for intelligent study roadmap optimization",
      "Ensuring tight alignment between agent logic, user flows, and production execution",
    ],
    highlight: "Promoted from intern to team lead – a leadership milestone",
  },
  {
    role: "LLM Intern",
    type: "Internship",
    company: "Sstudize",
    location: "Remote, India",
    period: "Apr 2025 – Jul 2025",
    current: false,
    responsibilities: [
      "Built and deployed LLM-powered AI agents for JEE study roadmap optimization",
      "Designed agentic workflows to improve preparation efficiency and student experience",
      "Contributed to full-stack development and system architecture decisions",
    ],
    highlight: null,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-secondary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building AI-powered systems and leading teams to deliver impactful solutions
            </p>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`glass-card glow-border p-8 relative overflow-hidden ${
                  exp.current ? "gradient-border" : ""
                }`}
              >
                {/* Current indicator */}
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Current
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span>{exp.period}</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowUpRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                {exp.highlight && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{exp.highlight}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
