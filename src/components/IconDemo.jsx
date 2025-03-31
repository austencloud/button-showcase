// IconDemo.jsx
import React, { useState } from "react";
import "./IconDemo.css";

// Lucide Icons
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

// Phosphor Icons - Fixed Mirror to use ArrowsHorizontal instead
import {
  BookBookmark,
  FloppyDisk,
  ArrowsOut,
  ArrowsHorizontal, // Changed from Mirror which doesn't exist
  PaintBucket,
  ArrowsClockwise,
  Trash as PhosphorTrash,
  Eraser as PhosphorEraser,
} from "phosphor-react";

// Heroicons (React)
import {
  BookOpenIcon,
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  ArrowsRightLeftIcon,
  SwatchIcon,
  ArrowPathIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

// Tabler Icons
import {
  IconBook,
  IconDeviceFloppy,
  IconMaximize,
  IconFlipHorizontal,
  IconPalette,
  IconRotate,
  IconTrash,
  IconEraser,
} from "@tabler/icons-react";

// React-Icons (includes multiple libraries)
import {
  IoBookOutline,
  IoSaveOutline,
  IoExpandOutline,
  IoSwapHorizontalOutline,
  IoColorPaletteOutline,
  IoReloadOutline,
  IoTrashOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

// Import for Unicons
import {
  UilBook,
  UilSave,
  UilExpandArrows,
  UilExchange,
  UilPalette,
  UilRedo,
  UilTrashAlt,
  UilTimes,
} from "@iconscout/react-unicons";

// Import for IonIcons (via React-Icons)
import {
  IoBook,
  IoSave,
  IoExpand,
  IoSwapHorizontal,
  IoBrush,
  IoRefresh,
  IoTrash,
  IoClose,
} from "react-icons/io5";

// Import for Font Awesome (via React-Icons)
import {
  FaBook,
  FaSave,
  FaExpandArrowsAlt,
  FaExchangeAlt,
  FaPaintBrush,
  FaRedo,
  FaTrashAlt,
  FaEraser,
} from "react-icons/fa";

const IconDemo = () => {
  const [activeTab, setActiveTab] = useState("standard");
  const [iconSize, setIconSize] = useState(32);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Libraries and their icons
  const libraries = {
    standard: [
      {
        name: "Lucide",
        icons: [
          {
            component: BookPlus,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: Save, label: "Save Image", id: "saveImage" },
          {
            component: Maximize,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: FlipHorizontal,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: Paintbrush2, label: "Swap Colors", id: "swapColors" },
          {
            component: RotateCw,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: Trash, label: "Delete Beat", id: "deleteBeat" },
          { component: Eraser, label: "Clear Sequence", id: "clearSequence" },
        ],
      },
      {
        name: "Phosphor",
        icons: [
          {
            component: BookBookmark,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: FloppyDisk, label: "Save Image", id: "saveImage" },
          {
            component: ArrowsOut,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          { 
            component: ArrowsHorizontal, // Changed from Mirror to ArrowsHorizontal
            label: "Mirror Sequence", 
            id: "mirrorSequence" 
          },
          { component: PaintBucket, label: "Swap Colors", id: "swapColors" },
          {
            component: ArrowsClockwise,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: PhosphorTrash, label: "Delete Beat", id: "deleteBeat" },
          {
            component: PhosphorEraser,
            label: "Clear Sequence",
            id: "clearSequence",
          },
        ],
      },
      {
        name: "Heroicons",
        icons: [
          {
            component: BookOpenIcon,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          {
            component: ArrowDownTrayIcon,
            label: "Save Image",
            id: "saveImage",
          },
          {
            component: ArrowsPointingOutIcon,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: ArrowsRightLeftIcon,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: SwatchIcon, label: "Swap Colors", id: "swapColors" },
          {
            component: ArrowPathIcon,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: TrashIcon, label: "Delete Beat", id: "deleteBeat" },
          {
            component: XCircleIcon,
            label: "Clear Sequence",
            id: "clearSequence",
          },
        ],
      },
      {
        name: "Tabler",
        icons: [
          {
            component: IconBook,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: IconDeviceFloppy, label: "Save Image", id: "saveImage" },
          {
            component: IconMaximize,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: IconFlipHorizontal,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: IconPalette, label: "Swap Colors", id: "swapColors" },
          {
            component: IconRotate,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: IconTrash, label: "Delete Beat", id: "deleteBeat" },
          {
            component: IconEraser,
            label: "Clear Sequence",
            id: "clearSequence",
          },
        ],
      },
    ],
    animated: [
      {
        name: "React-Icons",
        icons: [
          {
            component: IoBookOutline,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: IoSaveOutline, label: "Save Image", id: "saveImage" },
          {
            component: IoExpandOutline,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: IoSwapHorizontalOutline,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          {
            component: IoColorPaletteOutline,
            label: "Swap Colors",
            id: "swapColors",
          },
          {
            component: IoReloadOutline,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: IoTrashOutline, label: "Delete Beat", id: "deleteBeat" },
          {
            component: IoCloseCircleOutline,
            label: "Clear Sequence",
            id: "clearSequence",
          },
        ],
      },
      {
        name: "Unicons",
        icons: [
          {
            component: UilBook,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: UilSave, label: "Save Image", id: "saveImage" },
          {
            component: UilExpandArrows,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: UilExchange,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: UilPalette, label: "Swap Colors", id: "swapColors" },
          {
            component: UilRedo,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: UilTrashAlt, label: "Delete Beat", id: "deleteBeat" },
          { component: UilTimes, label: "Clear Sequence", id: "clearSequence" },
        ],
      },
      {
        name: "Ionicons",
        icons: [
          {
            component: IoBook,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: IoSave, label: "Save Image", id: "saveImage" },
          {
            component: IoExpand,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: IoSwapHorizontal,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: IoBrush, label: "Swap Colors", id: "swapColors" },
          {
            component: IoRefresh,
            label: "Rotate Sequence",
            id: "rotateSequence",
          },
          { component: IoTrash, label: "Delete Beat", id: "deleteBeat" },
          { component: IoClose, label: "Clear Sequence", id: "clearSequence" },
        ],
      },
      {
        name: "Font Awesome",
        icons: [
          {
            component: FaBook,
            label: "Add to Dictionary",
            id: "addToDictionary",
          },
          { component: FaSave, label: "Save Image", id: "saveImage" },
          {
            component: FaExpandArrowsAlt,
            label: "View Full Screen",
            id: "viewFullScreen",
          },
          {
            component: FaExchangeAlt,
            label: "Mirror Sequence",
            id: "mirrorSequence",
          },
          { component: FaPaintBrush, label: "Swap Colors", id: "swapColors" },
          { component: FaRedo, label: "Rotate Sequence", id: "rotateSequence" },
          { component: FaTrashAlt, label: "Delete Beat", id: "deleteBeat" },
          { component: FaEraser, label: "Clear Sequence", id: "clearSequence" },
        ],
      },
    ],
  };

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
      <h1>Icon Library Comparison</h1>

      <div className="controls">
        <div className="tabs">
          <button
            className={activeTab === "standard" ? "active" : ""}
            onClick={() => setActiveTab("standard")}
          >
            Standard Icons
          </button>
          <button
            className={activeTab === "animated" ? "active" : ""}
            onClick={() => setActiveTab("animated")}
          >
            Other Icon Sets
          </button>
        </div>

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

      <div className="libraries-container">
        {libraries[activeTab].map((library, libraryIndex) => (
          <div key={libraryIndex} className="library-card">
            <h2>{library.name}</h2>

            <div className="icons-grid">
              {library.icons.map((icon, iconIndex) => {
                const Icon = icon.component;
                const isHovered =
                  hoveredIcon === `${libraryIndex}-${iconIndex}`;

                return (
                  <div
                    key={iconIndex}
                    className={`icon-container ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={() =>
                      setHoveredIcon(`${libraryIndex}-${iconIndex}`)
                    }
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div
                      className="icon-button"
                      style={{
                        width: `${iconSize * 1.5}px`,
                        height: `${iconSize * 1.5}px`,
                        borderColor: buttonColors[iconIndex],
                      }}
                    >
                      {library.name === "Heroicons" ? (
                        <Icon
                          width={iconSize}
                          height={iconSize}
                          strokeWidth={strokeWidth}
                          color={buttonColors[iconIndex]}
                        />
                      ) : library.name === "Tabler" ? (
                        <Icon
                          size={iconSize}
                          strokeWidth={strokeWidth}
                          color={buttonColors[iconIndex]}
                        />
                      ) : library.name === "Phosphor" ? (
                        <Icon
                          size={iconSize}
                          weight="regular"
                          color={buttonColors[iconIndex]}
                        />
                      ) : library.name === "Unicons" ||
                        library.name === "Ionicons" ||
                        library.name === "Font Awesome" ||
                        library.name === "React-Icons" ? (
                        <Icon size={iconSize} color={buttonColors[iconIndex]} />
                      ) : (
                        <Icon
                          size={iconSize}
                          strokeWidth={strokeWidth}
                          color={buttonColors[iconIndex]}
                        />
                      )}
                    </div>
                    <span className="icon-label">{icon.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconDemo;