import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./AwesomeButtonDemo.css";

const AwesomeButtonDemo = () => {
  // Progress button handler
  const handleProgressPress = (element, next) => {
    // Simulate an async action like saving data
    setTimeout(() => {
      // Complete the button animation
      next();
    }, 1000);
  };

  return (
    <div className="awesome-buttons-container">
      <h1>Awesome 3D Buttons</h1>
      <p className="subtitle">
        Production-ready 3D buttons with animated effects and custom styles
      </p>

      <div className="button-section">
        <h2>Basic Buttons</h2>
        <div className="button-row">
          <AwesomeButton type="primary">Primary Button</AwesomeButton>
          <AwesomeButton type="secondary">Secondary Button</AwesomeButton>
          <AwesomeButton type="link">Link Button</AwesomeButton>
          <AwesomeButton type="danger">Danger Button</AwesomeButton>
        </div>
      </div>

      <div className="button-section">
        <h2>Size Variations</h2>
        <div className="button-row">
          <AwesomeButton type="primary" size="small">
            Small Button
          </AwesomeButton>
          <AwesomeButton type="primary">Medium Button</AwesomeButton>
          <AwesomeButton type="primary" size="large">
            Large Button
          </AwesomeButton>
        </div>
      </div>

      <div className="button-section">
        <h2>Progress Buttons</h2>
        <p>These buttons will animate when clicked and run an async action</p>
        <div className="button-row">
          <AwesomeButtonProgress type="primary" onPress={handleProgressPress}>
            Save Data
          </AwesomeButtonProgress>

          <AwesomeButtonProgress type="secondary" onPress={handleProgressPress}>
            Upload File
          </AwesomeButtonProgress>

          <AwesomeButtonProgress type="danger" onPress={handleProgressPress}>
            Delete Item
          </AwesomeButtonProgress>
        </div>
      </div>

      <div className="button-section">
        <h2>Social Buttons</h2>
        <div className="button-row">
          <AwesomeButtonSocial type="facebook" url="https://example.com">
            Share on Facebook
          </AwesomeButtonSocial>

          <AwesomeButtonSocial type="twitter" url="https://example.com">
            Share on Twitter
          </AwesomeButtonSocial>

          <AwesomeButtonSocial type="instagram">Instagram</AwesomeButtonSocial>
        </div>
      </div>

      <div className="button-section">
        <h2>Custom Styled Buttons</h2>
        <div className="button-row custom-buttons">
          <AwesomeButton className="gradient-button" type="primary">
            Gradient Button
          </AwesomeButton>

          <AwesomeButton className="neon-button" type="primary">
            Neon Glow
          </AwesomeButton>

          <AwesomeButton className="pulse-button" type="primary">
            Pulse Effect
          </AwesomeButton>

          <AwesomeButton className="ripple-button" type="primary">
            Ripple Effect
          </AwesomeButton>
        </div>
      </div>

      <div className="info-box">
        <h2>About React Awesome Button</h2>
        <p>
          React-Awesome-Button is a 3D UI button component for React that offers
          smooth animations at 60fps. It provides a variety of button types
          including progress buttons and social sharing buttons.
        </p>
        <div className="installation-code">
          <code>npm install react-awesome-button</code>
        </div>
      </div>
    </div>
  );
};

export default AwesomeButtonDemo;
