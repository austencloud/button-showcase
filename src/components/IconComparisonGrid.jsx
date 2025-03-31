// IconComparisonGrid.jsx
import React, { useState } from "react";
import "./IconDemo.css";

// Lucide Icons
import {
  Save,
  Upload,
  Download,
  Trash,
  Play,
  Pause,
  Settings,
  Search,
  ZoomIn,
  ZoomOut,
  Mail,
  Bell,
} from "lucide-react";

// React-Icons (Ionicons)
import {
  IoSave,
  IoCloudUpload,
  IoCloudDownload,
  IoTrash,
  IoPlay,
  IoPause,
  IoSettings,
  IoSearch,
  IoAddCircle,
  IoRemoveCircle,
  IoMail,
  IoNotifications,
} from "react-icons/io5";

// React-Icons (Font Awesome)
import {
  FaSave,
  FaUpload,
  FaDownload,
  FaTrashAlt,
  FaPlay,
  FaPause,
  FaCog,
  FaSearch,
  FaSearchPlus,
  FaSearchMinus,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";

// React-Icons (Material Design)
import {
  MdSave,
  MdFileUpload,
  MdFileDownload,
  MdDelete,
  MdPlayArrow,
  MdPause,
  MdSettings,
  MdSearch,
  MdZoomIn,
  MdZoomOut,
  MdEmail,
  MdNotifications,
} from "react-icons/md";

const IconComparisonGrid = () => {
  const [iconSize, setIconSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Define libraries and their names
  const libraries = [
    { name: "Lucide", type: "stroke" },
    { name: "Ionicons", type: "fill" },
    { name: "Font Awesome", type: "fill" },
    { name: "Material", type: "fill" },
  ];

  // Define buttons/actions and their corresponding icons from each library
  const buttonActions = [
    {
      name: "Save",
      description: "Save the current document or data",
      icons: [Save, IoSave, FaSave, MdSave],
    },
    {
      name: "Upload",
      description: "Upload a file to the server",
      icons: [Upload, IoCloudUpload, FaUpload, MdFileUpload],
    },
    {
      name: "Download",
      description: "Download file from server",
      icons: [Download, IoCloudDownload, FaDownload, MdFileDownload],
    },
    {
      name: "Delete",
      description: "Remove the selected item",
      icons: [Trash, IoTrash, FaTrashAlt, MdDelete],
    },
    {
      name: "Play",
      description: "Start or resume playback",
      icons: [Play, IoPlay, FaPlay, MdPlayArrow],
    },
    {
      name: "Pause",
      description: "Pause the current operation",
      icons: [Pause, IoPause, FaPause, MdPause],
    },
    {
      name: "Settings",
      description: "Adjust application settings",
      icons: [Settings, IoSettings, FaCog, MdSettings],
    },
    {
      name: "Search",
      description: "Find content within the application",
      icons: [Search, IoSearch, FaSearch, MdSearch],
    },
    {
      name: "Zoom In",
      description: "Increase size or magnification",
      icons: [ZoomIn, IoAddCircle, FaSearchPlus, MdZoomIn],
    },
    {
      name: "Zoom Out",
      description: "Decrease size or magnification",
      icons: [ZoomOut, IoRemoveCircle, FaSearchMinus, MdZoomOut],
    },
    {
      name: "Mail",
      description: "Access email or messaging",
      icons: [Mail, IoMail, FaEnvelope, MdEmail],
    },
    {
      name: "Notifications",
      description: "View alerts and notifications",
      icons: [Bell, IoNotifications, FaBell, MdNotifications],
    },
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
    "#457b9d", // Teal
    "#fb8500", // Yellow
    "#6a994e", // Olive
    "#d62828", // Crimson
    "#52b788", // Mint
  ];

  return (
    <div className="icon-comparison-container">
      <h1>Button Icon Comparison Across Libraries</h1>

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
      </div>

      <div className="comparison-table">
        {/* Header row with library names */}
        <div className="table-row header">
          <div className="table-cell action-cell">Button Action</div>
          {libraries.map((lib, idx) => (
            <div key={idx} className="table-cell library-cell">
              {lib.name}
            </div>
          ))}
        </div>

        {/* Rows for each button action */}
        {buttonActions.map((action, actionIdx) => (
          <div key={actionIdx} className="table-row">
            <div className="table-cell action-cell">
              <div className="action-name">{action.name}</div>
              <div className="action-description">{action.description}</div>
            </div>

            {action.icons.map((Icon, libIdx) => {
              const isHovered = hoveredCell === `${actionIdx}-${libIdx}`;
              const cellColor = colors[actionIdx];

              return (
                <div
                  key={libIdx}
                  className={`table-cell icon-cell ${
                    isHovered ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredCell(`${actionIdx}-${libIdx}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div
                    className="icon-button"
                    style={{
                      borderColor: cellColor,
                      backgroundColor: isHovered ? cellColor : "white",
                      color: isHovered ? "white" : cellColor,
                    }}
                  >
                    {libraries[libIdx].type === "stroke" ? (
                      <Icon size={iconSize} strokeWidth={strokeWidth} />
                    ) : (
                      <Icon size={iconSize} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconComparisonGrid;
