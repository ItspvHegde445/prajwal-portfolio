import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Mail, Instagram, Linkedin, Twitter, Phone, MessageSquare,
  ArrowLeft, Zap, TrendingUp, Users, Globe, Target, Award, X, Menu
} from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCard, setActiveCard] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState(null); // State to handle scroll targeting

  // Contact Information
  const emailAddress = "prajju569@gmail.com";
  const phoneNumber = "7795482191";
  const whatsappLink = `https://wa.me/91${phoneNumber}`; 
  const linkedinUrl = "https://www.linkedin.com/in/itspvhegde/";
  const instagramUrl = "https://www.instagram.com/itspvhegde/?hl=en";
   
  // Data for the Influencer Section
  const influencers = [
    { name: "Samay Raina", url: "https://i.ibb.co/Myt44JFv/Untitled-design-16.png", instagram: "https://www.instagram.com/maisamayhoon?igsh=bzVvcXVzNDloaTF0" },
    { name: "Nishant Tanwar", url: "https://i.ibb.co/ycPVVN09/Nishant-Tanwar.jpg", instagram: "https://www.instagram.com/nishanttanwar?igsh=dWR1bXJ3Z2M4Z2Iy" },
    { name: "Kenny Sebastian", url: "https://i.ibb.co/pjSNFJKQ/Kenny-Sabastin.jpg", instagram: "https://www.instagram.com/kennethseb?igsh=MXkyNHY0ZWZ0Y3k1aA==" },
    { name: "Aashish Solanki", url: "https://i.ibb.co/20qjPzSb/Ashish-Solanki.jpg", instagram: "https://www.instagram.com/ashishsolanki_1?igsh=N25tb2U1ZHIxNzh2" },
    { name: "Ishaan", url: "https://i.ibb.co/Y4cYb12F/IMG-1981-2.jpg", instagram: "https://www.instagram.com/ishansharma7390?igsh=dDB1eXE4M3I4bGxt" },
    { name: "Saksham Gaur", url: "https://i.ibb.co/VWqzQXPF/IMG-1961-3.jpg", instagram: "https://www.instagram.com/whysaksham?igsh=MWcybHBpd2FoZWM2Zw==" },
    { name: "Kishen Bilagali", url: "https://i.ibb.co/0jPHfsgj/Kishan-Beligali.jpg", instagram: "https://www.instagram.com/kishenbilagali?igsh=NDQ0eHZubzh1Mndz" },
    { name: "Kailash (Brokebrothers)", url: "https://i.ibb.co/0jM5BHpT/IMG-1960.jpg", instagram: "https://www.instagram.com/kailasshskumar?igsh=MTJicGVtcno3eTFiYw==" },
  ];

  // --- MODAL COMPONENT ---
  const StatDetailModal = ({ onClose }) => {
    const data = [
      { 
        icon: Users, 
        title: "151K+ Conversions", 
        detail: "Achieved over 151,000 successful bookings and inquiries.",
        color: "text-[#ccff00]"
      },
      { 
        icon: Target, 
        title: "₹36.28 Cost/Conv.", 
        detail: "Maintained an efficient average cost per conversion across all networks.",
        color: "text-red-500"
      },
      { 
        icon: Zap, 
        title: "Mobile Dominance", 
        detail: "94.5% of clicks and 85.9% of conversions originated from mobile.",
        color: "text-blue-500"
      },
      { 
        icon: TrendingUp, 
        title: "High Search CTR", 
        detail: "Generic search ads consistently delivered a high 7.99% CTR.",
        color: "text-green-500"
      },
    ];

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-end md:items-center justify-center p-0 md:p-4 backdrop-blur-sm animate-in fade-in">
        <div className="w-full max-w-2xl bg-[#111] border-t-4 md:border-4 border-[#ccff00] shadow-[0px_-10px_0px_0px_rgba(204,255,0,0.1)] md:shadow-[10px_10px_0px_0px_#ccff00] p-6 md:p-10 relative animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-300 max-h-[85vh] overflow-y-auto rounded-t-3xl md:rounded-none">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:text-[#ccff00] transition-colors bg-[#222] p-2 rounded-full"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
           
          <h3 className="text-2xl md:text-4xl font-black uppercase text-[#ccff00] mb-2 pr-8">VRL Campaign Metrics</h3>
          <p className="font-mono text-xs md:text-sm text-gray-400 mb-6 md:mb-8">Performance summary for the ₹54.7 Lakhs ad spend.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-[#ccff00] transition-colors rounded-lg md:rounded-none">
                <div className="flex items-center gap-3 mb-2">
                    <item.icon size={24} className={`${item.color}`} />
                    <h4 className="font-bold text-base md:text-lg text-white leading-none">{item.title}</h4>
                </div>
                <p className="text-xs text-gray-400 pl-[36px]">{item.detail}</p>
              </div>
            ))}
          </div>
           
          <div className="mt-8 pt-4 border-t border-[#333]">
             <p className="text-xs text-gray-500 font-mono">
                Key focus areas included Search, Performance Max, and competitor keyword targeting 
                for maximum market penetration across India.
             </p>
          </div>
        </div>
      </div>
    );
  };
   
  // --- MOCK PAGES ---

  const WorkPage = () => (
    <div className="min-h-screen bg-[#111] text-white p-4 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-20">
      <div className="max-w-7xl mx-auto pt-12 md:pt-0">
        <h2 className="text-5xl md:text-[8vw] font-black uppercase leading-[0.9] text-[#ccff00] mb-8 md:mb-12 border-b border-[#333] pb-6 md:pb-8">
          Selected<br />Mission Logs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { 
              client: "VRL Travels", 
              role: "Marketing Associate", 
              stat: "54L+ Ad Spend", 
              desc: "Orchestrated board-level strategy and high-volume performance campaigns.",
              tags: ["Strategy", "PPC", "Analytics"],
              link: "https://www.instagram.com/vrlbus.in/?hl=en" 
            },
            { 
              client: "Nishant Tanwar", 
              role: "Artist Manager", 
              stat: "Nationwide Tours", 
              desc: "Managed end-to-end logistics and content for top-tier comedy tours.",
              tags: ["Talent Mgmt", "Events", "Content"],
              link: "https://www.instagram.com/nishanttanwar/?hl=en" 
            },
            { 
              client: "IRL Meetups LLP", 
              role: "Social Media Lead", 
              stat: "Community Growth", 
              desc: "Scaled digital presence and executed on-ground community events.",
              tags: ["Community", "Meta Ads", "Ops"]
            },
             { 
              client: "Film Production", 
              role: "Consultant", 
              stat: "T-Series Collab", 
              desc: "Facilitated high-stakes PR deals with critics and production houses.",
              tags: ["PR", "Influencer", "Box Office"],
              link: "https://twitter.com/search?q=%23RONNYTheRuler&src=typed_query"
            }
          ].map((project, i) => (
            <div key={i} className="group relative bg-[#1a1a1a] border border-[#333] p-6 md:p-8 hover:bg-[#ccff00] hover:text-black transition-all duration-300 rounded-lg md:rounded-none">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <span className="font-mono text-[10px] md:text-xs border border-current px-2 py-1 uppercase tracking-wider">{project.role}</span>
                <div className="flex items-center gap-2">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white group-hover:text-black opacity-80 hover:opacity-100 transition-opacity p-1"
                            aria-label={`${project.client} Social Link`}
                        >
                            {project.client === "Film Production" ? <TrendingUp size={20} /> : <Instagram size={20} />}
                        </a>
                    )}
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 md:opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 md:mb-4 leading-none">{project.client}</h3>
              <div className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-mono">{project.stat}</div>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-black/80 mb-6 md:mb-8">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-60 border border-current px-1.5 rounded-sm">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => {
    // Scroll to specific section if targetSection is set
    useEffect(() => {
        if (targetSection === 'influencers') {
            const element = document.getElementById('influencer-network');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
                setTargetSection(null);
            }
        }
    }, []);

    return (
      <div className="min-h-screen bg-[#e0e0e0] text-black p-4 md:p-12 animate-in fade-in zoom-in-95 duration-500 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:gap-12 pt-12 md:pt-0">
          
          {/* --- Section 1: Introduction & Status --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8">
              <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 md:mb-8 tracking-tighter leading-[0.85] md:leading-[0.8]">
                Architect of<br/>Influence.
              </h2>
              <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8">
                I'm Prajwal Hegde. I don't just "do marketing"—I engineer attention.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
                From the high-pressure environment of VRL Travels boardrooms to the creative chaos of backstage comedy tours with Nishant Tanwar and Samay Raina, I thrive where data meets culture.
              </p>
              <div className="bg-black text-white p-6 md:p-8 inline-block rotate-1 shadow-[6px_6px_0px_0px_#ccff00] md:shadow-[10px_10px_0px_0px_#ccff00]">
                <span className="font-mono text-[#ccff00] block mb-2 text-xs md:text-sm">CURRENT STATUS</span>
                <div className="text-xl md:text-2xl font-bold uppercase">Available for Hire</div>
              </div>
            </div>
            <div className="md:col-span-4 space-y-4">
              <div className="border-t-4 border-black pt-4">
                <h3 className="font-black uppercase text-xl mb-4">Core Stack</h3>
                <ul className="space-y-3 font-mono text-xs md:text-sm">
                  <li className="flex justify-between border-b border-gray-400 pb-1"><span>Brand Strategy</span><span>100%</span></li>
                  <li className="flex justify-between border-b border-gray-400 pb-1"><span>Influencer Mgmt</span><span>100%</span></li>
                  <li className="flex justify-between border-b border-gray-400 pb-1"><span>Performance Ads</span><span>95%</span></li>
                  <li className="flex justify-between border-b border-gray-400 pb-1"><span>Event Ops</span><span>90%</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- Section 2: Influencer Network Grid --- */}
          <div id="influencer-network" className="mt-8 md:mt-16 pt-8 md:pt-12 border-t-4 border-black scroll-mt-20">
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 md:mb-8 tracking-tighter text-black leading-none">
              Influencer<br/>Network
            </h3>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-8 md:mb-12">
              Leveraging partnerships with some of the biggest names in the Indian comedy and entertainment circuits.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {influencers.map((person, index) => (
                <a 
                  key={index} 
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative w-full aspect-square bg-gray-200 p-1 md:p-1.5 border-2 md:border-4 border-black group-hover:border-[#ccff00] transition-colors duration-300 shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                    <img 
                      src={person.url} 
                      alt={person.name} 
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/000000/ccff00?text=P+H" }}
                    />
                    {/* Floating Label / Name Tag - Simplified for mobile */}
                    <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-[#ccff00] px-2 md:px-4 py-0.5 md:py-1 font-bold uppercase text-[10px] md:text-xs whitespace-nowrap border border-[#ccff00] rotate-[-2deg] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-1">
                        <Instagram size={8} />
                        <span>{person.name.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="min-h-screen bg-[#ccff00] text-black flex flex-col items-center justify-center p-4 md:p-6 animate-in fade-in duration-500">
      <div className="w-full max-w-4xl border-4 border-black bg-white shadow-[10px_10px_0px_0px_#000] md:shadow-[20px_20px_0px_0px_#000] p-6 md:p-16 text-center">
        <h2 className="text-4xl md:text-8xl font-black uppercase mb-4 md:mb-6 leading-none">Initialize<br/>Protocol</h2>
        <p className="font-mono text-sm md:text-lg mb-8 md:mb-12 text-gray-600">
          Ready to deploy a new campaign? Let's talk numbers, strategy, and scale.
        </p>
        
        <div className="space-y-4 md:space-y-6">
          {/* Email Contact Link */}
          <a 
            href={`mailto:${emailAddress}`}
            className="group block bg-black text-[#ccff00] text-lg md:text-4xl font-black uppercase px-4 py-4 md:px-8 hover:bg-[#111] transition-all duration-300 relative break-all md:break-normal"
          >
            <Mail size={24} className="inline-block mr-2 md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 md:w-8 md:h-8"/>
            {emailAddress}
          </a>

          {/* WhatsApp / Phone Contact Link */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black text-white text-lg md:text-4xl font-black uppercase px-4 py-4 md:px-8 hover:bg-[#111] transition-all duration-300 relative"
          >
            <MessageSquare size={24} className="inline-block mr-2 md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 md:w-8 md:h-8 text-green-400"/>
            +91 {phoneNumber}
          </a>
        </div>
        
        <div className="mt-8 md:mt-12 flex justify-center gap-6 md:gap-8">
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-125 transition-transform text-black hover:text-blue-700"><Linkedin size={32} md:size={40} /></a>
           <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-125 transition-transform text-black hover:text-pink-600"><Instagram size={32} md:size={40} /></a>
           <a href="#" className="p-2 hover:scale-125 transition-transform text-black hover:text-blue-500"><Twitter size={32} md:size={40} /></a>
        </div>
      </div>
    </div>
  );

  // --- MOBILE MENU COMPONENT ---
  const MobileMenu = () => (
    <div className={`fixed inset-0 bg-[#050505] z-[100] flex flex-col justify-center items-center p-8 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#ccff00]"
        >
            <X size={32} />
        </button>
        <nav className="flex flex-col gap-8 text-center">
            {['Home', 'Work', 'About', 'Contact'].map(item => (
            <button 
                key={item} 
                onClick={() => {
                    setCurrentPage(item.toLowerCase());
                    setMobileMenuOpen(false);
                }}
                className="text-5xl font-black uppercase text-white hover:text-[#ccff00] transition-colors"
            >
                {item}
            </button>
            ))}
        </nav>
        <div className="absolute bottom-8 text-gray-500 font-mono text-xs uppercase tracking-widest">
            Prajwal.System_v2
        </div>
    </div>
  );

  // --- MAIN HOME LAYOUT ---

  const HomeGrid = () => (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-6 overflow-x-hidden font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Header / Nav */}
      <header className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 relative z-40">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ccff00] animate-pulse"></div>
          <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Prajwal.System_v2</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {['Work', 'About', 'Contact'].map(item => (
            <button 
              key={item} 
              onClick={() => setCurrentPage(item.toLowerCase())}
              className="hover:text-[#ccff00] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        {/* Mobile Menu Trigger */}
        <button 
            className="md:hidden text-[#ccff00] font-bold uppercase flex items-center gap-2 border border-[#ccff00] px-3 py-1 rounded-sm"
            onClick={() => setMobileMenuOpen(true)}
        >
            <span>Menu</span>
            <Menu size={16} />
        </button>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto_auto] gap-4 max-w-[1800px] mx-auto">
        
        {/* Row 1: The Title & Role (Spans full width) */}
        <div className="md:col-span-8 bg-[#111] border border-white/10 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group min-h-[200px]">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Globe className="text-[#ccff00]" />
          </div>
          <h2 className="text-[#ccff00] font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-2">Marketing Strategist</h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] md:leading-[0.8] tracking-tighter mix-blend-screen z-10 break-words">
            Prajwal<br />Hegde
          </h1>
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>
        </div>

        {/* Row 1: Quick Stat Card (Now Clickable) */}
        <div 
          className="md:col-span-4 bg-[#ccff00] text-black p-6 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer min-h-[160px]" 
          onClick={() => setActiveCard('vrl_stats')}
        >
          <div className="flex justify-between items-start">
             <Target size={32} />
             <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
          </div>
          <div>
            <div className="text-5xl font-black mb-1">54L+</div>
            <div className="font-bold uppercase tracking-tighter text-sm">Ad Spend Managed (Tap for Info)</div>
            <div className="mt-4 text-xs font-mono border-t border-black pt-2 flex justify-between">
              <span>Client: VRL Travels</span>
              <span>2024</span>
            </div>
          </div>
        </div>

        {/* Row 2: Image & Skills */}
        
        {/* Left Column: Skills Ticker */}
        <div className="md:col-span-3 bg-[#111] border border-white/10 flex flex-col order-last md:order-none">
          <div className="p-4 border-b border-white/10 font-mono text-xs text-gray-500 uppercase">Expertise Module</div>
          <div className="flex-1 p-6 space-y-4 grid grid-cols-2 md:grid-cols-1">
             {[
               { 
                 icon: Users, 
                 label: "Influencer Mgmt",
                 action: () => {
                    setTargetSection('influencers');
                    setCurrentPage('about');
                 }
               },
               { 
                 icon: TrendingUp, 
                 label: "SEO / SEM",
                 action: () => setActiveCard('vrl_stats')
               },
               { 
                 icon: Zap, 
                 label: "Content Strategy",
                 action: () => setCurrentPage('work')
               },
               { 
                 icon: Award, 
                 label: "Brand Partnerships",
                 action: () => setCurrentPage('work')
               }
             ].map((skill, idx) => (
               <button 
                 key={idx} 
                 onClick={skill.action}
                 className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#ccff00] transition-colors cursor-pointer w-full text-left"
               >
                 <skill.icon size={18} />
                 <span className="font-bold uppercase text-xs md:text-sm">{skill.label}</span>
               </button>
             ))}
          </div>
          <div className="bg-[#222] p-4 text-center">
             <button onClick={() => setCurrentPage('work')} className="text-xs font-bold uppercase hover:text-[#ccff00] underline">View Full Arsenal</button>
          </div>
        </div>

        {/* Center: Hero Image Container */}
        <div className="md:col-span-6 relative h-[350px] md:h-[600px] bg-[#1a1a1a] border border-white/10 overflow-hidden flex items-end justify-center group">
          {/* Futuristic Arch SVG Background */}
          <svg className="absolute inset-0 w-full h-full text-[#ccff00]/5" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L0 20 Q50 0 100 20 L100 100 Z" fill="currentColor" />
          </svg>
          
          <img 
            src="https://i.ibb.co/C5V5TKTQ/Untitled-design-15.png" 
            alt="Prajwal" 
            className="relative z-10 h-[105%] w-auto object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/1a1a1a/ccff00?text=Prajwal+Hegde" }}
          />

          {/* Floating Sticker: Vijayananda Travels */}
          <div className="absolute top-4 left-4 md:top-10 md:left-10 z-20 bg-white text-black px-3 py-1 md:px-4 md:py-2 font-black uppercase text-[10px] md:text-xs rotate-[-6deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            Vijayananda Travels
          </div>
          
           {/* Floating Sticker: Samay Raina */}
           <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 z-20 bg-[#ff00ff] text-white px-3 py-1 md:px-4 md:py-2 font-black uppercase text-[10px] md:text-xs rotate-[3deg] shadow-[4px_4px_0px_0px_rgba(255,0,255,0.4)]">
             Collab: Samay Raina
          </div>
        </div>

        {/* Right Column: Experience Highlights */}
        <div className="md:col-span-3 flex flex-col gap-4">
           {/* Card 1 */}
           <div className="flex-1 bg-[#111] border border-white/10 p-6 hover:border-[#ccff00] transition-colors cursor-pointer group min-h-[140px]" onClick={() => setCurrentPage('work')}>
             <div className="bg-[#333] w-8 h-8 flex items-center justify-center rounded-full mb-4 text-[#ccff00] group-hover:scale-110 transition-transform">
               <Zap size={16} />
             </div>
             <h3 className="font-bold text-lg leading-tight mb-2">High Impact Campaigns</h3>
             <p className="text-xs text-gray-400 font-mono">Driving ROI for brands like T-Series & VRL.</p>
           </div>

           {/* Card 2 */}
           <div className="flex-1 bg-[#e0e0e0] text-black p-6 hover:bg-white transition-colors cursor-pointer min-h-[140px]" onClick={() => setCurrentPage('contact')}>
             <h3 className="font-black text-4xl uppercase mb-1">Let's<br/>Talk</h3>
             <div className="w-full h-[1px] bg-black my-4"></div>
             <div className="flex justify-between items-center font-bold text-sm uppercase">
               <span>Contact Me</span>
               <ArrowUpRight size={20} />
             </div>
           </div>
        </div>
      </div>

      {/* Footer Marquee */}
      <div className="mt-6 border-t border-white/10 pt-6">
         <div className="overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee gap-8 text-[#333] font-black text-4xl md:text-6xl uppercase select-none">
               <span>Strategist</span><span>•</span>
               <span>Creator</span><span>•</span>
               <span>Innovator</span><span>•</span>
               <span>Builder</span><span>•</span>
               <span>Strategist</span><span>•</span>
               <span>Creator</span><span>•</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
         </div>
      </div>

       <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );

  return (
    <div>
       <MobileMenu />
       
       {/* Back Button for Inner Pages */}
       {currentPage !== 'home' && (
        <button 
          onClick={() => setCurrentPage('home')} 
          className="fixed top-4 left-4 md:top-6 md:left-6 z-40 p-3 bg-white text-black rounded-full hover:bg-[#ccff00] transition-colors shadow-xl"
        >
          <ArrowLeft size={24} />
        </button>
      )}

      {/* Conditional Rendering of Pages */}
      {currentPage === 'home' && <HomeGrid />}
      {currentPage === 'work' && <WorkPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Modal Rendering */}
      {activeCard === 'vrl_stats' && (
        <StatDetailModal onClose={() => setActiveCard(null)} />
      )}
    </div>
  );
};

export default Portfolio;
