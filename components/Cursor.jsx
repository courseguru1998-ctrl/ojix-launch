"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hot, setHot] = useState(false);
  const [label, setLabel] = useState("Go");
  const [touch, setTouch] = useState(true);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 260, damping: 28 });
  const ry = useSpring(my, { stiffness: 260, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setTouch(false);
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e) => {
      const t = e.target.closest("a,button,[data-cursor]");
      if (t) { setHot(true); setLabel(t.dataset.cursor || "Go"); }
      else setHot(false);
    };
    addEventListener("mousemove", move);
    addEventListener("mouseover", over);
    return () => { removeEventListener("mousemove", move); removeEventListener("mouseover", over); };
  }, [mx, my]);

  if (touch) return null;
  return (
    <>
      <motion.div style={{ x: mx, y: my, position: "fixed", top: -3, left: -3, width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", zIndex: 9999, pointerEvents: "none" }} />
      <motion.div style={{ x: rx, y: ry, position: "fixed", zIndex: 9999, pointerEvents: "none", top: 0, left: 0 }}>
        <motion.div
          animate={{ width: hot ? 72 : 36, height: hot ? 72 : 36, x: hot ? -36 : -18, y: hot ? -36 : -18, backgroundColor: hot ? "rgba(3,105,161,.08)" : "rgba(3,105,161,0)" }}
          transition={{ duration: 0.25 }}
          style={{ border: "1px solid rgba(3,105,161,.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <motion.span animate={{ opacity: hot ? 1 : 0 }} style={{ font: "500 9px Roboto", letterSpacing: ".14em", color: "var(--color-accent)", textTransform: "uppercase" }}>
            {label}
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
