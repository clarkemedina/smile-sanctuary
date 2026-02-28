import { motion, type MotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = forwardRef<HTMLDivElement, FadeInSectionProps>(
  ({ children, className = "", delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

FadeInSection.displayName = "FadeInSection";

export default FadeInSection;
