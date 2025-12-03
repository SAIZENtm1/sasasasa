import React, { useState } from 'react';
import { BookOpen, Layout, Brain, Monitor, Menu, X, Download, ChevronRight, Home, CheckCircle } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const DownloadButton = ({ fileName, label }) => (
    <button 
      onClick={() => alert(`Downloading ${fileName}... (This is a demo action)`)}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm my-4"
    >
      <Download size={18} />
      <span>{label}</span>
    </button>
  );

  const SectionHeader = ({ title, subtitle, icon: Icon }) => (
    <div className="mb-8 border-b pb-6 border-gray-200">
      <div className="flex items-center gap-3 text-blue-600 mb-2">
        {Icon && <Icon size={32} />}
        <span className="uppercase tracking-wide text-sm font-bold">Module</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
  const Figure = ({ src, alt, label, caption }) => (
    <div className="my-8 bg-gray-50 rounded-xl p-4 border border-gray-100 shadow-sm">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto max-h-[500px] object-contain mx-auto hover:scale-[1.02] transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-64 bg-gray-200 items-center justify-center text-gray-500">
           Image not found: {src}
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="font-bold text-gray-800 block">{label}</span>
        {caption && <span className="text-gray-600 text-sm italic">{caption}</span>}
      </div>
    </div>
  );

  const ContentBlock = ({ title, children }) => (
    <div className="mb-8">
      {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
      <div className="text-gray-700 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Designing Effective Lessons
            </h1>
            <p className="text-2xl text-blue-600 font-light mb-8">
              A Multimedia Guide for Educators
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm mb-12 text-left max-w-2xl mx-auto border-l-4 border-blue-500">
              <p className="text-lg text-gray-800">
                This interactive guide introduces four essential frameworks for lesson planning. Each section includes examples, visuals, templates, and teacher-friendly explanations based on multimedia learning principles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { id: 'foundations', title: 'Foundations of Lesson Planning', icon: Layout, desc: 'Objectives, activities, and assessment cycles.' },
                { id: 'udl', title: 'Universal Design for Learning', icon: Layout, desc: 'Engagement, Representation, and Action.' }, // Using Layout icon temporarily if Accessibility icon not available or for consistency
                { id: 'bloom', title: "Bloom's Taxonomy", icon: Brain, desc: 'Hierarchical levels of thinking skills.' },
                { id: 'digital', title: 'Digital Pedagogy', icon: Monitor, desc: 'Integrating technology meaningfully.' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 'foundations':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHeader 
              title="Foundations of Effective Lesson Planning" 
              subtitle="The integrated cycle of objectives, activities, and assessment."
              icon={Layout}
            />
            
            <ContentBlock>
              <p>
                A lesson plan serves as a structured road map that outlines what students should learn and how instruction will unfold during class time. Effective planning begins with identifying clear learning objectives, followed by selecting purposeful teaching and learning activities, and finally determining how student understanding will be assessed.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg my-6 border-l-4 border-yellow-400">
                <h3 className="font-bold text-lg mb-2">Three Core Elements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Objectives for student learning</li>
                  <li>Teaching and learning activities</li>
                  <li>Strategies to check understanding</li>
                </ul>
              </div>
            </ContentBlock>

            <Figure 
              src="image_1d1efc.jpg" 
              alt="Cycle of Lesson Planning" 
              label="Figure 1: The Integrated Cycle of Lesson Planning"
              caption="Objectives guide activities, and activities guide assessment."
            />

            <ContentBlock title="Steps for Preparing a Lesson Plan">
              <div className="space-y-8">
                {[
                  { title: "1. Outline learning objectives", text: "Begin by clarifying what you want students to know and be able to do. Rank objectives by importance to manage time effectively.", questions: ["What is the topic?", "What do I want students to learn?", "What must be covered even if time is short?"] },
                  { title: "2. Develop the introduction", text: "Plan an engaging introduction to spark interest (real-world examples, polls, dilemmas) and gauge prior knowledge.", questions: ["How will I check prior knowledge?", "What misconceptions might they have?"] },
                  { title: "3. Plan learning activities", text: "Prepare multiple ways of explaining key ideas (visuals, analogies) and build in interaction.", questions: ["How will I explain the topic?", "How can I engage students actively?"] },
                  { title: "4. Check for understanding", text: "Develop questions and tasks that reveal whether students are meeting objectives.", questions: ["What tasks demonstrate progress?", "Which activity aligns with each objective?"] },
                  { title: "5. Conclusion and preview", text: "Summarize main points and connect to the next topic.", questions: [] },
                  { title: "6. Create a realistic timeline", text: "Estimate durations, leave buffer time, and prepare backup activities.", questions: [] }
                ].map((step, idx) => (
                  <div key={idx} className="border-l-2 border-blue-200 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="mb-4">{step.text}</p>
                    {step.questions.length > 0 && (
                      <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                        <strong className="block text-gray-900 mb-1">Guiding Questions:</strong>
                        <ul className="list-disc pl-4 space-y-1">
                          {step.questions.map((q, i) => <li key={i}>{q}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ContentBlock>

            <div className="bg-blue-50 p-6 rounded-xl flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-lg text-blue-900">Ready to plan?</h3>
                <p className="text-blue-700">Get the structured template to start your design.</p>
              </div>
              <DownloadButton fileName="Lesson Planning Overview.docx" label="Download Sample Lesson Plan" />
            </div>
          </div>
        );

      case 'udl':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHeader 
              title="Universal Design for Learning (UDL)" 
              subtitle="Ensuring all students have equal opportunities to learn."
              icon={BookOpen}
            />

            <ContentBlock>
              <p>
                Universal Design for Learning (UDL) is an instructional framework that ensures all students have equal opportunities to learn. It encourages teachers to offer multiple pathways for students to access information, stay engaged, and demonstrate their understanding, rather than retrofitting accommodations later.
              </p>
            </ContentBlock>

            <Figure 
              src="image_1d1f3d.png" 
              alt="UDL Venn Diagram" 
              label="Figure 2: The Three Core Principles of UDL"
            />

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Representation", desc: "Present information in multiple formats (text, video, audio) to reach different learners.", color: "bg-green-100 text-green-800" },
                { title: "Action & Expression", desc: "Give learners options to show what they know (writing, speaking, creating).", color: "bg-blue-100 text-blue-800" },
                { title: "Engagement", desc: "Motivate students through relevant, varied, and autonomous activities.", color: "bg-orange-100 text-orange-800" }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${card.color}`}>
                    Principle {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>

            <ContentBlock title="Benefits of UDL">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> For Educators</h4>
                  <ul className="list-disc pl-8 space-y-2 text-gray-700">
                    <li>More inclusive instruction and better outcomes.</li>
                    <li>Reduces burden of individual accommodations.</li>
                    <li>Increases engagement and satisfaction.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-blue-500"/> For Learners</h4>
                  <ul className="list-disc pl-8 space-y-2 text-gray-700">
                    <li>Focus on learning, not navigating barriers.</li>
                    <li>Supports diversity and retention.</li>
                    <li>Reduces stigma through universal flexibility.</li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title="Practical Tips for Accessible Content">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                    <span>Use readable fonts and high-contrast colors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                    <span>Provide captions or transcripts for multimedia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                    <span>Keep language clear and predictable.</span>
                  </li>
                </ul>
              </div>
            </ContentBlock>

            <div className="bg-purple-50 p-6 rounded-xl flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-lg text-purple-900">Check your course</h3>
                <p className="text-purple-700">Download the full UDL Guidelines Checklist.</p>
              </div>
              <DownloadButton fileName="UDL.pdf" label="Download UDL Checklist" />
            </div>
          </div>
        );

      case 'bloom':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
             <SectionHeader 
              title="Bloom’s Taxonomy" 
              subtitle="From foundational knowledge to higher-order reasoning."
              icon={Brain}
            />

            <ContentBlock>
              <p>
                Bloom’s Taxonomy is a hierarchical framework used to classify learning objectives. It helps educators design lessons that progress from simple recall to complex creation. The updated version outlines six levels of thinking.
              </p>
            </ContentBlock>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Figure 
                  src="image_1d21e1.jpg" 
                  alt="Bloom's Taxonomy Pyramid" 
                  label="Figure 3: The Hierarchy of Cognitive Skills"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                {[
                  { lvl: 6, name: "Creating", desc: "Produce new or original work (Design, assemble, construct)." },
                  { lvl: 5, name: "Evaluating", desc: "Justify a stand or decision (Argue, defend, judge)." },
                  { lvl: 4, name: "Analyzing", desc: "Draw connections among ideas (Differentiate, organize, compare)." },
                  { lvl: 3, name: "Applying", desc: "Use information in new situations (Execute, solve, use)." },
                  { lvl: 2, name: "Understanding", desc: "Explain ideas or concepts (Classify, describe, discuss)." },
                  { lvl: 1, name: "Remembering", desc: "Recall facts and basic concepts (Define, duplicate, list)." },
                ].map((level) => (
                  <div key={level.lvl} className="border-l-4 border-indigo-500 pl-4 py-1">
                    <h4 className="font-bold text-indigo-900">{level.lvl}. {level.name}</h4>
                    <p className="text-sm text-gray-600">{level.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <ContentBlock title="Writing Effective Objectives">
              <p className="mb-4">
                Verb choice is critical. The verb determines the cognitive level of the task.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Avoid Vague Verbs</h4>
                  <ul className="list-disc pl-5 text-sm text-red-700">
                    <li>Understand</li>
                    <li>Learn</li>
                    <li>Know</li>
                    <li>Appreciate</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Use Measurable Verbs</h4>
                  <ul className="list-disc pl-5 text-sm text-green-700">
                    <li>Summarize (Understand)</li>
                    <li>Calculate (Apply)</li>
                    <li>Differentiate (Analyze)</li>
                    <li>Design (Create)</li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <div className="bg-indigo-50 p-6 rounded-xl flex items-center justify-between flex-wrap gap-4 mt-8">
              <div>
                <h3 className="font-bold text-lg text-indigo-900">Need the right words?</h3>
                <p className="text-indigo-700">Get the full table of Bloom's Taxonomy Verbs.</p>
              </div>
              <DownloadButton fileName="Blooms_Verbs.pdf" label="Download Verb Table" />
            </div>
          </div>
        );

      case 'digital':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <SectionHeader 
              title="Digital Pedagogy" 
              subtitle="Rethinking learning goals and interactions in a digital world."
              icon={Monitor}
            />

            <ContentBlock>
              <p>
                Digital pedagogy is not just about using technology to teach; it's about critically examining how technologies reshape learning. It shifts the focus from teacher-centered instruction to student-centered exploration, collaboration, and autonomy.
              </p>
            </ContentBlock>

            <ContentBlock title="Traditional vs. Digital Pedagogy">
              <p className="mb-6">
                The shift involves fundamental differences in the role of the teacher, the nature of communication, and the flexibility of learning.
              </p>
              
              <Figure 
                src="image_1d2200.jpg" 
                alt="Comparison Table: Traditional vs Digital Pedagogy" 
                label="Figure 4: Key Differences in Pedagogical Approaches"
              />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-700 mb-4 border-b border-gray-300 pb-2">Traditional</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li><strong>Focus:</strong> Teacher activity & content delivery.</li>
                    <li><strong>Role:</strong> Transmitter of knowledge.</li>
                    <li><strong>Interaction:</strong> One-way, passive reception.</li>
                    <li><strong>Motivation:</strong> Extrinsic, competitive.</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">Digital</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li><strong>Focus:</strong> Student learning & active construction.</li>
                    <li><strong>Role:</strong> Facilitator, mentor, designer.</li>
                    <li><strong>Interaction:</strong> Multi-directional, collaborative.</li>
                    <li><strong>Motivation:</strong> Intrinsic, autonomy-driven.</li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title="Tools for the Modern Educator">
               <p className="mb-6">
                A wide range of digital instruments supports this pedagogical shift, moving from static materials to interactive, global resources.
              </p>
              <Figure 
                src="image_1d21e8.jpg" 
                alt="Comparison Table: Traditional Instruments vs Digital Tools" 
                label="Figure 5: Evolution of Educational Tools"
              />

              <div className="mt-8 space-y-4">
                 {[
                   { cat: "LMS & Organization", tools: "Google Classroom, Canvas, Teams", purpose: "Structure lessons and monitor progress." },
                   { cat: "Content Creation", tools: "Canva, Genially, Adobe Express", purpose: "Design visually rich materials." },
                   { cat: "Collaboration", tools: "Padlet, Miro, Zoom", purpose: "Brainstorming and peer interaction." },
                   { cat: "Assessment", tools: "Kahoot, Quizizz, EdPuzzle", purpose: "Instant feedback and gamification." },
                 ].map((tool, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                     <div className="md:w-1/4 font-bold text-blue-600">{tool.cat}</div>
                     <div className="md:w-1/3 font-medium text-gray-800">{tool.tools}</div>
                     <div className="md:w-5/12 text-sm text-gray-500">{tool.purpose}</div>
                   </div>
                 ))}
              </div>
            </ContentBlock>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans text-gray-900">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <span className="font-bold text-lg text-blue-600">Lesson Design Guide</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="text-blue-400"/>
            Educator's Guide
          </h2>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'foundations', label: 'Foundations', icon: Layout },
            { id: 'udl', label: 'UDL Framework', icon: BookOpen }, // Using BookOpen as a generic icon for UDL if generic accessible icon not available
            { id: 'bloom', label: "Bloom's Taxonomy", icon: Brain },
            { id: 'digital', label: 'Digital Pedagogy', icon: Monitor },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                ${activeSection === item.id 
                  ? 'bg-blue-600 text-white font-medium shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-800 text-xs text-gray-500">
          © 2025 Educator Resources<br/>
          Designed for Teachers
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-white min-h-screen">
        {renderContent()}
      </main>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
