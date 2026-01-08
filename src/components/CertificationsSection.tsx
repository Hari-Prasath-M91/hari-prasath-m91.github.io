import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Calendar } from "lucide-react";
const certificationsData = [{
  title: "Supervised Machine Learning: Regression & Classification",
  issuer: "DeepLearning.AI",
  date: "Feb 2025",
  logo: "deeplearning",
  link: "https://www.coursera.org/account/accomplishments/verify/UWJEOY874SQA"
}, {
  title: "Introduction to Streamlit",
  issuer: "Great Learning",
  date: "Oct 2024",
  logo: "greatlearning",
  link: "https://drive.google.com/file/d/11IJB3yZ60X2gYR3IVweg66CwHHtwf_hm/view"
}, {
  title: "Data Analytics with Excel",
  issuer: "Amrita Vishwa Vidyapeetham",
  date: "Feb 2024",
  logo: "amrita",
  link: "https://drive.google.com/file/d/1SabYyyHY_lK8riKz059eeOtKGScR1hZg/view"
}, {
  title: "Data Science with Python",
  issuer: "Coincent",
  date: "May 2023",
  logo: "coincent",
  link: "https://drive.google.com/file/d/1d-ILtOLqcR9XYhzFMf2M1PcOLXb32-JP/view"
}];

// Custom logo components for each issuer
const IssuerLogo = ({
  type
}: {
  type: string;
}) => {
  switch (type) {
    case "deeplearning":
      return <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            <path d="M20 4C12 4 6 10 6 18c0 5 2 9 6 12-2-2-3-5-3-8 0-6 5-11 11-11s11 5 11 11c0 3-1 6-3 8 4-3 6-7 6-12 0-8-6-14-14-14z" fill="#E53935" />
            <path d="M20 8c-5 0-10 5-10 10 0 4 2 7 5 9-1-1-2-4-2-6 0-4 3-8 7-8s7 4 7 8c0 2-1 5-2 6 3-2 5-5 5-9 0-5-5-10-10-10z" fill="#E53935" />
            <circle cx="20" cy="21" r="5" fill="#E53935" />
          </svg>
        </div>;
    case "greatlearning":
      return <div className="w-12 h-12 rounded-lg bg-[#FF9800]/10 flex items-center justify-center">
          <span className="font-bold text-lg text-[#FF9800]">GL</span>
        </div>;
    case "amrita":
      return <div className="w-12 h-12 rounded-lg bg-[#1565C0]/10 flex items-center justify-center">
          <span className="font-bold text-sm text-[#1565C0]">AVV</span>
        </div>;
    case "coincent":
      return <div className="w-12 h-12 rounded-full bg-[#0288D1]/10 flex items-center justify-center border-2 border-[#0288D1]/30">
          <span className="font-bold text-lg text-[#0288D1]">C</span>
        </div>;
    default:
      return null;
  }
};
const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating my skills and knowledge
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => <motion.a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.1 + index * 0.1
          }} whileHover={{
            y: -5
          }} className="glass-card glow-border p-6 group flex gap-4 items-start cursor-pointer">
                {/* Logo */}
                <IssuerLogo type={cert.logo} />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3 className="font-display font-semibold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-primary text-sm mb-2">{cert.issuer}</p>

                  {/* Date */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    Issued {cert.date}
                  </div>
                </div>

                {/* External link icon */}
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </motion.a>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CertificationsSection;