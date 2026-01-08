import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground text-center"
        >
          © {new Date().getFullYear()} Hari Prasath M. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
