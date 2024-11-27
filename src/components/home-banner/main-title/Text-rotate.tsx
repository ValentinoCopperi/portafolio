import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className=" inline-block">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          style={{
            color: '#A002FF',
            textShadow: '   0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
            marginLeft : '3px'  
          }}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
