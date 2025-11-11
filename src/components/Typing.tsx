"use client";

import React from "react";

type TypingProps = {
  text: string;
  speedMs?: number;
  pauseMs?: number;
  erase?: boolean;
  loop?: boolean;
  className?: string;
};

export function Typing({
  text,
  speedMs = 60,
  pauseMs = 1200,
  erase = true,
  loop = true,
  className,
}: TypingProps) {
  const [output, setOutput] = React.useState<string>("");
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const clear = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setOutput(text);
      return () => clear();
    }

    let index = 0;
    let direction: "typing" | "erasing" = "typing";

    const step = () => {
      if (direction === "typing") {
        index = Math.min(index + 1, text.length);
        setOutput(text.slice(0, index));
        if (index === text.length) {
          if (!loop) return;
          timeoutRef.current = window.setTimeout(() => {
            if (erase) {
              direction = "erasing";
              step();
            } else {
              // restart without erasing
              index = 0;
              setOutput("");
              step();
            }
          }, pauseMs);
          return;
        }
        timeoutRef.current = window.setTimeout(step, speedMs);
      } else {
        // erasing
        index = Math.max(index - 1, 0);
        setOutput(text.slice(0, index));
        if (index === 0) {
          timeoutRef.current = window.setTimeout(() => {
            direction = "typing";
            step();
          }, pauseMs / 2);
          return;
        }
        timeoutRef.current = window.setTimeout(step, Math.max(40, speedMs * 0.6));
      }
    };

    // start cycle
    setOutput("");
    step();

    return () => clear();
  }, [text, speedMs, pauseMs, erase, loop]);

  return (
    <span aria-label={text} className={className}>
      {output}
      <span className="inline-block w-[1ch] -mb-[2px] animate-pulse">|</span>
    </span>
  );
}


