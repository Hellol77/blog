"use client";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-3 origin-top-left bg-red-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
