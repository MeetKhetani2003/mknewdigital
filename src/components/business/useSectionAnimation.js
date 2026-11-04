import { useEffect, useRef } from "react";
import gsap from "gsap";
import { runGsapAnimation } from "@/lib/animations";

export function useSectionAnimation(section, isEditing = false) {
  const containerRef = useRef(null);

  // 1. Live Dynamic Section Styles (Background, Spacing, Text Color, Alignment)
  useEffect(() => {
    if (!containerRef.current) return;
    const styles = section?.styles || {};

    // Background color
    if (styles.backgroundColor && styles.backgroundColor !== "transparent") {
      containerRef.current.style.setProperty("background-color", styles.backgroundColor, "important");
    } else {
      containerRef.current.style.removeProperty("background-color");
    }

    // Text color
    if (styles.textColor && styles.textColor !== "inherit") {
      containerRef.current.style.setProperty("color", styles.textColor, "important");
    } else {
      containerRef.current.style.removeProperty("color");
    }

    // Vertical spacing / padding
    if (styles.paddingTop) {
      const paddingMap = {
        "py-4": "1rem",
        "py-8": "2rem",
        "py-12": "3rem",
        "py-16": "4rem",
        "py-20": "5rem",
        "py-24": "6rem",
        "py-28": "7rem",
        "py-32": "8rem",
      };
      const padVal = paddingMap[styles.paddingTop] || styles.paddingTop;
      if (padVal) {
        containerRef.current.style.setProperty("padding-top", padVal, "important");
        containerRef.current.style.setProperty("padding-bottom", padVal, "important");
      }
    }

    // Text alignment
    if (styles.alignment) {
      const alignVal = styles.alignment.replace("text-", "");
      containerRef.current.style.setProperty("text-align", alignVal, "important");
    }
  }, [section?.styles]);

  // 2. GSAP Animation Handling
  useEffect(() => {
    if (!containerRef.current) return;
    if (isEditing) return; // In visual builder canvas, don't lock transforms unless previewed

    const animConfig = section?.animations || {};
    if (!animConfig.type || animConfig.type === "none") return;

    const ctx = gsap.context(() => {
      runGsapAnimation(containerRef.current, animConfig);
    }, containerRef);

    return () => ctx.revert();
  }, [section?.animations, isEditing]);

  return containerRef;
}
