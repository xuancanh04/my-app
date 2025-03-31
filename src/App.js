// src/App.js
import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import About from './components/About';
import Footer from './components/Footer';
import SkillsCopy from './components/SkillsCopy';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');
  

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AboutMe setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'sklls':
        return <SkillsCopy setCurrentPage={setCurrentPage} />;
      case 'aboutme':
        return <AboutMe setCurrentPage={setCurrentPage} />;
      case 'skills':
        return <SkillsCopy setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        {renderPage()}
        <Footer /> {/* Thêm Footer vào cuối trang */}
      </div>
    </ThemeProvider>
  );
}

export default App;