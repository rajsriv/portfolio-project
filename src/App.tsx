import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Github, Mail, ExternalLink, Code, BookOpen, Shield, Brain, ArrowRight, Star, Sparkles, FileText, Coffee, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'writing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleEmailClick = () => {
    window.open('mailto:rajsriv@example.com?subject=Let\'s Connect&body=Hi Raj,%0D%0A%0D%0AI\'d love to discuss...', '_blank');
  };

  const skills = [
    { name: 'Web Development', level: 92, icon: Code, color: 'from-emerald-400 to-teal-600', description: 'React, JavaScript, TypeScript' },
    { name: 'Creative Problem Solving', level: 95, icon: Brain, color: 'from-purple-400 to-indigo-600', description: 'Innovative thinking & solutions (DSA)' },
    { name: 'Blender 3D modelling', level: 78, icon: Shield, color: 'from-red-400 to-pink-600', description: 'Low-poly Model development for easy web integration' },
    { name: 'Content Writiing', level: 88, icon: BookOpen, color: 'from-yellow-400 to-orange-600', description: 'Documentation/Articles/Blog Post' },
  ];

  const projects = [
    {
      title: 'Interactive Web Portfolio',
      description: 'Modern, responsive web applications built with React and TypeScript, focusing on user experience and performance optimization.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      accent: 'from-emerald-400 to-cyan-600',
      status: 'Live',
      link: 'https://rajsriv.github.io/portfolio-project/'
    },
    {
      title: 'Python Bots',
      description: 'Development tools and utilities with Telegram API for bot and web app development.',
      tech: ['Python', 'Telegram APIs', 'VM', 'Session Authentication'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      accent: 'from-red-400 to-pink-600',
      status: 'In Progress',
      link: 'https://github.com/rajsriv?tab=repositories'
    },
    {
      title: 'Music Player Web-App',
      description: 'Experimental and creative project that push the boundaries of what\'s possible with JavaScript, blending art and code.',
      tech: ['Vanilla JS', 'Web APIs', 'Creative Coding', 'UI/UX'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      accent: 'from-purple-400 to-blue-600',
      status: 'Ongoing'
    }
  ];

  const writings = [
    {
      title: 'The Basics of Google Cloud Compute',
      type: 'G-CLoud Computing',
      description: 'Earned a skill badge by completing the The Basics of Google Cloud Compute quest, where i learned how to work with virtual machines (VMs), persistent disks, and web servers using Compute Engine.',
      theme: 'https://www.cloudskillsboost.google/public_profiles/89558da5-cb30-471d-b649-0c7ab019592a/badges/16306063'
    },
    {
      title: 'Application and Network Infrastructure',
      type: 'ARCADE Level-1 JUNE, 2025',
      description: 'This set of labs helps you get practical experience deploying applications and managing cloud infrastructure on Google Cloud',
      theme: 'https://www.cloudskillsboost.google/public_profiles/89558da5-cb30-471d-b649-0c7ab019592a/badges/16452989'
    },
    {
      title: 'Google Security Operations - Deep Dive',
      type: 'Chronicles Security Operation Platform',
      description: 'Take the next steps in working with the Chronicle Security Operations Platform. Build on fundamental knowledge to go deeper on cusotmization and tuning.',
      theme: 'https://www.cloudskillsboost.google/public_profiles/89558da5-cb30-471d-b649-0c7ab019592a/badges/16225603'
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Cursor Follower */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-emerald-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-purple-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 transform rotate-12 animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
        }`} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Raj Srivastava
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Google', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-emerald-400 relative group ${
                    activeSection === (item === 'Home' ? 'hero' : item.toLowerCase()) ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    activeSection === (item === 'Home' ? 'hero' : item.toLowerCase()) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-900 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-b border-gray-800 px-6 py-6 space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Google', 'Contacts'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-300 hover:text-emerald-400 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-emerald-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up tracking-tight">
                Developer
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-yellow-400 to-white bg-clip-text text-transparent animate-fade-in-up tracking-tight" style={{ animationDelay: '0.2s' }}>
                & Designer
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.4s' }}>
                I'm <span className="text-emerald-400 font-semibold">Raj Srivastava</span>, a curious developer passionate about 
                <span className="text-purple-400 font-semibold"> technology</span>, 
                <span className="text-yellow-400 font-semibold"> 3D modelling</span>, and 
                <span className="text-pink-400 font-semibold"> literature</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-purple-400 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-emerald-400"
              >
                <span className="relative z-10">Let's Connect</span>
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="flex flex-col items-center space-y-2">
              <Coffee size={20} className="text-emerald-400 animate-pulse" />
              <ChevronDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Curious
                <br />
                Problem Solver
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Studying from <span className="text-emerald-400 font-semibold">Banaras Hindu University</span> with 
                  growing expertise in creative web (HTML5,CSS & JavaScript) projects and web-apps (based on flutter). I enjoy building full-stack applications, experimenting with frontend interactions using JavaScript, Three.js, and WebAssembly, and working on systems that balance performance with user experience.
                </p>
                <p className="text-lg leading-relaxed">
                 I’m also exploring the fundamentals of <span className="text-purple-400 font-semibold">cybersecurity—network protocols, ethical hacking, and secure design</span> and applying this knowledge to real-world projects. <span className="text-yellow-400 font-semibold">"Extremely intrested"</span> 
                  I’ve built tools ranging from browser extensions to simulation-based systems. I believe in learning by building, and I'm always looking to push boundaries through hands-on problem-solving.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm exploring opportunities in <span className="text-pink-400 font-semibold">Web development and Back-end tasks</span> where 
                  I can blend technical skill with empathy and creativity.
                </p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/rajsriv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="group-hover:text-emerald-400 transition-colors duration-300" />
                </a>
                <button
                  onClick={handleEmailClick}
                  className="group p-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="group-hover:text-yellow-400 transition-colors duration-300" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-purple-400/10" />
                <div className="h-full flex items-center justify-center relative z-10">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full mx-auto flex items-center justify-center">
                        <Heart size={32} className="text-black" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Passionate Creator</h3>
                      <p className="text-gray-400">Building with purpose</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-emerald-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Technical
              <br />
              Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combining technical skills with creative thinking and human understanding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-br from-gray-950 to-black rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon size={24} className="text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white">{skill.name}</h3>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Proficiency</span>
                        <span className="text-white font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight">
              Featured
              <br />
              Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meaningful tools and creative solutions built with modern technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-gray-950 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 relative">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.accent} rounded-full text-black text-xs font-bold`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-400 to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight">
              GOOGLE
              <br />
              & Skills
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learning latest industry ready tech. Cloud computing, VMs, SecOps Architecture & enrichment, Using compute engines and lots more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {writings.map((writing, index) => (
              <div key={writing.title} className="group">
                <div className="bg-gradient-to-br from-gray-950 to-black rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <FileText size={20} className="text-gray-600" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{writing.title}</h3>
                      <span className="text-sm text-purple-400 font-medium">{writing.type}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed text-sm">{writing.description}</p>
                    
                    <div className="pt-2">
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                        {writing.theme}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-emerald-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Let's Create
              <br />
              Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              Ready to build something meaningful? I'd love to hear about your project or opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleEmailClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Mail size={20} />
                  Email Me
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <a
                href="https://github.com/rajsriv"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 border-2 border-gray-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-emerald-400"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Github size={20} />
                  View GitHub
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Raj Srivastava. <span className="text-emerald-400">Building meaningful experiences through code and creativity.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
