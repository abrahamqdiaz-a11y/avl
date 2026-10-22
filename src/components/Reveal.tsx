import { m, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Render as a list item when used inside a <ul>/<ol>. */
  as?: "div" | "li";
};

/** Fades and lifts its children into view once, as they scroll on screen. */
export default function Reveal({ delay = 0, as = "div", ...rest }: RevealProps) {
  const animation = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  if (as === "li") return <m.li {...animation} {...(rest as HTMLMotionProps<"li">)} />;
  return <m.div {...animation} {...rest} />;
}
