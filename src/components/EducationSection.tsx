import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. Integrated Data Science",
    status: "Pursuing – 4th Year",
    institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
    grade: "CGPA: 8.31",
    period: "Jun 2022 – Jun 2027",
    highlight: true,
  },
  {
    degree: "Higher Secondary – Bio-Math (CBSE)",
    status: null,
    institution: "PSG Public School, Coimbatore",
    grade: "Grade: 83%",
    period: "Jun 2020 – Jun 2022",
    highlight: false,
  },
  {
    degree: "Secondary (CBSE)",
    status: null,
    institution: "PSG Public School, Coimbatore",
    grade: "Grade: 77%",
    period: "Jun 2017 – Jun 2020",
    highlight: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey in data science and technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Education items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right md:ml-0"
                      : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-auto ${
                      index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                    } top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.highlight
                        ? "bg-gradient-to-br from-primary to-secondary"
                        : "bg-muted border border-border"
                    }`}
                  >
                    <GraduationCap
                      className={`w-4 h-4 ${
                        item.highlight ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`glass-card p-6 ${
                      item.highlight ? "glow-border gradient-border" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.status && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-display font-semibold text-lg mb-1 ${
                        item.highlight ? "gradient-text" : "text-foreground"
                      }`}
                    >
                      {item.degree}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-3">
                      {item.institution}
                    </p>

                    <div
                      className={`flex items-center gap-4 text-sm ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1 text-primary">
                        <Award className="w-4 h-4" />
                        {item.grade}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
