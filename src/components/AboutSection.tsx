import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lightbulb, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "System-Level Thinking",
    description:
      "Approaching problems holistically, understanding how components interact and designing solutions that scale.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "Breaking down complex challenges into manageable pieces and finding elegant solutions.",
  },
  {
    icon: Settings,
    title: "Reliability & Flexibility",
    description:
      "Building robust systems while adapting quickly to changing requirements and new technologies.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "Working effectively both independently and in teams, communicating technical concepts clearly.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate technologist dedicated to building intelligent systems
              that solve real-world problems.
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a builder at heart with a strong foundation in{" "}
                <span className="text-primary">predictive modeling</span>,{" "}
                <span className="text-secondary">analytics</span>, and{" "}
                <span className="text-primary">machine learning</span>. My journey
                in tech has been driven by curiosity and a desire to understand
                how complex systems work at their core.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in designing and implementing agentic AI
                architectures—systems that can reason, plan, and execute
                autonomously. My experience spans from building LLM-powered
                automation pipelines to developing production-grade ML models.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets me apart is my ability to adapt to complex, evolving
                challenges. Whether it's debugging a tricky edge case or scaling
                a system to handle new requirements, I approach each problem with
                patience and persistence.
              </p>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2+", label: "Years Learning AI/ML" },
                { value: "5+", label: "Projects Completed" },
                { value: "21", label: "ML Models Used" },
                { value: "1", label: "Research Paper in Progress" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card glow-border p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card glow-border p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
