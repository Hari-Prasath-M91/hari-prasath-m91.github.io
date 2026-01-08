import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";

const projectsData = [
  {
    title: "Smart PDF Storage and Search Engine",
    period: "Jan 2025 – Feb 2025",
    tech: ["Streamlit", "LangChain", "Pinecone", "Ollama"],
    description:
      "Built a RAG-based system using LLMs and vector databases for fast semantic search and information extraction from unstructured PDFs.",
    highlights: [
      "Enables fast semantic search and information extraction",
      "Saves users 90%+ time compared to manual document search",
      "Clean, user-friendly Streamlit interface",
    ],
    featured: true,
    impact: "90%+ time saved",
    github: "https://github.com/Hari-Prasath-M91/AI-pdf-search",
  },
  {
    title: "Darknet Traffic Classification",
    period: "Feb 2025 – Mar 2025",
    tech: ["NumPy", "Pandas", "Scikit-learn"],
    description:
      "Research project combining two darknet datasets to create an enhanced, generalized dataset for traffic classification.",
    highlights: [
      "Experimented with 21 different ML models",
      "Created enhanced, generalized dataset",
      "Ongoing work aimed at research paper publication",
    ],
    featured: true,
    impact: "21 models tested",
    github: "https://github.com/Hari-Prasath-M91/Darknet-Classification/",
  },
  {
    title: "CIFAR-10 Image Classification Model",
    period: "Dec 2024",
    tech: ["PyTorch"],
    description:
      "Fine-tuned a ResNet-50 architecture using transfer learning with mixed-precision training and gradient clipping.",
    highlights: [
      "Transfer learning with ResNet-50",
      "Mixed-precision training optimization",
      "Gradient clipping for stable training",
    ],
    featured: false,
    impact: null,
    github: "https://github.com/Hari-Prasath-M91/cifar10-resnet50-intel",
  },
  {
    title: "Property Management System",
    period: "Jul 2024 – Sep 2024",
    tech: ["Python", "MySQL", "Streamlit"],
    description:
      "Full-stack property management platform enabling buying, selling, and leasing with admin-managed workflows.",
    highlights: [
      "Full-stack property management platform",
      "Admin-managed workflows for transactions",
      "Reduced user effort and time by over 50%",
    ],
    featured: false,
    impact: "50%+ effort reduction",
    github: "https://github.com/Hari-Prasath-M91/Property-Management-System",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
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
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selected work showcasing my expertise in AI, ML, and system design
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`glass-card glow-border p-8 group relative overflow-hidden ${
                  project.featured ? "gradient-border" : ""
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                      Featured
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Impact badge */}
                {project.impact && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {project.impact}
                    </span>
                  </div>
                )}

                {/* Tech stack & GitHub link */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
