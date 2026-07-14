"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useState, type PointerEvent, type ReactNode } from "react";
import { resolvedProofDeck as proofDeck } from "./content";

const cardTransforms = [
  { x: -34, y: 18, rotate: -4.8 },
  { x: 28, y: -10, rotate: 3.5 },
  { x: -10, y: -24, rotate: -1.6 },
  { x: 40, y: 24, rotate: 5.2 },
];

export function ProofDeck() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 24, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 24, mass: 0.6 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [2.8, -2.8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3.8, 3.8]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="proof-deck-shell">
      <motion.div
        className="proof-deck"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      >
        {proofDeck.map((card, index) => {
          const transform = cardTransforms[index];
          const isActive = active === index;
          return (
            <motion.a
              className="proof-card"
              data-index={String(index + 1).padStart(2, "0")}
              href={card.href}
              key={card.caseSlug}
              onFocus={() => setActive(index)}
              onPointerEnter={() => setActive(index)}
              initial={false}
              animate={{
                x: transform.x + (isActive && !reduceMotion ? 5 : 0),
                y: transform.y + (isActive && !reduceMotion ? -15 : 0),
                rotate: transform.rotate + (isActive && !reduceMotion ? transform.rotate * -0.35 : 0),
                scale: isActive && !reduceMotion ? 1.035 : 1,
                zIndex: isActive ? 8 : 4 - index,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.65 }}
            >
              <Image alt={`${card.label} proof`} src={card.image} width={760} height={560} priority sizes="(max-width: 880px) 78vw, 32vw" />
              <span>{card.kind}</span>
            </motion.a>
          );
        })}
      </motion.div>

      <div className="proof-deck-caption" aria-live="polite">
        <span>{String(active + 1).padStart(2, "0")} / {String(proofDeck.length).padStart(2, "0")}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={proofDeck[active].label}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <strong>{proofDeck[active].label}</strong>
            <p>{proofDeck[active].kind} / {proofDeck[active].proof}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="proof-deck-mobile" aria-label="Swipeable proof deck">
        {proofDeck.map((card, index) => (
          <a href={card.href} className="proof-mobile-card" key={`mobile-${card.caseSlug}`}>
            <Image alt={`${card.label} proof`} src={card.image} width={760} height={560} sizes="78vw" />
            <span>{String(index + 1).padStart(2, "0")} / {card.kind}</span>
            <strong>{card.label}</strong>
            <p>{card.proof}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -10%" }}
      transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FieldImageReveal({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="field-image-motion"
      initial={reduceMotion ? false : { opacity: 0, scale: 1.018 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
