"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const createItemVariants = (duration = 0.01, ease = "easeOut") => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease },
  },
});

const createPresetVariants = (duration, ease) => ({
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration, ease },
      },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: {
        x: [-5, 5, -5, 5, 0],
        transition: { duration: duration * 2, ease },
      },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease },
      },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, ease },
      },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease },
      },
    },
  },
});

const AnimationComponent = React.memo(({ word, variants, per }) => {
  if (per === "word") {
    return (
      <motion.span
        aria-hidden="true"
        variants={variants}
        className="inline-block whitespace-pre"
      >
        {word}
      </motion.span>
    );
  }
  return (
    <span className="inline-block whitespace-pre">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={`char-${charIndex}`}
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
});

AnimationComponent.displayName = "AnimationComponent";

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  onAnimationComplete,
  threshold = 0.1,
  duration = 0.5, // New prop for animation duration
  ease = "easeOut", // New prop for easing function
}) {
  const words = children.split(/(\S+)/);
  const MotionTag = motion[as];
  const presetVariants = createPresetVariants(duration, ease);
  const selectedVariants = preset
    ? presetVariants[preset]
    : {
        container: defaultContainerVariants,
        item: createItemVariants(duration, ease),
      };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const delayedContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible?.transition,
        delayChildren: delay,
        staggerChildren: duration / 10, // Adjust stagger based on duration
      },
    },
  };

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={controls}
      aria-label={children}
      variants={delayedContainerVariants}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, wordIndex) => (
        <AnimationComponent
          key={`word-${wordIndex}`}
          word={word}
          variants={itemVariants}
          per={per}
        />
      ))}
    </MotionTag>
  );
}
