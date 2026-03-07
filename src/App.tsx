import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ProjectsView } from './components/views/ProjectsView';
import { ContactView } from './components/views/ContactView';
import { Footer } from './components/Footer';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutView />;
      case 'projects':
        return <ProjectsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-siemens-light text-siemens-dark selection:bg-siemens-petrol/20 selection:text-siemens-dark">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderView()}
      </main>
      {(activeTab === 'about' || activeTab === 'contact') && <Footer />}
    </div>
  );
}
