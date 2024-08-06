"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function MyApproach() {
  return (
    <div className="min-h-screen pt-10">
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Discuss" icon={<AceternityIcon text="Phase 1"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Design" icon={<AceternityIcon text="Phase 2"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-"
            colors={[
              [236, 142, 153],
              [232, 121, 149],
            ]}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Develop" icon={<AceternityIcon text="Phase 3"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-10 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 text-center font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-10 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({text}) => {
  return (
    <>
		<p className="bg-white/20 rounded-sm text-xl px-3 py-2 relative">
		<Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
{text}</p>
	</>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
