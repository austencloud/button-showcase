import React, { useState } from 'react';
import UseAnimations from 'react-useanimations';
// Import specific animations
import menu2 from 'react-useanimations/lib/menu2';
import bookmark from 'react-useanimations/lib/bookmark';
import heart from 'react-useanimations/lib/heart';
import arrowDown from 'react-useanimations/lib/arrowDown';
import arrowUp from 'react-useanimations/lib/arrowUp';
import archive from 'react-useanimations/lib/archive';
import alertCircle from 'react-useanimations/lib/alertCircle';
import alertOctagon from 'react-useanimations/lib/alertOctagon';
import checkBox from 'react-useanimations/lib/checkBox';
import github from 'react-useanimations/lib/github';
import infinity from 'react-useanimations/lib/infinity';
import loading from 'react-useanimations/lib/loading';
import maximize from 'react-useanimations/lib/maximize';
import settings2 from 'react-useanimations/lib/settings2';
import trash2 from 'react-useanimations/lib/trash2';
import './UseAnimationsDemo.css';

const UseAnimationsDemo = () => {
  // State to track which animations are "on"
  const [animationStates, setAnimationStates] = useState({});
  
  // Toggle the animation state
  const toggleAnimation = (animationId) => {
    setAnimationStates(prev => ({
      ...prev,
      [animationId]: !prev[animationId]
    }));
  };
  
  // Animation config - add more from the library as needed
  const animations = [
    {
      id: 'menu',
      animation: menu2,
      name: 'Hamburger Menu',
      description: 'Morphs between hamburger and X',
      color: '#4361ee'
    },
    {
      id: 'bookmark',
      animation: bookmark,
      name: 'Bookmark',
      description: 'Save to favorites animation',
      color: '#f72585'
    },
    {
      id: 'heart',
      animation: heart,
      name: 'Heart',
      description: 'Like or favorite animation',
      color: '#e63946'
    },
    {
      id: 'download',
      animation: arrowDown,
      name: 'Download',
      description: 'Download indicator',
      color: '#ff9e00'
    },
    {
      id: 'upload',
      animation: arrowUp,
      name: 'Upload',
      description: 'Upload indicator',
      color: '#38b000'
    },
    {
      id: 'archive',
      animation: archive,
      name: 'Archive',
      description: 'Archive or store item',
      color: '#9d4edd'
    },
    {
      id: 'alert',
      animation: alertCircle,
      name: 'Alert',
      description: 'Warning or error indicator',
      color: '#ff7b00'
    },
    {
      id: 'checkbox',
      animation: checkBox,
      name: 'Checkbox',
      description: 'Animated checkbox selection',
      color: '#2a9d8f'
    },
    {
      id: 'github',
      animation: github,
      name: 'GitHub',
      description: 'GitHub logo animation',
      color: '#333333'
    },
    {
      id: 'infinity',
      animation: infinity,
      name: 'Infinity',
      description: 'Infinite loading animation',
      color: '#4895ef'
    },
    {
      id: 'loading',
      animation: loading,
      name: 'Loading',
      description: 'Loading spinner animation',
      color: '#3a0ca3'
    },
    {
      id: 'maximize',
      animation: maximize,
      name: 'Maximize',
      description: 'Expand/collapse animation',
      color: '#4cc9f0'
    },
    {
      id: 'settings',
      animation: settings2,
      name: 'Settings',
      description: 'Settings gear animation',
      color: '#457b9d'
    },
    {
      id: 'trash',
      animation: trash2,
      name: 'Trash',
      description: 'Delete animation',
      color: '#d62828'
    },
    {
      id: 'alertOctagon',
      animation: alertOctagon,
      name: 'Alert Octagon',
      description: 'Critical warning animation',
      color: '#fb8500'
    }
  ];

  return (
    <div className="useanimations-container">
      <h1>React UseAnimations Demo</h1>
      <p className="description">Click any button to toggle its animation state</p>
      
      <div className="animation-grid">
        {animations.map((anim) => {
          const isOn = animationStates[anim.id];
          
          return (
            <div 
              key={anim.id}
              className={`animation-card ${isOn ? 'active' : ''}`}
              style={{
                borderColor: anim.color,
                backgroundColor: isOn ? `${anim.color}15` : 'white'
              }}
              onClick={() => toggleAnimation(anim.id)}
            >
              <div 
                className="animation-wrapper"
                style={{ 
                  borderColor: anim.color,
                  backgroundColor: isOn ? anim.color : 'white'
                }}
              >
                <UseAnimations
                  animation={anim.animation}
                  size={40}
                  strokeColor={isOn ? 'white' : anim.color}
                  reverse={anim.id === 'menu' || anim.id === 'checkbox' || anim.id === 'bookmark' || anim.id === 'heart' ? isOn : false}
                  onClick={() => {}}
                  autoplay={anim.id === 'loading' || anim.id === 'infinity'}
                  loop={anim.id === 'loading' || anim.id === 'infinity' || isOn}
                  speed={1}
                />
              </div>
              <div className="animation-info">
                <h3 style={{ color: anim.color }}>{anim.name}</h3>
                <p>{anim.description}</p>
                <span className="status">{isOn ? 'ON' : 'OFF'}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="info-panel">
        <h2>About UseAnimations</h2>
        <p>
          React-UseAnimations is a library of animated icons built with Lottie.
          It provides smooth, lightweight animations for common UI actions.
        </p>
        <h3>Installation</h3>
        <code>npm install react-useanimations</code>
        <h3>Usage</h3>
        <code>
          import UseAnimations from 'react-useanimations';<br/>
          import menu from 'react-useanimations/lib/menu2';<br/><br/>
          {'<UseAnimations animation={menu} size={40} />'}
        </code>
      </div>
    </div>
  );
};

export default UseAnimationsDemo;