import React, { useState } from "react";
import "./IconButtonsGrid.css";

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
  Heart,
  Share2,
  Edit,
  Copy,
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
  IoHeart,
  IoShare,
  IoPencil,
  IoDocument,
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
  FaHeart,
  FaShareAlt,
  FaEdit,
  FaCopy,
} from "react-icons/fa";

// Additional action buttons
const actionButtons = [
  {
    name: "Save",
    description: "Save the current document",
    icons: [Save, IoSave, FaSave],
    color: "#4361ee",
  },
  {
    name: "Upload",
    description: "Upload files to the server",
    icons: [Upload, IoCloudUpload, FaUpload],
    color: "#3a86ff",
  },
  {
    name: "Download",
    description: "Download files from the server",
    icons: [Download, IoCloudDownload, FaDownload],
    color: "#4cc9f0",
  },
  {
    name: "Delete",
    description: "Remove selected items",
    icons: [Trash, IoTrash, FaTrashAlt],
    color: "#ef476f",
  },
  {
    name: "Play",
    description: "Start playback or process",
    icons: [Play, IoPlay, FaPlay],
    color: "#06d6a0",
  },
  {
    name: "Pause",
    description: "Pause the current action",
    icons: [Pause, IoPause, FaPause],
    color: "#ffd166",
  },
  {
    name: "Settings",
    description: "Adjust configuration options",
    icons: [Settings, IoSettings, FaCog],
    color: "#073b4c",
  },
  {
    name: "Search",
    description: "Find content in the application",
    icons: [Search, IoSearch, FaSearch],
    color: "#118ab2",
  },
  {
    name: "Zoom In",
    description: "Increase view size",
    icons: [ZoomIn, IoAddCircle, FaSearchPlus],
    color: "#7209b7",
  },
  {
    name: "Zoom Out",
    description: "Decrease view size",
    icons: [ZoomOut, IoRemoveCircle, FaSearchMinus],
    color: "#560bad",
  },
  {
    name: "Mail",
    description: "Check your messages",
    icons: [Mail, IoMail, FaEnvelope],
    color: "#f72585",
  },
  {
    name: "Notifications",
    description: "View alerts and notices",
    icons: [Bell, IoNotifications, FaBell],
    color: "#3f37c9",
  },
  {
    name: "Favorite",
    description: "Add to favorites or like",
    icons: [Heart, IoHeart, FaHeart],
    color: "#e63946",
  },
  {
    name: "Share",
    description: "Share with others",
    icons: [Share2, IoShare, FaShareAlt],
    color: "#ff9e00",
  },
  {
    name: "Edit",
    description: "Modify current content",
    icons: [Edit, IoPencil, FaEdit],
    color: "#4361ee",
  },
  {
    name: "Copy",
    description: "Copy to clipboard",
    icons: [Copy, IoDocument, FaCopy],
    color: "#4895ef",
  },
];

const IconButtonsGrid = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [iconSize, setIconSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(1.5);
  const [buttonStyle, setButtonStyle] = useState("filled");

  // Library names
  const libraries = ["Lucide", "Ionicons", "Font Awesome"];

  const ButtonWithIcon = ({
    name,
    icon: Icon,
    color,
    library,
  }) => {
    const isHovered = hoveredButton === `${name}-${library}`;
    const isStroke = library === "Lucide";

    return (
      <button
        className={`icon-button ${buttonStyle} ${isHovered ? "hovered" : ""}`}
        style={{
          "--button-color": color,
          "--button-text-color": buttonStyle === "filled" ? "white" : color,
          "--button-bg-color": buttonStyle === "filled" ? color : "transparent",
        }}
        onMouseEnter={() => setHoveredButton(`${name}-${library}`)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span className="icon">
          {isStroke ? (
            <Icon size={iconSize} strokeWidth={strokeWidth} />
          ) : (
            <Icon size={iconSize} />
          )}
        </span>
        <span className="text">{name}</span>
      </button>
    );
  };

  return (
    <div className="icon-buttons-container">
      <h1>Icon Buttons</h1>
      <p className="subtitle">Functional buttons with expressive icons</p>

      <div className="controls">
        <div className="control-group">
          <label>Icon Size: {iconSize}px</label>
          <input
            type="range"
            min="16"
            max="32"
            value={iconSize}
            onChange={(e) => setIconSize(parseInt(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Stroke Width: {strokeWidth}</label>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
          />
        </div>

        <div className="control-group style-selector">
          <label>Button Style:</label>
          <div className="button-style-options">
            <button
              className={buttonStyle === "filled" ? "active" : ""}
              onClick={() => setButtonStyle("filled")}
            >
              Filled
            </button>
            <button
              className={buttonStyle === "outlined" ? "active" : ""}
              onClick={() => setButtonStyle("outlined")}
            >
              Outlined
            </button>
            <button
              className={buttonStyle === "minimal" ? "active" : ""}
              onClick={() => setButtonStyle("minimal")}
            >
              Minimal
            </button>
          </div>
        </div>
      </div>

      <div className="tab-container">
        {libraries.map((library, index) => (
          <div key={library} className="library-tab">
            <h2>{library}</h2>
            <div className="buttons-grid">
              {actionButtons.map((button) => (
                <ButtonWithIcon
                  key={`${button.name}-${library}`}
                  name={button.name}
                  description={button.description}
                  icon={button.icons[index]}
                  color={button.color}
                  library={library}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="info-box">
        <h2>About Icon Buttons</h2>
        <p>
          Icon buttons combine visual symbols with text labels to create
          intuitive, space-efficient controls. This showcase demonstrates how
          different icon libraries can be used to create consistent button sets
          with various styles and appearances.
        </p>
        <p>
          Try changing the controls above to see how the buttons adapt to
          different sizes and styles. The buttons use CSS variables for easy
          theming and customization.
        </p>
      </div>
    </div>
  );
};

export default IconButtonsGrid;
