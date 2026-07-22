import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import ScrollReveal from './components/ScrollReveal';
import { ShaderBackground } from './components/ui/ShaderBackground';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="shader-bg" aria-hidden="true">
            <ShaderBackground
                key={mode}
                color1={mode === 'dark' ? '#6f97a8' : '#aac6d2'}
                color2={mode === 'dark' ? '#1b2a31' : '#efe9dd'}
            />
        </div>
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Main/>
        <ScrollReveal><Expertise/></ScrollReveal>
        <ScrollReveal delay={100}><Timeline/></ScrollReveal>
        <ScrollReveal delay={100}><Project/></ScrollReveal>
        <ScrollReveal delay={100}><Contact/></ScrollReveal>
        <Footer />
    </div>
    );
}

export default App;