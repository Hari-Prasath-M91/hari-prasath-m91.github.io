import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  Brain,
  Layers,
  Sparkles,
  BarChart,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "MATLAB"],
  },
  {
    icon: Database,
    title: "Data Analysis & Processing",
    skills: ["NumPy", "Pandas", "SciPy", "Excel"],
  },
  {
    icon: Brain,
    title: "Machine Learning & Statistics",
    skills: ["Scikit-learn", "Statsmodels"],
  },
  {
    icon: Layers,
    title: "Deep Learning",
    skills: ["PyTorch"],
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "Vector Databases"],
  },
  {
    icon: BarChart,
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    icon: Globe,
    title: "Web & Deployment",
    skills: ["Streamlit", "HTML (Basics)", "CI/CD", "Docker", "Web Deployment"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build intelligent systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass-card glow-border p-6 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                      }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional visual - Skill cloud/emphasis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">Core Focus Areas</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Agentic AI", size: "lg" },
                { label: "LLMs", size: "lg" },
                { label: "RAG Systems", size: "md" },
                { label: "PyTorch", size: "md" },
                { label: "ML Pipelines", size: "md" },
              ].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 rounded-full glass-card border border-primary/30 font-display font-medium ${
                    item.size === "lg"
                      ? "text-lg gradient-text"
                      : item.size === "md"
                      ? "text-base text-foreground"
                      : "text-sm text-muted-foreground"
                  }`}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
