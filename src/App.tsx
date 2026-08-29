import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Blog,
  Navigation,
  Footer,
} from "./components";
import ScrollReveal from './components/ScrollReveal';
import ProfileCard from './components/ProfileCard';
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
        // A stale hash (e.g. #expertise left in the URL) makes the browser jump on
        // load and fight this scroll. Strip it, then start at the top.
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      }, []);

    useEffect(() => {
        const cls = mode === 'dark' ? 'dark-mode' : 'light-mode';
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(cls);
        return () => document.body.classList.remove(cls);
      }, [mode]);

    return (
    <div className="main-container">
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <div className="page-layout">
            <aside className="profile-rail">
                <ProfileCard/>
            </aside>
            <main className="page-content">
                <Main/>
                <ScrollReveal><Expertise/></ScrollReveal>
                <ScrollReveal delay={100}><Timeline/></ScrollReveal>
                <ScrollReveal delay={100}><Project/></ScrollReveal>
                <ScrollReveal delay={100}><Blog/></ScrollReveal>
                <ScrollReveal delay={100}><Contact/></ScrollReveal>
            </main>
        </div>
        <Footer />
    </div>
    );
}

export default App;