import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">A timeline of my professional journey and key contributions.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {RESUME_DATA.experience.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 border-4 border-slate-950 shadow-lg z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 w-full md:w-1/2"></div>

                {/* Content Card */}
                <div className={`flex-1 w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800 hover:border-brand-500/30 transition-all hover:shadow-brand-900/10 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-100">{job.company}</h3>
                      <span className="text-xs font-semibold px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                        {job.type}
                      </span>
                    </div>
                    <div className="text-brand-400 font-medium mb-3 flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.role}
                    </div>
                    <div className="flex items-center text-slate-500 text-sm mb-4">
                      <Calendar size={14} className="mr-2" />
                      {job.period}
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;