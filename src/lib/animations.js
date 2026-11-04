import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ANIMATION_CATEGORIES = {
  entrance: {
    label: "Entrance Animations",
    options: [
      { id: "fade-in", label: "Fade In" },
      { id: "fade-up", label: "Fade Up" },
      { id: "fade-down", label: "Fade Down" },
      { id: "fade-left", label: "Fade Left" },
      { id: "fade-right", label: "Fade Right" },
      { id: "slide-up", label: "Slide Up" },
      { id: "slide-down", label: "Slide Down" },
      { id: "slide-left", label: "Slide Left" },
      { id: "slide-right", label: "Slide Right" },
      { id: "zoom-in", label: "Zoom In" },
      { id: "zoom-out", label: "Zoom Out" },
      { id: "rotate-in", label: "Rotate In" },
      { id: "flip-in", label: "Flip In" },
      { id: "bounce-in", label: "Bounce In" },
      { id: "blur-in", label: "Blur In" },
      { id: "clip-reveal", label: "Clip Reveal" },
    ],
  },
  scroll: {
    label: "Scroll Animations",
    options: [
      { id: "reveal-on-scroll", label: "Reveal on Scroll" },
      { id: "fade-on-scroll", label: "Fade on Scroll" },
      { id: "parallax", label: "Parallax" },
      { id: "scale-on-scroll", label: "Scale on Scroll" },
      { id: "pin-section", label: "Pin Section" },
      { id: "stagger-children", label: "Stagger Children" },
      { id: "text-reveal", label: "Text Reveal" },
      { id: "image-reveal", label: "Image Reveal" },
    ],
  },
  hover: {
    label: "Hover Animations",
    options: [
      { id: "scale", label: "Scale" },
      { id: "lift", label: "Lift" },
      { id: "glow", label: "Glow" },
      { id: "rotate", label: "Rotate" },
      { id: "image-zoom", label: "Image Zoom" },
      { id: "underline-reveal", label: "Underline Reveal" },
      { id: "button-shine", label: "Button Shine" },
    ],
  },
  text: {
    label: "Text Animations",
    options: [
      { id: "typing-effect", label: "Typing Effect" },
      { id: "word-by-word", label: "Word by Word Reveal" },
      { id: "character-reveal", label: "Character Reveal" },
      { id: "gradient-text", label: "Gradient Text" },
      { id: "counter-animation", label: "Counter Animation" },
    ],
  },
};

export const EASING_OPTIONS = [
  { id: "power2.out", label: "Smooth (Power2 Out)" },
  { id: "power3.out", label: "Strong (Power3 Out)" },
  { id: "power4.out", label: "Ultra Smooth (Power4 Out)" },
  { id: "back.out(1.7)", label: "Bouncy (Back Out)" },
  { id: "elastic.out(1, 0.3)", label: "Elastic" },
  { id: "bounce.out", label: "Bounce" },
  { id: "none", label: "Linear" },
];

