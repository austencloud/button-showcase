// AdvancedIconGrid.jsx
import React, { useState } from "react";
import "./AdvancedIconGrid.css";

// Lucide Icons - Already in your project
import {
  Save,
  Upload,
  Download,
  Trash,
  Play,
  Pause,
  Settings,
  Search
} from "lucide-react";

// Phosphor Icons from your existing project
import {
  FloppyDisk,
  ArrowUp,
  ArrowDown,
  Trash as PhosphorTrash,
  Play as PhosphorPlay,
  Pause as PhosphorPause,
  Gear,
  MagnifyingGlass
} from "phosphor-react";

// React-Icons (io5) - Ionicons
import {
  IoSave,
  IoCloudUpload,
  IoCloudDownload,
  IoTrash,
  IoPlay,
  IoPause,
  IoSettings,
  IoSearch
} from "react-icons/io5";

// React-Icons (fa) - Font Awesome
import {
  FaSave,
  FaUpload,
  FaDownload,
  FaTrashAlt,
  FaPlay,
  FaPause,
  FaCog,
  FaSearch
} from "react-icons/fa";

// React-Icons (hi) - Heroicons
import {
  HiSave,
  HiUpload,
  HiDownload,
  HiTrash,
  HiPlay,
  HiPause,
  HiAdjustments,
  HiSearch
} from "react-icons/hi";

const AdvancedIconGrid = () => {
  const [iconSize, setIconSize] = useState(28);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [activeLibrary, setActiveLibrary] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [weightVariant, setWeightVariant] = useState("regular");

  // Define libraries and their special features
  const libraries = [
    {
      name: "Lucide",
      description: "Modern fork of Feather icons with regular updates",
      specialFeature: "Simple, clean SVG icons with stroke customization",
      website: "https://lucide.dev/",
      type: "stroke"
    },
    {
      name: "Phosphor",
      description: "Flexible icon family used in professional apps",
      specialFeature: "Consistent design with excellent scalability",
      website: "https://phosphoricons.com/",
      type: "regular"
    },
    {
      name: "Ionicons",
      description: "Beautiful open source icons by Ionic Framework",
      specialFeature: "Optimized for web and mobile interfaces",
      website: "https://ionic.io/ionicons",
      type: "fill"
    },
    {
      name: "Font Awesome",
      description: "The web's most popular icon set and toolkit",
      specialFeature: "Massive collection with solid and brand icons",
      website: "https://fontawesome.com/",
      type: "fill"
    },
    {
      name: "Heroicons",
      description: "Hand-crafted SVG icons by the makers of Tailwind CSS",
      specialFeature: "Perfect for Tailwind CSS projects",
      website: "https://heroicons.com/",
      type: "stroke"
    }
  ];

  // Define button actions with icons from each library
  const buttonActions = [
    {
      name: "Save",
      description: "Save the current document or data",
      icons: [Save, FloppyDisk, IoSave, FaSave, HiSave]
    },
    {
      name: "Upload",
      description: "Upload a file to the server",
      icons: [Upload, ArrowUp, IoCloudUpload, FaUpload, HiUpload]
    },
    {
      name: "Download",
      description: "Download file from the server",
      icons: [Download, ArrowDown, IoCloudDownload, FaDownload, HiDownload]
    },
    {
      name: "Delete",
      description: "Remove the selected item",
      icons: [Save, PhosphorTrash, IoTrash, FaTrashAlt, HiTrash]
    },
    {
      name: "Play",
      description: "Start or resume playback",
      icons: [Play, PhosphorPlay, IoPlay, FaPlay, HiPlay]
    },
    {
      name: "Pause",
      description: "Pause the current operation",
      icons: [Pause, PhosphorPause, IoPause, FaPause, HiPause]
    },
    {
      name: "Settings",
      description: "Adjust application settings",
      icons: [Settings, Gear, IoSettings, FaCog, HiAdjustments]
    },
    {
      name: "Search",
      description: "Find content within the application",
      icons: [Search, MagnifyingGlass, IoSearch, FaSearch, HiSearch]
    }
  ];

  // Colors for visual distinction
  const colors = [
    "#4361ee", // Blue
    "#f72585", // Pink
    "#4cc9f0", // Light blue
    "#ff9e00", // Orange
    "#38b000", // Green
    "#9d4edd", // Purple
    "#e63946", // Red
    "#457b9d"  // Teal
  ];

  // Weight system variants for Phosphor icons
  const weightVariants = ["thin", "light", "regular", "bold", "fill", "duotone"];

  return (
    <div className="advanced-icon-container">
      <h1>Advanced Icon Libraries Comparison</h1>
      
      <div className="controls">
        <div className="slider-group">
          <label>Icon Size: {iconSize}px</label>
          <input
            type="range"
            min="16"
            max="48"
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

        {/* Weight variant selector (for Phosphor) */}
        <div className="weight-variants">
          <label>Weight Variant:</label>
          <div className="weight-buttons">
            {weightVariants.map((weight) => (
              <button
                key={weight}
                className={weightVariant === weight ? "active" : ""}
                onClick={() => setWeightVariant(weight)}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Library information */}
      <div className="library-cards">
        {libraries.map((library, index) => (
          <div 
            key={index} 
            className={`library-card ${activeLibrary === index ? "active" : ""}`}
            onClick={() => setActiveLibrary(activeLibrary === index ? null : index)}
          >
            <h3>{library.name}</h3>
            <p>{library.description}</p>
            <div className="feature-badge">{library.specialFeature}</div>
            <a href={library.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>

      {/* Icon comparison grid */}
      <div className="icon-comparison-grid">
        {buttonActions.map((action, actionIdx) => (
          <div 
            key={actionIdx} 
            className={`action-row ${activeButton === actionIdx ? "active" : ""}`}
            onClick={() => setActiveButton(activeButton === actionIdx ? null : actionIdx)}
          >
            <div className="action-info">
              <h3>{action.name}</h3>
              <p>{action.description}</p>
            </div>
            
            <div className="icons-row">
              {libraries.map((library, libIdx) => {
                const Icon = action.icons[libIdx];
                const iconColor = colors[actionIdx];
                
                return (
                  <div 
                    key={libIdx} 
                    className="icon-cell"
                  >
                    <div 
                      className="icon-button"
                      style={{
                        borderColor: iconColor,
                        backgroundColor: (activeLibrary === libIdx || activeButton === actionIdx) ? iconColor : "white",
                        color: (activeLibrary === libIdx || activeButton === actionIdx) ? "white" : iconColor
                      }}
                    >
                      {library.name === "Lucide" ? (
                        <Icon 
                          size={iconSize} 
                          strokeWidth={strokeWidth}
                        />
                      ) : library.name === "Heroicons" ? (
                        <Icon 
                          className="w-full h-full"
                          style={{width: iconSize, height: iconSize}}
                        />
                      ) : (
                        <Icon 
                          size={iconSize}
                        />
                      )}
                    </div>
                    <span className="library-name">{library.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer with attribution */}
      <div className="footer">
        <p>
          Libraries featured: Lucide, Phosphor, Ionicons, Font Awesome, and Heroicons.
          Each offers unique advantages for different project needs.
        </p>
      </div>
    </div>
  );
};

export default AdvancedIconGrid;