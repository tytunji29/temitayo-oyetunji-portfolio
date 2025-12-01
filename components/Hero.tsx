import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  const { personalInfo } = RESUME_DATA;

  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-500 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-brand-500/20 text-brand-100 rounded-full text-sm font-semibold border border-brand-500/30">
              Senior Software Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-400">
                {personalInfo.name.split(',')[1]}
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                <Mail size={16} className="text-brand-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                <Phone size={16} className="text-brand-500" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
                <MapPin size={16} className="text-brand-500" />
                <span>{personalInfo.address}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="components/image/TytunjiCv.pdf" download="Oyetunji_Temitayo_CV.pdf">
                <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-brand-900/20">
                  <Download size={18} />
                  Download Resume
                </button>
              </a>
              <a href="https://github.com/tytunji29" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/oyetunji-temitayo-73b11b17a/" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="components/image/51282145-3615-42A2-9560-741F1978422B_1_105_c.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-500/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-slate-400">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;