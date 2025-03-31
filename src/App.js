// App.js - The Ultimate Button Showcase
import React, { useState } from 'react';
import './App.css';

// Import all our button components
// import AnimatedButtons from './components/AnimatedButtons';
import AwesomeButtonDemo from './components/AwesomeButtonDemo';
import MovingBorderDemo from './components/MovingBorderDemo';
import HoverDevButtonsShowcase from './components/HoverDevButtonsShowcase';
import IconButtonsGrid from './components/IconButtonsGrid';
// import UseAnimationsDemo from './components/UseAnimationsDemo';

function App() {
  const [activeSection, setActiveSection] = useState('animated');
  
  const sections = [
    // { id: 'animated', name: 'Lottie Animated Icons', component: <AnimatedButtons /> },
    { id: 'awesome', name: 'Awesome 3D Buttons', component: <AwesomeButtonDemo /> },
    { id: 'moving-border', name: 'Moving Border Buttons', component: <MovingBorderDemo /> },
    { id: 'hover-dev', name: 'Hover.dev Effects', component: <HoverDevButtonsShowcase /> },
    { id: 'icons', name: 'Icon Library Buttons', component: <IconButtonsGrid /> },
    // { id: 'use-animations', name: 'UseAnimations Icons', component: <UseAnimationsDemo /> },
  ];

  return (
    <div className="ultimate-button-app">
      <header>
        <h1>The Ultimate Button Showcase</h1>
        <p>Exploring the most amazing button libraries and effects for React</p>
      </header>
      
      <nav className="section-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            {section.name}
          </button>
        ))}
      </nav>
      
      <main className="section-content">
        {sections.find(section => section.id === activeSection)?.component}
      </main>
      
      <footer>
        <p>Made with ❤️ using React, Lottie, Framer Motion, and more!</p>
      </footer>
    </div>
  );
}

export default App;