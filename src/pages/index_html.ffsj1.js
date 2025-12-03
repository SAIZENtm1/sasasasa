import React, { useState, useEffect } from 'react';
import {
  BookOpen, Layout, Brain, Monitor, Menu, X, Download,
  ChevronRight, Home, CheckCircle, Sparkles, ArrowRight, Star
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigateTo = (section) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveSection(section);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsVisible(true);
    }, 300);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'foundations', label: 'Foundations', icon: Layout },
    { id: 'udl', label: 'UDL Framework', icon: BookOpen },
    { id: 'bloom', label: "Bloom's Taxonomy", icon: Brain },
    { id: 'digital', label: 'Digital Pedagogy', icon: Monitor },
  ];

  // --- Premium Components ---

  const DownloadButton = ({ fileName, label }) => (
    <button onClick={() => alert(`Downloading ${fileName}...`)}
      className="group flex items-center gap-3 bg-indigo-600 text-white px-6 py-3.5 rounded-xl hover:bg-indigo-700 transition-all
    duration-300 font-medium text-sm tracking-wide shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
    >
      <Download size={18} className="group-hover:animate-bounce" />
      <span>{label}</span>
    </button>
  );

  const SectionHero = ({ title, subtitle, icon: Icon }) => (
    <div className="mb-16 relative">
      <div className="absolute -left-8 top-0 w-1 h-24 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-50 hidden md:block"></div>
      <div className="flex flex-col gap-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
          {Icon &&
            <Icon size={28} strokeWidth={1.5} />}
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const Figure = ({ src, alt, label, caption }) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className="my-16 group">
        <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60">
          <div className="bg-slate-50 rounded-xl overflow-hidden relative min-h-[300px] flex items-center justify-center border border-slate-100/50">
            {!hasError ? (
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.02]"
                onError={() => setHasError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Monitor size={32} className="opacity-40" />
                </div>
                <span className="text-sm font-medium">Image not available</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex gap-4 text-sm px-2">
          <span className="font-bold text-indigo-900 shrink-0 tracking-wide">{label}</span>
          {caption && <span className="text-slate-500 border-l-2 border-slate-200 pl-4 italic">{caption}</span>}
        </div>
      </div>
    );
  };

  const ContentCard = ({ title, children, className = "" }) => (
    <div className={`mb-12 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 tracking-tight">
          <div className="w-8 h-1 bg-indigo-500 rounded-full"></div>
          {title}
        </h2>
      )}
      <div className="text-slate-600 text-lg leading-loose space-y-6 font-light">
        {children}
      </div>
    </div>
  );

  const FeatureCard = ({ title, desc, icon: Icon }) => (
    <div
      className="group h-full p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-6 text-slate-400 group-hover:text-indigo-600 transition-colors bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-indigo-50">
        {Icon &&
          <Icon size={24} strokeWidth={1.5} />}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-light">{desc}</p>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="max-w-5xl mx-auto py-8 md:py-12">
            <div className="mb-24 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-100">
                Educator Guide 2.0
              </span>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-none">
                Designing<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Effective Lessons</span>
              </h1>
              <p
                className="text-2xl text-slate-500 font-light max-w-2xl leading-relaxed mb-12 border-l-4 border-indigo-500 pl-8">
                A clean, multimedia resource integrating Lesson Foundations, UDL, Bloom’s Taxonomy, and Digital Pedagogy.
              </p>

              <button onClick={() => navigateTo('foundations')}
                className="group flex items-center gap-4 text-lg font-semibold text-white bg-slate-900 px-8 py-4 rounded-full hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300"
              >
                Start Reading
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { id: 'foundations', title: 'Foundations', icon: Layout, desc: 'Master the cycle of objectives, activities, and assessment.' },
                { id: 'udl', title: 'UDL Framework', icon: BookOpen, desc: 'Design inclusive learning experiences for every student.' },
                { id: 'bloom', title: "Bloom's Taxonomy", icon: Brain, desc: 'Elevate thinking from remembering to creating.' },
                { id: 'digital', title: 'Digital Pedagogy', icon: Monitor, desc: 'Integrate technology with purpose and strategy.' }
              ].map((item) => (
                <div key={item.id} onClick={() => navigateTo(item.id)}
                  className="cursor-pointer group relative overflow-hidden bg-white border border-slate-100 p-8 rounded-3xl hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <item.icon size={120} />
                  </div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-900 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 font-light relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'foundations':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHero title="Foundations" subtitle="The integrated cycle of objectives, activities, and assessment."
              icon={Layout} />

            <ContentCard>
              <p className="text-xl text-slate-800 font-normal leading-relaxed">
                Effective planning is an integrated cycle where <span className="bg-indigo-50 text-indigo-900 px-2 py-0.5 rounded font-medium border-b-2 border-indigo-200">objectives
                  guide activities</span>, and <span className="bg-indigo-50 text-indigo-900 px-2 py-0.5 rounded font-medium border-b-2 border-indigo-200">activities guide
                    assessment</span>.
              </p>
            </ContentCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
              {['Objectives', 'Activities', 'Assessment'].map((el, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl text-center border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300">
                  <span className="block text-5xl font-bold text-slate-100 mb-4 font-mono">0{i + 1}</span>
                  <span className="font-bold text-lg text-slate-900 tracking-tight">{el}</span>
                </div>
              ))}
            </div>

            <Figure src="image_1d1efc.jpg" alt="Cycle of Lesson Planning" label="Figure 1"
              caption="The Integrated Cycle of Lesson Planning." />

            <div className="space-y-8 my-20 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
              {[
                { title: "1. Objectives", text: "Clarify what students should know. Rank by importance: Essential vs. Nice-to-know." },
                { title: "2. Introduction", text: "Hook interest with real-world examples. Gauge prior knowledge immediately." },
                { title: "3. Activities", text: "Use multiple formats (visuals, demos). Ensure active student participation." },
                { title: "4. Check Understanding", text: "Align assessment tasks directly with your initial objectives." },
                { title: "5. Conclusion", text: "Summarize key points and build a bridge to the next lesson." },
                { title: "6. Timeline", text: "Always leave buffer time. Flexibility is the hallmark of expert teaching." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <span className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-xs font-bold text-slate-300 group-hover:border-indigo-100 group-hover:text-indigo-500 transition-colors z-10">
                    {idx + 1}
                  </span>
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title.split('. ')[1]}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-slate-900 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-slate-200">
              <div>
                <h3 className="font-bold text-2xl text-white mb-2">Lesson Plan Template</h3>
                <p className="text-slate-400">Professional DOCX Format</p>
              </div>
              <DownloadButton fileName="Lesson Planning Overview.docx" label="Download Template" />
            </div>
          </div>
        );

      case 'udl':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHero title="Universal Design" subtitle="Designing for the margins benefits everyone." icon={BookOpen} />

            <ContentCard>
              <div className="bg-indigo-50/50 p-8 rounded-2xl border-l-4 border-indigo-500">
                <p className="font-serif italic text-2xl text-indigo-900 leading-relaxed mb-6">
                  "Universal Design for Learning is not about differentiating for a few; it's about designing for the
                  variability of all."
                </p>
                <p className="text-indigo-700/80 font-medium">
                  Just as curb cuts help people in wheelchairs and travelers with luggage, UDL strategies assist every learner
                  by proactively removing barriers.
                </p>
              </div>
            </ContentCard>

            <Figure src="image_1d1f3d.png" alt="UDL Venn Diagram" label="Figure 2"
              caption="The Three Core Principles of UDL." />

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <FeatureCard title="Representation" desc="The 'WHAT'. Provide multiple means of acquiring info."
                icon={Layout} />
              <FeatureCard title="Action" desc="The 'HOW'. Allow students to demonstrate knowledge differently."
                icon={Sparkles} />
              <FeatureCard title="Engagement" desc="The 'WHY'. Tap into interests and offer challenges." icon={Star} />
            </div>

            <ContentCard title="Quick Audit">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden">
                <ul className="divide-y divide-slate-100">
                  {[
                    "Use high-contrast colors and readable fonts.",
                    "Provide captions for all video content.",
                    "Structure documents with clear headings.",
                    "Offer alternatives for fine-motor activities."
                  ].map((tip, i) => (
                    <li key={i} className="flex items-center gap-6 p-6 hover:bg-slate-50 transition-colors">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">0{i + 1}</span>
                      <span className="text-slate-700 font-medium">{tip}</span>
                      <CheckCircle size={20} className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>
              </div>
            </ContentCard>

            <div
              className="bg-gradient-to-r from-indigo-600 to-violet-600 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-200">
              <div>
                <h3 className="font-bold text-2xl text-white mb-2">UDL Checklist</h3>
                <p className="text-indigo-100">Comprehensive PDF Guide</p>
              </div>
              <button onClick={() => alert(`Downloading UDL.pdf...`)}
                className="flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors
            duration-200 font-bold text-sm tracking-wide shadow-lg"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        );

      case 'bloom':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHero title="Bloom’s Taxonomy" subtitle="A hierarchy of cognitive skills for deeper learning."
              icon={Brain} />

            <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
              <div className="w-full lg:w-1/2">
                <Figure src="image_1d21e1.jpg" alt="Bloom's Taxonomy Pyramid" label="Figure 3"
                  caption="Cognitive Hierarchy." />
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                {[
                  { lvl: 6, name: "Creating", desc: "Design, Assemble, Construct" },
                  { lvl: 5, name: "Evaluating", desc: "Argue, Defend, Judge" },
                  { lvl: 4, name: "Analyzing", desc: "Differentiate, Organize" },
                  { lvl: 3, name: "Applying", desc: "Execute, Solve, Use" },
                  { lvl: 2, name: "Understanding", desc: "Classify, Describe" },
                  { lvl: 1, name: "Remembering", desc: "Define, List, Recall" },
                ].map((level) => (
                  <div key={level.lvl} className="group flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className={`text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center ${level.lvl > 3 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>0{level.lvl}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 group-hover:text-indigo-700 transition-colors">{level.name}</h4>
                      <p className="text-sm text-slate-500">{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContentCard title="Verbs Matter">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-900 mb-6 pb-4 border-b border-red-100 flex items-center gap-2">
                    <X size={18} />
                    Avoid (Vague)
                  </h4>
                  <ul className="text-red-700/70 space-y-3 font-medium">
                    {['Understand', 'Learn', 'Know', 'Appreciate'].map(v => (
                      <li key={v} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-300"></span>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-6 pb-4 border-b border-emerald-100 flex items-center gap-2">
                    <CheckCircle size={18} />
                    Use (Measurable)
                  </h4>
                  <ul className="text-emerald-800 space-y-3 font-bold">
                    {['Summarize', 'Calculate', 'Differentiate', 'Design'].map(v => (
                      <li key={v} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ContentCard>

            <div className="mt-16 text-center">
              <DownloadButton fileName="Blooms_Verbs.pdf" label="Download Verb Guide" />
            </div>
          </div>
        );

      case 'digital':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHero title="Digital Pedagogy" subtitle="Rethinking learning for the connected world." icon={Monitor} />

            <ContentCard>
              <p className="text-xl leading-relaxed">
                Digital pedagogy isn't just digitizing worksheets. It's about shifting the <strong className="text-indigo-600">locus of control</strong>
                from teacher-as-broadcaster to teacher-as-designer.
              </p>
            </ContentCard>

            <div className="my-20">
              <h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-widest text-center">The Pedagogical Shift
              </h3>
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100">
                  <div className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Aspect</div>
                  <div className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-center">Traditional</div>
                  <div className="p-6 font-bold text-indigo-600 text-xs uppercase tracking-wider text-center bg-indigo-50/50">Digital</div>
                </div>

                <div className="divide-y divide-slate-50">
                  {[
                    { aspect: 'Center', trad: 'Teacher', dig: 'Student' },
                    { aspect: 'Role', trad: 'Transmitter', dig: 'Facilitator' },
                    { aspect: 'Motivation', trad: 'Grades', dig: 'Autonomy' }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 hover:bg-slate-50/50 transition-colors">
                      <div className="p-6 text-sm font-bold text-slate-700">{row.aspect}</div>
                      <div className="p-6 text-sm text-slate-500 text-center">{row.trad}</div>
                      <div className="p-6 text-sm font-bold text-indigo-700 text-center bg-indigo-50/10">{row.dig}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden">
              <Figure src="image_1d2200.jpg" alt="Comparison Table" label="Figure 4" />
            </div>

            <ContentCard title="Toolkit">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { cat: "Management", tools: "Google Classroom, Canvas", icon: Layout },
                  { cat: "Creation", tools: "Canva, Genially, Adobe", icon: Sparkles },
                  { cat: "Collaboration", tools: "Padlet, Miro, Zoom", icon: Brain },
                  { cat: "Gamification", tools: "Kahoot, Quizizz", icon: Star },
                ].map((tool, i) => (
                  <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-indigo-100/40 hover:border-indigo-100 transition-all duration-300 group bg-slate-50/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white rounded-lg text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <tool.icon size={18} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{tool.cat}</h4>
                    </div>
                    <p className="text-slate-500 text-sm pl-11">{tool.tools}</p>
                  </div>
                ))}
              </div>
            </ContentCard>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden selection:bg-indigo-500 selection:text-white">

      {/* Mobile Header */}
      <div
        className="md:hidden fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Brain size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Lesson Design</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-700 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-slate-100">
          {isMobileMenuOpen ?
            <X size={24} strokeWidth={2} /> :
            <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside className={` fixed md:relative top-0 left-0 h-full w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 z-40
        transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col shadow-2xl md:shadow-none ${isMobileMenuOpen ? 'translate-x-0'
          : '-translate-x-full md:translate-x-0'} `}>
        <div className="p-8 pb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Brain size={24} />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-none">Educator's<br /><span className="text-indigo-600">Guide</span></h2>
          </div>
          <div className="h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigateTo(item.id)}
              className={`
                w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden
                ${activeSection === item.id
                  ? 'text-indigo-600 bg-indigo-50 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                `}
            >
              {activeSection === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-l-xl"></div>
              )}
              <item.icon size={20} strokeWidth={activeSection === item.id ? 2 : 1.5}
                className={`${activeSection === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
              {item.label}
              {activeSection === item.id && <ChevronRight size={16} className="ml-auto text-indigo-400" />}
            </button>
          ))}
        </nav>

        <div className="p-6 m-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">v2.1 Premium Edition</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-slate-50/50">
        <div className={`max-w-7xl mx-auto w-full p-6 md:p-12 md:pb-24 pt-24 md:pt-12 transition-all duration-700 ease-out ${isVisible
          ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>
          {renderContent()}
        </div>
      </main>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
