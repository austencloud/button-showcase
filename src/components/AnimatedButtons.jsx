import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './AnimatedButtons.css';

// These are example animation data files
// In a real project, you'd import your own JSON files from Lottie
import saveAnimationData from './animations/save-animation.json';
import deleteAnimationData from './animations/delete-animation.json';
import searchAnimationData from './animations/search-animation.json';
import settingsAnimationData from './animations/settings-animation.json';
import downloadAnimationData from './animations/download-animation.json';
import uploadAnimationData from './animations/upload-animation.json';
import shareAnimationData from './animations/share-animation.json';
import notificationAnimationData from './animations/notification-animation.json';

const AnimatedButtons = () => {
  const [activeAnimation, setActiveAnimation] = useState(null);
  const [isPaused, setIsPaused] = useState({});
  
  // Animation config
  const animations = [
    { 
      id: 'save', 
      name: 'Save', 
      data: saveAnimationData, 
      color: '#4361ee', 
      description: 'Save your current progress' 
    },
    { 
      id: 'delete', 
      name: 'Delete', 
      data: deleteAnimationData, 
      color: '#e63946', 
      description: 'Remove selected items' 
    },
    { 
      id: 'search', 
      name: 'Search', 
      data: searchAnimationData, 
      color: '#3a0ca3', 
      description: 'Find what you need' 
    },
    { 
      id: 'settings', 
      name: 'Settings', 
      data: settingsAnimationData, 
      color: '#2a9d8f', 
      description: 'Customize your experience' 
    },
    { 
      id: 'download', 
      name: 'Download', 
      data: downloadAnimationData, 
      color: '#f77f00', 
      description: 'Get files from the cloud' 
    },
    { 
      id: 'upload', 
      name: 'Upload', 
      data: uploadAnimationData, 
      color: '#0096c7', 
      description: 'Send files to the cloud' 
    },
    { 
      id: 'share', 
      name: 'Share', 
      data: shareAnimationData, 
      color: '#7209b7', 
      description: 'Share with others' 
    },
    { 
      id: 'notification', 
      name: 'Notifications', 
      data: notificationAnimationData, 
      color: '#f48c06', 
      description: 'Check your alerts' 
    }
  ];

  const handleMouseEnter = (id) => {
    setActiveAnimation(id);
    setIsPaused(prev => ({ ...prev, [id]: false }));
  };

  const handleMouseLeave = (id) => {
    setIsPaused(prev => ({ ...prev, [id]: true }));
  };

  const handleClick = (id) => {
    // In a real app, this would trigger an action
    console.log(`Button ${id} clicked!`);
    
    // Reset animation on click for a nice effect
    setIsPaused(prev => ({ ...prev, [id]: false }));
    setTimeout(() => {
      setIsPaused(prev => ({ ...prev, [id]: true }));
    }, 1500); // Duration of animation cycle
  };

  return (
    <div className="animated-buttons-container">
      <h1>Animated Icon Buttons</h1>
      <p className="subtitle">Hover over the buttons to see the animations!</p>
      
      <div className="buttons-grid">
        {animations.map((animation) => {
          const defaultOptions = {
            loop: true,
            autoplay: false,
            animationData: animation.data,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
          
          const isActive = activeAnimation === animation.id;
          
          return (
            <div 
              key={animation.id}
              className={`button-card ${isActive ? 'active' : ''}`}
              style={{
                borderColor: animation.color,
                backgroundColor: isActive ? `${animation.color}10` : 'white'
              }}
              onMouseEnter={() => handleMouseEnter(animation.id)}
              onMouseLeave={() => handleMouseLeave(animation.id)}
              onClick={() => handleClick(animation.id)}
            >
              <div 
                className="animation-container"
                style={{ borderColor: animation.color }}
              >
                <Lottie 
                  options={defaultOptions}
                  height={80}
                  width={80}
                  isStopped={isPaused[animation.id] !== false}
                  isClickToPauseDisabled={true}
                />
              </div>
              <div className="button-info">
                <h3 style={{ color: animation.color }}>{animation.name}</h3>
                <p>{animation.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="info-box">
        <h2>How It Works</h2>
        <p>
          These animations are powered by Lottie, an animation library from Airbnb that renders 
          After Effects animations in real-time. The animations start on hover and can be 
          triggered by clicking the buttons.
        </p>
        <p>
          In a real application, you would:
        </p>
        <ol>
          <li>Design your animations in After Effects or use pre-made ones</li>
          <li>Export them as JSON using the Bodymovin plugin</li>
          <li>Import them into your React project</li>
          <li>Control playback based on user interaction</li>
        </ol>
      </div>
    </div>
  );
};

export default AnimatedButtons;