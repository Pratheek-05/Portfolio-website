import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen flex flex-col justify-center py-24 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
