import React from "react";
import { motion } from "framer-motion";
import "./MovingBorderDemo.css";

const MovingBorderButton = ({
  children,
  duration = 2000,
  roundness = 10,
  containerClassName,
  borderClassName,
  className,
  onClick,
}) => {
  return (
    <div
      className={`relative cursor-pointer group/btn overflow-hidden rounded-md ${
        containerClassName || ""
      }`}
      onClick={onClick}
    >
      {/* Moving border element */}
      <motion.span
        className={`absolute inset-0 rounded-md border bg-transparent ${
          borderClassName || "border-slate-800"
        }`}
        style={{ borderRadius: `${roundness}px` }}
        animate={{
          // Create the moving border effect
          // We move a <span> element from different sides to make it look
          // like the border is moving
          left: ["0%", "0%", "100%", "100%", "0%"],
          top: ["0%", "100%", "100%", "0%", "0%"],
          scale: [1, 1, 1, 1, 1],
        }}
        transition={{
          duration: duration / 1000,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Main button */}
      <div
        className={`relative px-6 py-3 rounded-md border border-transparent
                    bg-white hover:bg-slate-50 
                    text-slate-800 transition-colors 
                    flex justify-center items-center ${className || ""}`}
        style={{ borderRadius: `${roundness}px` }}
      >
        {children}
      </div>
    </div>
  );
};

const MovingBorderDemo = () => {
  return (
    <div className="moving-border-demo">
      <h1>Moving Border Buttons</h1>
      <p className="subtitle">
        Beautiful animated borders that move around buttons
      </p>

      <div className="button-grid">
        {/* Default blue moving border */}
        <div className="button-card">
          <h3>Default Blue</h3>
          <MovingBorderButton
            borderClassName="border-blue-500"
            onClick={() => console.log("Button 1 clicked")}
          >
            Hover Me
          </MovingBorderButton>
        </div>

        {/* Pink border with faster animation */}
        <div className="button-card">
          <h3>Fast Pink Border</h3>
          <MovingBorderButton
            borderClassName="border-pink-500"
            duration={1500}
            roundness={6}
            onClick={() => console.log("Button 2 clicked")}
          >
            Fast Moving Border
          </MovingBorderButton>
        </div>

        {/* Green glowing border */}
        <div className="button-card">
          <h3>Glowing Green</h3>
          <MovingBorderButton
            borderClassName="border-green-500 border-2 shadow-green"
            duration={3000}
            roundness={20}
            onClick={() => console.log("Button 3 clicked")}
          >
            Glowing Border
          </MovingBorderButton>
        </div>

        {/* Rainbow gradient background */}
        <div className="button-card">
          <h3>Rainbow Gradient</h3>
          <MovingBorderButton
            containerClassName="bg-gradient-rainbow p-1"
            borderClassName="border-transparent"
            className="bg-white hover-bg-light"
            duration={2500}
            onClick={() => console.log("Button 4 clicked")}
          >
            Rainbow Background
          </MovingBorderButton>
        </div>

        {/* Large button with slower animation */}
        <div className="button-card">
          <h3>Slow Amber</h3>
          <MovingBorderButton
            borderClassName="border-amber-500 border-2"
            className="px-8 py-4 font-bold text-lg"
            duration={4000}
            roundness={12}
            onClick={() => console.log("Button 5 clicked")}
          >
            Learn More →
          </MovingBorderButton>
        </div>

        {/* Dark mode style */}
        <div className="button-card">
          <h3>Dark Mode</h3>
          <MovingBorderButton
            containerClassName="bg-slate-900"
            borderClassName="border-indigo-500"
            className="bg-slate-800 hover-bg-slate-700 text-white"
            onClick={() => console.log("Button 6 clicked")}
          >
            Dark Mode Button
          </MovingBorderButton>
        </div>
      </div>

      <div className="info-box">
        <h2>About Moving Border Buttons</h2>
        <p>
          These buttons use Framer Motion to create a moving border effect that
          travels around the button. The effect is created by animating an
          absolute-positioned span element that follows a specific path.
        </p>
        <p>You can customize:</p>
        <ul>
          <li>Border color and style</li>
          <li>Animation speed (duration)</li>
          <li>Corner roundness</li>
          <li>Background and text colors</li>
          <li>Button size and padding</li>
        </ul>
      </div>
    </div>
  );
};

export default MovingBorderDemo;
