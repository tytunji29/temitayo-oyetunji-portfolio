import React from 'react';
import AIChat from './components/AIChat';
import ExperienceTimeline from './components/ExperienceTimeline';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsCharts from './components/SkillsCharts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-brand-500 selection:text-white">
      <Hero />
      <ExperienceTimeline />
      <SkillsCharts />
      <ProjectsGrid />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Oyetunji, Temitayo Elijah. All rights reserved.</p>
          <p className="text-sm">
            Built with React, Tailwind and CSS.
          </p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;