export function runGsapAnimation(elementOrElements, config = {}) {
  if (!elementOrElements || typeof window === "undefined") return null;

  // Check prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  // Check mobile disable
  if (config.disableOnMobile && window.innerWidth < 768) {
    return null;
  }

  // 1. Resolve Targets into Array of DOM elements
  let targets = [];
  if (Array.isArray(elementOrElements)) {
    targets = elementOrElements;
  } else if (elementOrElements instanceof NodeList || (typeof elementOrElements.forEach === "function" && !elementOrElements.nodeType)) {
    targets = Array.from(elementOrElements);
  } else if (elementOrElements.nodeType) {
    // Single DOM element
    if (config.applyToChildren) {
      // Find substantive child elements inside section
      const candidates = elementOrElements.querySelectorAll(
        "h1, h2, h3, h4, h5, p, button, a.inline-flex, a.px-6, a.px-7, a.px-8, img, .anim-target, [data-element-id]"
      );
      if (candidates.length > 0) {
        targets = Array.from(candidates);
      } else {
        targets = [elementOrElements];
      }
    } else {
      targets = [elementOrElements];
    }
  }

  if (targets.length === 0) return null;

  // Reset any existing tweens on targets
  gsap.killTweensOf(targets);
  gsap.set(targets, { clearProps: "transform,opacity,filter,clipPath" });

  const animType = config.type || "fade-up";
  const duration = parseFloat(config.duration) || 0.8;
  const delay = parseFloat(config.delay) || 0;
  const ease = config.easing || "power2.out";
  const stagger = parseFloat(config.stagger) || 0.12;
  const trigger = config.trigger || "scroll";
  const once = config.once !== false;

  let fromVars = {};
  let toVars = {
    duration,
    delay,
    ease,
    clearProps: "transform,opacity,filter,clipPath",
  };

  if (targets.length > 1) {
    toVars.stagger = stagger;
  }

  if (config.repeat && config.repeat !== 0) {
    toVars.repeat = config.repeat;
    toVars.yoyo = true;
  }

  // 2. Configure Animation Types
  switch (animType) {
    // Entrance
    case "fade-in":
      fromVars = { opacity: 0 };
      toVars = { ...toVars, opacity: 1 };
      break;
    case "fade-up":
      fromVars = { opacity: 0, y: 45 };
      toVars = { ...toVars, opacity: 1, y: 0 };
      break;
    case "fade-down":
      fromVars = { opacity: 0, y: -45 };
      toVars = { ...toVars, opacity: 1, y: 0 };
      break;
    case "fade-left":
      fromVars = { opacity: 0, x: 55 };
      toVars = { ...toVars, opacity: 1, x: 0 };
      break;
    case "fade-right":
      fromVars = { opacity: 0, x: -55 };
      toVars = { ...toVars, opacity: 1, x: 0 };
      break;
    case "slide-up":
      fromVars = { y: 90, opacity: 0 };
      toVars = { ...toVars, y: 0, opacity: 1 };
      break;
    case "slide-down":
      fromVars = { y: -90, opacity: 0 };
      toVars = { ...toVars, y: 0, opacity: 1 };
      break;
    case "slide-left":
      fromVars = { x: 90, opacity: 0 };
      toVars = { ...toVars, x: 0, opacity: 1 };
      break;
    case "slide-right":
      fromVars = { x: -90, opacity: 0 };
      toVars = { ...toVars, x: 0, opacity: 1 };
      break;
    case "zoom-in":
      fromVars = { scale: 0.7, opacity: 0 };
      toVars = { ...toVars, scale: 1, opacity: 1 };
      break;
    case "zoom-out":
      fromVars = { scale: 1.3, opacity: 0 };
      toVars = { ...toVars, scale: 1, opacity: 1 };
      break;
    case "rotate-in":
      fromVars = { rotation: -18, opacity: 0, scale: 0.85 };
      toVars = { ...toVars, rotation: 0, opacity: 1, scale: 1 };
      break;
    case "flip-in":
      fromVars = { rotationX: 70, opacity: 0, transformPerspective: 600 };
      toVars = { ...toVars, rotationX: 0, opacity: 1 };
      break;
    case "bounce-in":
      fromVars = { scale: 0.25, opacity: 0 };
      toVars = { ...toVars, scale: 1, opacity: 1, ease: "bounce.out" };
      break;
    case "blur-in":
      fromVars = { filter: "blur(16px)", opacity: 0 };
      toVars = { ...toVars, filter: "blur(0px)", opacity: 1 };
      break;
    case "clip-reveal":
      fromVars = { clipPath: "inset(0 100% 0 0)", opacity: 0 };
      toVars = { ...toVars, clipPath: "inset(0 0% 0 0)", opacity: 1 };
      break;

    // Scroll
    case "reveal-on-scroll":
      fromVars = { opacity: 0, y: 35 };
      toVars = { ...toVars, opacity: 1, y: 0 };
      break;
    case "fade-on-scroll":
      fromVars = { opacity: 0.15 };
      toVars = { ...toVars, opacity: 1 };
      break;
    case "parallax":
      fromVars = { y: 50 };
      toVars = { ...toVars, y: -20, ease: "none" };
      break;
    case "scale-on-scroll":
      fromVars = { scale: 0.85, opacity: 0.3 };
      toVars = { ...toVars, scale: 1, opacity: 1 };
      break;
    case "pin-section":
      fromVars = { opacity: 0, scale: 0.95 };
      toVars = { ...toVars, opacity: 1, scale: 1 };
      break;
    case "stagger-children":
      fromVars = { opacity: 0, y: 40 };
      toVars = { ...toVars, opacity: 1, y: 0, stagger: stagger || 0.15 };
      break;
    case "text-reveal":
      fromVars = { clipPath: "inset(100% 0 0 0)", y: 30, opacity: 0 };
      toVars = { ...toVars, clipPath: "inset(0% 0 0 0)", y: 0, opacity: 1 };
      break;
    case "image-reveal":
      fromVars = { scale: 1.25, clipPath: "inset(0 100% 0 0)", opacity: 0 };
      toVars = { ...toVars, scale: 1, clipPath: "inset(0 0% 0 0)", opacity: 1 };
      break;

    // Hover
    case "scale":
      fromVars = { scale: 1 };
      toVars = { ...toVars, scale: 1.08 };
      break;
    case "lift":
      fromVars = { y: 0 };
      toVars = { ...toVars, y: -12, ease: "power2.out" };
      break;
    case "glow":
      fromVars = { filter: "drop-shadow(0 0 0px rgba(27,111,214,0))" };
      toVars = { ...toVars, filter: "drop-shadow(0 0 16px rgba(27,111,214,0.9))" };
      break;
    case "rotate":
      fromVars = { rotation: 0 };
      toVars = { ...toVars, rotation: 8, scale: 1.05 };
      break;
    case "image-zoom":
      fromVars = { scale: 1 };
      toVars = { ...toVars, scale: 1.15 };
      break;
    case "underline-reveal":
      fromVars = { y: 0 };
      toVars = { ...toVars, y: -4 };
      break;
    case "button-shine":
      fromVars = { opacity: 0.6, scale: 0.96 };
      toVars = { ...toVars, opacity: 1, scale: 1.04, yoyo: true, repeat: 1 };
      break;

    // Text
    case "typing-effect":
      fromVars = { opacity: 0, x: -15 };
      toVars = { ...toVars, opacity: 1, x: 0, stagger: 0.08 };
      break;
    case "word-by-word":
      fromVars = { opacity: 0, y: 25 };
      toVars = { ...toVars, opacity: 1, y: 0, stagger: 0.12 };
      break;
    case "character-reveal":
      fromVars = { opacity: 0, y: 20, scale: 0.8 };
      toVars = { ...toVars, opacity: 1, y: 0, scale: 1, stagger: 0.04 };
      break;
    case "gradient-text":
      fromVars = { opacity: 0.7, scale: 0.98 };
      toVars = { ...toVars, opacity: 1, scale: 1.02, yoyo: true, repeat: 1 };
      break;
    case "counter-animation":
      fromVars = { opacity: 0, scale: 0.5 };
      toVars = { ...toVars, opacity: 1, scale: 1, ease: "back.out(1.7)" };
      break;

    default:
      fromVars = { opacity: 0, y: 35 };
      toVars = { ...toVars, opacity: 1, y: 0 };
      break;
  }

  // 3. Execution (ScrollTrigger vs Load/Preview)
  if (trigger === "scroll" && typeof ScrollTrigger !== "undefined" && elementOrElements.nodeType) {
    return gsap.fromTo(targets, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: elementOrElements,
        start: config.scrollStart || "top 85%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });
  } else {
    return gsap.fromTo(targets, fromVars, toVars);
  }
}
