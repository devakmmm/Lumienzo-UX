import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    if (word === currentWord) {
      startAnimation();
    } else {
      setCurrentWord(word);
      setIsAnimating(true);
    }
  }, [currentWord, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, duration);

    return () => clearInterval(interval);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          rotateX: -90,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
          rotateX: 90,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={cn("z-10 inline-block relative", className)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {currentWord.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.02,
              duration: 0.3,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
