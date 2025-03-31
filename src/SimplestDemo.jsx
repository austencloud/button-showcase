// SimplestDemo.jsx
import React, { useState } from "react";
import "./IconDemo.css";

// Just import from Lucide
import {
  BookPlus,
  Save,
  Maximize,
  FlipHorizontal,
  Paintbrush2,
  RotateCw,
  Trash,
  Eraser,
} from "lucide-react";

const SimplestDemo = () => {
  const [iconSize, setIconSize] = useState(32);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { component: BookPlus, label: "Add to Dictionary", id: "addToDictionary" },
    { component: Save, label: "Save Image", id: "saveImage" },
    { component: Maximize, label: "View Full Screen", id: "viewFullScreen" },
    {
      component: FlipHorizontal,
      label: "Mirror Sequence",
      id: "mirrorSequence",
    },
    { component: Paintbrush2, label: "Swap Colors", id: "swapColors" },
    { component: RotateCw, label: "Rotate Sequence", id: "rotateSequence" },
    { component: Trash, label: "Delete Beat", id: "deleteBeat" },
    { component: Eraser, label: "Clear Sequence", id: "clearSequence" },
  ];

  // Colors for our buttons
  const buttonColors = [
    "#4361ee",
    "#3a86ff",
    "#4cc9f0",
    "#4895ef",
    "#ff6b6b",
    "#f72585",
    "#ff9e00",
    "#ff7b00",
  ];

  return (
    <div className="icon-demo">
      <h1>Lucide Icons</h1>

      <div className="controls">
        <div className="sliders">
          <div className="slider-group">
            <label>Icon Size: {iconSize}px</label>
            <input
              type="range"
              min="16"
              max="60"
              value={iconSize}
              onChange={(e) => setIconSize(parseInt(e.target.value))}
            />
          </div>

          <div className="slider-group">
            <label>Stroke Width: {strokeWidth}</label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="library-card">
        <h2>Lucide Icons (Modern & Clean)</h2>

        <div className="icons-grid">
          {icons.map((icon, iconIndex) => {
            const Icon = icon.component;
            const isHovered = hoveredIcon === iconIndex;

            return (
              <div
                key={iconIndex}
                className={`icon-container ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIcon(iconIndex)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div
                  className="icon-button"
                  style={{
                    width: `${iconSize * 1.5}px`,
                    height: `${iconSize * 1.5}px`,
                    borderColor: buttonColors[iconIndex],
                    color: isHovered ? "white" : buttonColors[iconIndex],
                    backgroundColor: isHovered
                      ? buttonColors[iconIndex]
                      : "white",
                  }}
                >
                  <Icon size={iconSize} strokeWidth={strokeWidth} />
                </div>
                <span className="icon-label">{icon.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimplestDemo;
