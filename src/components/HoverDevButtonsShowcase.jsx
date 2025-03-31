import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HoverDevButtonsShowcase.css";

const EncryptButton = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [text, setText] = useState("Encrypt data");
  const [isHovered, setIsHovered] = useState(false);

  // Text scramble effect
  useEffect(() => {
    let interval;
    let iteration = 0;
    const originalText = "Encrypt data";

    if (isHovered) {
      interval = setInterval(() => {
        setText((prevText) => {
          return prevText
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iteration += 1 / 3;

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
      }, 30);
    } else {
      setText("Encrypt data");
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.button
      className="encrypt-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
    >
      <div className="encrypt-bg"></div>
      <div className="encrypt-gradient"></div>
      <span className="encrypt-text">{text}</span>
    </motion.button>
  );
};

const WetPaintButton = () => {
  return (
    <motion.button
      className="wet-paint-button"
      whileHover="hover"
      whileTap="tap"
    >
      <span className="wet-paint-text">HOVER ME!</span>
      <motion.div
        className="wet-paint-fill"
        initial={{ y: "-100%" }}
        variants={{
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Paint drips */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="paint-drip"
          style={{ left: `${15 + i * 15}%` }}
          initial={{ y: "-100%" }}
          variants={{
            hover: { y: "120%" },
          }}
          transition={{
            delay: 0.15 + i * 0.05,
            duration: 0.2 + i * 0.1,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="paint-drop"
            initial={{ scale: 0 }}
            variants={{
              hover: { scale: 1 },
            }}
            transition={{
              delay: 0.15 + i * 0.05,
              duration: 0.3 + i * 0.1,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}
    </motion.button>
  );
};

const PulseButton = () => {
  return (
    <motion.button
      className="pulse-effect-button"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <span>Hover me</span>

      <motion.div
        className="pulse-ripple"
        initial={{ scale: 0, opacity: 0.5 }}
        variants={{
          hover: {
            scale: 1.5,
            opacity: 0,
            transition: { repeat: Infinity, duration: 1, ease: "linear" },
          },
        }}
      />

      <motion.div
        className="pulse-ripple delay-1"
        initial={{ scale: 0, opacity: 0.5 }}
        variants={{
          hover: {
            scale: 1.5,
            opacity: 0,
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              delay: 0.2,
            },
          },
        }}
      />

      <motion.div
        className="pulse-ripple delay-2"
        initial={{ scale: 0, opacity: 0.5 }}
        variants={{
          hover: {
            scale: 1.5,
            opacity: 0,
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              delay: 0.4,
            },
          },
        }}
      />

      <motion.div
        className="pulse-fill"
        initial={{ opacity: 0 }}
        variants={{
          hover: {
            opacity: 1,
          },
        }}
      />
    </motion.button>
  );
};

const AnimatedHamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      className="hamburger-button"
      onClick={() => setIsOpen(!isOpen)}
      animate={isOpen ? "open" : "closed"}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="hamburger-line top"
        variants={{
          open: { rotate: 45, y: 6 },
          closed: { rotate: 0, y: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="hamburger-line middle"
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="hamburger-line bottom"
        variants={{
          open: { rotate: -45, y: -6 },
          closed: { rotate: 0, y: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

// Spotlight button from Hover.dev
const SpotlightButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setButtonRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const buttonRef = React.useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonRect({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.x,
        y: e.clientY - rect.y,
      });
    }
  };

  return (
    <button
      className="spotlight-button"
      ref={buttonRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, transparent 65%)`,
        }}
      />
      <span>Spotlight Effect</span>
    </button>
  );
};

// Magnetic button effect
const MagneticButton = () => {
  const buttonRef = React.useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current || !isHovered) return;

    const rect = buttonRef.current.getBoundingClientRect();

    // Calculate the center of the button
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the distance from the mouse to the center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // The magnetic effect - move slightly toward the cursor
    setPosition({
      x: distanceX * 0.2,
      y: distanceY * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, handleMouseMove]);

  return (
    <motion.button
      ref={buttonRef}
      className="magnetic-button"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      Magnetic Pull
    </motion.button>
  );
};

// The main showcase component
const HoverDevButtonsShowcase = () => {
  return (
    <div className="hover-dev-showcase">
      <h1>Hover.dev Animated Buttons</h1>
      <p className="subtitle">
        Interactive animations and effects for modern interfaces
      </p>

      <div className="buttons-grid">
        <div className="button-card">
          <h3>Encrypt Text Effect</h3>
          <div className="button-container">
            <EncryptButton />
          </div>
          <p className="description">
            The text scrambles on hover and gradually reforms itself.
          </p>
        </div>

        <div className="button-card">
          <h3>Wet Paint Effect</h3>
          <div className="button-container">
            <WetPaintButton />
          </div>
          <p className="description">
            Paint drips down when hovered, with droplets at the end.
          </p>
        </div>

        <div className="button-card">
          <h3>Pulse Effect</h3>
          <div className="button-container">
            <PulseButton />
          </div>
          <p className="description">
            Multiple pulse rings emanate outward on hover.
          </p>
        </div>

        <div className="button-card">
          <h3>Hamburger Animation</h3>
          <div className="button-container">
            <AnimatedHamburgerButton />
          </div>
          <p className="description">
            Transforms between hamburger and X icons when clicked.
          </p>
        </div>

        <div className="button-card">
          <h3>Spotlight Effect</h3>
          <div className="button-container">
            <SpotlightButton />
          </div>
          <p className="description">
            Light follows cursor position over the button.
          </p>
        </div>

        <div className="button-card">
          <h3>Magnetic Pull</h3>
          <div className="button-container">
            <MagneticButton />
          </div>
          <p className="description">
            Button is attracted to the cursor like a magnet.
          </p>
        </div>
      </div>

      <div className="info-box">
        <h2>About Hover.dev Buttons</h2>
        <p>
          These buttons use Framer Motion and CSS to create engaging interactive
          effects. The animations respond to user actions like hover, click, and
          mouse movement to create a more dynamic and engaging user experience.
        </p>
        <p>
          For more incredible button effects and animations, visit{" "}
          <a
            href="https://hover.dev/components/buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            hover.dev
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HoverDevButtonsShowcase;
