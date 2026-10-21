import { useState, useEffect } from 'react';
import { ChevronDown, Network, Zap, Activity, ShieldCheck, Scale, Wrench, Sun, Mail, Phone, Menu, Linkedin, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), ...(certifications.length > 0 ? ['certifications'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Electrical Engineer with 7+ years of experience in power generation, HV electrical systems (11-132 kV), power plant operations, SCADA, protection systems, and transmission and distribution. Increased plant availability from 91% to 97%, reduced unplanned outages by 9%, and improved operational reliability through SCADA-based monitoring, load dispatch coordination, and predictive maintenance. Engineers Australia-assessed Professional Engineer with expertise in PSS®E, DIgSILENT PowerFactory, power system modelling, load-flow analysis, N-1 contingency studies, fault ride-through, NER/GPS compliance, and renewable energy grid integration.";

  const experience = [
    {
      company: "Dhaka Northern Power Generation Ltd. (Doreen Group)",
      role: "Shift In-Charge - Operations",
      location: "Bangladesh",
      dates: "Jun 2021 – Jan 2024",
      highlights: [
        "Directed 24/7 electrical operations of a 55 MW power plant, overseeing generator synchronisation, power output regulation, and generation control to meet Bangladesh Power Development Board (BPDB) requirements.",
        "Enhanced SCADA-based monitoring, generation parameter control, and load sharing across 3 MAN engines and a 2.7 MW co-generation turbine, increasing plant availability from 91% to 97%.",
        "Monitored high-voltage (HV) electrical equipment, generator performance, operational alarms, and fault conditions to strengthen generation reliability and minimise unplanned operational disruptions.",
        "Reduced fuel-consumption variance by 12% over 12 months through generation performance analysis, operating parameter optimisation, and continuous load monitoring.",
        "Coordinated electrical fault response, equipment condition monitoring, and maintenance interventions to minimise unplanned downtime and maintain safe power plant operations."
      ]
    },
    {
      company: "Digital Power & Associates Ltd. (Orion Group)",
      role: "Engineer - Operations",
      location: "Bangladesh",
      dates: "Mar 2019 – Jun 2021",
      highlights: [
        "Evaluated electrical system performance across a 102 MW power plant comprising 11 Wärtsilä engines, analysing generator operating parameters, equipment conditions, and generation output to maintain reliable power delivery.",
        "Monitored HV alternators, step-up transformers, circuit breakers, and ABB/Siemens protection relays, including differential, overcurrent fault, and earth-fault protection, using SCADA-based condition monitoring.",
        "Reduced unplanned outages by 9% through predictive maintenance, early fault identification, and electrical equipment performance monitoring, improving plant reliability and asset availability.",
        "Analysed SCADA alarms, electrical fault conditions, and generator operating parameters to strengthen fault response, equipment reliability, and continuity of power supply."
      ]
    },
    {
      company: "Baraka Power Limited",
      role: "Assistant Shift Engineer - Operations",
      location: "Sylhet, Bangladesh",
      dates: "Jul 2017 – Mar 2019",
      highlights: [
        "Optimised generation operations of a 51 MW gas-fired power plant using DIA.NEXT SCADA, improving generation performance and load distribution to increase plant uptime by 7%.",
        "Reduced unexpected shutdowns by 20% through SCADA-based condition monitoring, early fault detection, and predictive maintenance coordination, strengthening equipment reliability.",
        "Managed generator load balancing, electrical equipment monitoring, and operational fault response to ensure reliable power generation during peak demand periods."
      ]
    },
    {
      company: "Everest Power Generation Company Ltd. (Meghna Group)",
      role: "Junior Shift Engineer - Operations",
      location: "Bangladesh",
      dates: "Sep 2016 – Jan 2017",
      highlights: [
        "Monitored 54.4 MW of power generation capacity using SCADA and WOIS, analysing generator performance, load distribution, and operational parameters to maintain stable power supply.",
        "Coordinated electrical equipment condition monitoring and maintenance activities, strengthening fault response and operational reliability while maintaining zero recorded safety violations."
      ]
    },
    {
      company: "PRAN-RFL Group",
      role: "Assistant Production Manager",
      location: "Bangladesh",
      dates: "Sep 2015 – Aug 2016",
      highlights: [
        "Optimised workforce allocation, shift operations, and production resource utilisation across FMCG manufacturing lines, increasing production efficiency by 15% while maintaining ISO-aligned quality and safety standards."
      ]
    }
  ];

  const projects = [
    {
      title: "Grid Connection & Generator Performance Standards (GPS) Compliance Study - 50 MW Solar PV Plant",
      subtitle: "Flinders University · Adelaide, Australia",
      category: "Grid Integration & Compliance",
      introduction: "Developed a PSS®E v36.3 power system model for a 50 MW solar PV plant using the IEEE 9-Bus network, analysing grid connection performance, load flow, and power system stability.",
      problem: "A 50 MW solar PV plant connecting to the grid must demonstrate voltage stability, network resilience, and compliance with Generator Performance Standards under the National Electricity Rules.",
      objective: "Assess grid connection performance of a 50 MW solar PV plant and evaluate it against NER and AEMO-aligned grid connection requirements.",
      methodology: [
        "Built a PSS®E v36.3 model of the plant on the IEEE 9-Bus network and ran load-flow and stability analysis.",
        "Performed N-1 contingency analysis and transient three-phase-to-ground (3LG) fault ride-through simulations to evaluate voltage stability, network resilience, and solar PV integration.",
        "Analysed Generator Performance Standards (GPS), voltage recovery, reactive power capability, and Q-V droop control.",
        "Evaluated 4 National Electricity Rules (NER) clauses - S5.2.5.1, S5.2.5.4, S5.2.5.7, and S5.2.5.13 - and assessed mitigation strategies against AEMO-aligned grid connection requirements."
      ],
      results: [
        "Identified Bus 5 as a weak voltage node under the modelled network conditions.",
        "Assessed mitigation strategies against AEMO-aligned grid connection requirements."
      ],
      conclusion: "Demonstrated a structured PSS®E-based approach to checking solar PV grid connection performance against NER and GPS requirements."
    }
  ];

  const skillCategories = [
    {
      icon: Network,
      title: 'Power Systems & Grid Integration',
      skills: ['Power System Analysis', 'Grid Connection Studies', 'Renewable Energy Integration', 'Transmission & Distribution Networks', 'Load Flow Analysis', 'N-1 Contingency Analysis', 'Transient Stability Analysis', 'Fault Ride-Through Analysis', 'Power System Modelling']
    },
    {
      icon: Zap,
      title: 'HV Electrical Engineering',
      skills: ['High-Voltage (HV) Systems (11-132 kV)', 'Generator Synchronisation', 'Voltage & Frequency Control', 'Reactive Power Control', 'Power Transformers', 'Circuit Breakers', 'Switchgear', 'Protection Relays']
    },
    {
      icon: Activity,
      title: 'SCADA & Electrical Operations',
      skills: ['SCADA Systems', 'Power Generation Operations', 'Load Dispatch', 'Generator Load Balancing', 'SCADA-Based System Monitoring', 'Electrical Fault Diagnosis', 'Generator Performance Monitoring']
    },
    {
      icon: ShieldCheck,
      title: 'Electrical Protection & Maintenance',
      skills: ['Differential Protection', 'Overcurrent Protection', 'Earth-Fault Protection', 'Predictive Maintenance', 'Condition Monitoring', 'Electrical Isolation', 'Permit-to-Work Systems']
    },
    {
      icon: Scale,
      title: 'Australian Grid Standards',
      skills: ['National Electricity Rules (NER)', 'Generator Performance Standards (GPS)', 'AEMO Grid Connection Requirements', 'Voltage Recovery', 'Q-V Droop Control']
    },
    {
      icon: Wrench,
      title: 'Engineering Software & Tools',
      skills: ['PSS®E v36.3', 'DIgSILENT PowerFactory', 'MATLAB', 'DIA.NEXT SCADA', 'WOIS', 'Siemens SIPROTEC', 'ABB Protection Systems', 'Microsoft Excel']
    }
  ];

  const education = [
    {
      school: "Flinders University",
      degree: "Master of Engineering - Electrical and Electronic Engineering",
      location: "Adelaide, Australia",
      dates: "Feb 2024 – Nov 2025",
      details: ""
    },
    {
      school: "Chittagong University of Engineering and Technology (CUET)",
      degree: "Bachelor of Science - Electrical and Electronic Engineering",
      location: "Bangladesh",
      dates: "Jan 2011 – Jan 2016",
      details: ""
    }
  ];
  const papers: { title: string; publication: string; year: string; link: string }[] = [];

  const certifications: { title: string; platform: string; description: string; link: string }[] = [
    { title: "Professional Engineer Skills Assessment", platform: "Engineers Australia", description: "Electrical Engineer · ANZSCO 233311", link: "" },
    { title: "Temporary Graduate Visa (Subclass 485)", platform: "Australia · Available to commence immediately", description: "", link: "" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Siddertha Sankar Mohinta"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              SIDDERTHA SANKAR MOHINTA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Electrical Engineer · Power Systems & Grid Integration
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              ADELAIDE, SA, AUSTRALIA · OPEN TO RELOCATION ACROSS AUSTRALIA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PLANT AVAILABILITY', value: '97%', detail: 'Up from 91% at a 55 MW Plant' },
              { label: 'UNEXPECTED SHUTDOWNS', value: '-20%', detail: 'SCADA Condition Monitoring' },
              { label: 'EXPERIENCE', value: '7+ yrs', detail: 'HV Systems 11-132 kV' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Electrical engineer combining power plant operations experience with power system modelling and grid integration expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: 'Power Plant Operations',
                detail: 'Directed 24/7 operations of a 55 MW plant and monitored HV equipment, SCADA alarms, and protection relays to keep generation reliable.'
              },
              {
                icon: Activity,
                title: 'SCADA & Reliability',
                detail: 'Used SCADA-based monitoring and predictive maintenance to cut unplanned outages by 9% and unexpected shutdowns by 20%.'
              },
              {
                icon: Sun,
                title: 'Grid Integration & Compliance',
                detail: 'Model solar PV grid connections in PSS®E and assess NER and GPS compliance, including N-1 contingency and fault ride-through studies.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Power generation operations and electrical engineering experience across Bangladeshi power plants.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Grid connection and compliance study for a 50 MW solar PV plant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Power systems, HV engineering, SCADA, protection, and grid standards expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  {(edu.location || edu.dates) && (
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                      {edu.location}{edu.location && edu.dates ? ' · ' : ''}{edu.dates}
                    </div>
                  )}
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in AI, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                {cert.description && <p className="text-brown leading-relaxed font-light">{cert.description}</p>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Available to commence immediately. Let's discuss power systems and grid integration roles across Australia.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+61480635611"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +61 480 635 611
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/siddertha-mohinta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:siddertha.mohinta@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                siddertha.mohinta@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Siddertha Sankar Mohinta · Electrical Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
