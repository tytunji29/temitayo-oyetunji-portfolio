import React from 'react';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-xl">
              A selection of projects demonstrating impactful solutions in Fintech, Government, and RegTech sectors.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors mt-6 md:mt-0">
            View All Projects <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="group bg-slate-900 rounded-xl p-6 hover:bg-slate-800 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-950 rounded-lg text-brand-500 group-hover:text-brand-400 transition-colors border border-slate-800">
                  <FolderGit2 size={24} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-brand-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-brand-400 font-medium">
                View All Projects <ArrowUpRight size={16} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;