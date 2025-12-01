import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { RESUME_DATA } from '../constants';

const SkillsCharts: React.FC = () => {
  // Flatten skills for Radar Chart (Top 6 skills)
  const topSkills = [
    { subject: '.NET Core', A: 95, fullMark: 100 },
    { subject: 'MS SQL', A: 90, fullMark: 100 },
    { subject: 'Rest API', A: 90, fullMark: 100 },
    { subject: 'Node.js', A: 85, fullMark: 100 },
    { subject: 'Azure', A: 85, fullMark: 100 },
    { subject: 'React Native', A: 85, fullMark: 100 },
  ];

  return (
    <section className="py-20 bg-slate-900" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Visualizing my technical stack and expertise levels.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Radar Chart for Top Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-6 shadow-xl border border-slate-700 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">Core Competencies</h3>
            <div className="w-full h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={topSkills}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    fill="#0ea5e9"
                    fillOpacity={0.4}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f1f5f9' }}
                    itemStyle={{ color: '#0ea5e9' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Skill Categories */}
          <div className="space-y-8">
            {RESUME_DATA.skills.map((category, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h4 className="text-md font-bold text-slate-200 mb-5 border-l-4 border-brand-500 pl-3">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="text-brand-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-brand-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)] transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCharts;