import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Mail, Instagram, Linkedin, Twitter, Phone, MessageSquare,
  ArrowLeft, Zap, TrendingUp, Users, Globe, Target, Award, X
} from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  // Use null or a specific key to control which modal/card is active
  const [activeCard, setActiveCard] = useState(null); 

  // Contact Information
  const emailAddress = "prajju569@gmail.com";
  const phoneNumber = "7795482191";
  const whatsappLink = `https://wa.me/91${phoneNumber}`; 
  // NEW: Personal Social Links
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
    // Extracted key data points from the campaign screenshots:
    const data = [
      { 
        icon: Users, 
        title: "151K+ Conversions", 
        detail: "Achieved over 151,000 successful bookings and inquiries.",
        color: "text-[#ccff00]"
      },
      { 
        icon: Target, 
        title: "₹36.28 Cost/Conversion", 
        detail: "Maintained an efficient average cost per conversion across all networks.",
        color: "text-red-500"
      },
      { 
        icon: Zap, 
        title: "Mobile-First Dominance", 
        detail: "94.5% of clicks and 85.9% of conversions originated from mobile devices.",
        color: "text-blue-500"
      },
      { 
        icon: TrendingUp, 
        title: "High Search CTR", 
        detail: "Generic search ads consistently delivered a high 7.99% Click-Through Rate.",
        color: "text-green-500"
      },
    ];

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
        <div className="w-full max-w-2xl bg-[#111] border-4 border-[#ccff00] shadow-[10px_10px_0px_0px_#ccff00] p-6 md:p-10 relative animate-in zoom-in-95 duration-300">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:text-[#ccff00] transition-colors"
            aria-label="Close details"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-4xl font-black uppercase text-[#ccff00] mb-2">VRL Campaign Metrics</h3>
          <p className="font-mono text-sm text-gray-400 mb-8">Performance summary for the ₹54.7 Lakhs ad spend.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-[#1a1a1a] p-4 border border-[#333] hover:border-[#ccff00] transition-colors">
                <item.icon size={32} className={`${item.color} mb-3`} />
                <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.detail}</p>
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
    <div className="min-h-screen bg-[#111] text-white p-6 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] font-black uppercase leading-none text-[#ccff00] mb-12 border-b border-[#333] pb-8">
          Selected<br />Mission Logs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              // Link to trending hashtag as requested in previous turn
              link: "https://twitter.com/search?q=%23RONNYTheRuler&src=typed_query"
            }
          ].map((project, i) => (
            <div key={i} className="group relative bg-[#1a1a1a] border border-[#333] p-8 hover:bg-[#ccff00] hover:text-black transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs border border-current px-2 py-1 uppercase">{project.role}</span>
                <div className="flex items-center gap-2">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white group-hover:text-black opacity-80 hover:opacity-100 transition-opacity"
                            aria-label={`${project.client} Social Link`}
                        >
                            {/* Conditionally display the Instagram icon or the Trending icon */}
                            {project.client === "Film Production" ? <TrendingUp size={20} /> : <Instagram size={20} />}
                        </a>
                    )}
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-4xl font-black uppercase mb-4">{project.client}</h3>
              <div className="text-xl font-bold mb-4 font-mono">{project.stat}</div>
              <p className="text-gray-400 group-hover:text-black/80 mb-8">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider opacity-60">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-[#e0e0e0] text-black p-6 md:p-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
        
        {/* --- Section 1: Introduction & Status --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-[0.8]">
              Architect of<br/>Influence.
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              I'm Prajwal Hegde. I don't just "do marketing"—I engineer attention.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              From the high-pressure environment of VRL Travels boardrooms to the creative chaos of backstage comedy tours with Nishant Tanwar and Samay Raina, I thrive where data meets culture. I build robust content ecosystems that drive real revenue, not just vanity metrics.
            </p>
            <div className="bg-black text-white p-8 inline-block rotate-1 shadow-[10px_10px_0px_0px_#ccff00]">
              <span className="font-mono text-[#ccff00] block mb-2">CURRENT STATUS</span>
              <div className="text-2xl font-bold uppercase">Available for Hire</div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-4">
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-black uppercase text-xl mb-4">Core Stack</h3>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex justify-between border-b border-gray-400 pb-1"><span>Brand Strategy</span><span>100%</span></li>
                <li className="flex justify-between border-b border-gray-400 pb-1"><span>Influencer Mgmt</span><span>100%</span></li>
                <li className="flex justify-between border-b border-gray-400 pb-1"><span>Performance Ads</span><span>95%</span></li>
                <li className="flex justify-between border-b border-gray-400 pb-1"><span>Event Ops</span><span>90%</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Section 2: Influencer Network Grid --- */}
        <div className="mt-16 pt-12 border-t-4 border-black">
          <h3 className="text-6xl font-black uppercase mb-8 tracking-tighter text-black">
            Influencer<br/>Network
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mb-12">
            Leveraging partnerships with some of the biggest names in the Indian comedy and entertainment circuits to achieve maximum brand visibility.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {influencers.map((person, index) => (
              <a 
                key={index} 
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
                aria-label={`View ${person.name}'s Instagram profile`}
              >
                <div className="relative w-full aspect-square bg-gray-200 p-1.5 border-4 border-black group-hover:border-[#ccff00] transition-colors duration-300 shadow-[8px_8px_0px_0px_#000]">
                  <img 
                    src={person.url} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    // Add onerror to handle image loading issues
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/000000/ccff00?text=P+H" }}
                  />
                  {/* Floating Label / Name Tag */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-[#ccff00] px-4 py-1 font-bold uppercase text-xs whitespace-nowrap border-2 border-[#ccff00] rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1">
                      <Instagram size={10} />
                      <span>{person.name}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-gray-800 group-hover:text-black">
                    {person.name.split(' ')[0]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-[#ccff00] text-black flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
      <div className="w-full max-w-4xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_#000] p-8 md:p-16 text-center">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-6">Initialize<br/>Protocol</h2>
        <p className="font-mono text-lg mb-12">
          Ready to deploy a new campaign? Let's talk numbers, strategy, and scale.
        </p>
        
        <div className="space-y-6">
          {/* Email Contact Link */}
          <a 
            href={`mailto:${emailAddress}`}
            className="group block bg-black text-[#ccff00] text-2xl md:text-4xl font-black uppercase px-8 py-4 hover:bg-[#111] hover:scale-105 transition-all duration-300 relative"
          >
            <Mail size={32} className="absolute left-4 top-1/2 -translate-y-1/2 transition-transform group-hover:scale-110 hidden sm:block"/>
            {emailAddress}
          </a>

          {/* WhatsApp / Phone Contact Link */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-black text-white text-2xl md:text-4xl font-black uppercase px-8 py-4 hover:bg-[#111] hover:scale-105 transition-all duration-300 relative"
          >
            <MessageSquare size={32} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 transition-transform group-hover:scale-110 hidden sm:block"/>
            +91 {phoneNumber}
          </a>
        </div>
        
        <div className="mt-12 flex justify-center gap-8">
           {/* UPDATED: LinkedIn Link */}
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-black hover:text-blue-700" aria-label="LinkedIn Profile"><Linkedin size={40} /></a>
           {/* UPDATED: Instagram Link */}
           <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-black hover:text-pink-600" aria-label="Instagram Profile"><Instagram size={40} /></a>
           <a href="#" className="hover:scale-125 transition-transform text-black hover:text-blue-500" aria-label="Twitter/X Profile"><Twitter size={40} /></a>
        </div>
      </div>
    </div>
  );

  // --- MAIN HOME LAYOUT ---

  const HomeGrid = () => (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-6 overflow-x-hidden font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Header / Nav */}
      <header className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ccff00] animate-pulse"></div>
          <span className="font-bold tracking-widest uppercase text-sm">Prajwal.System_v2</span>
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
        <button className="md:hidden text-[#ccff00]">MENU</button>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto_auto] gap-4 max-w-[1800px] mx-auto">
        
        {/* Row 1: The Title & Role (Spans full width) */}
        <div className="md:col-span-8 bg-[#111] border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Globe className="text-[#ccff00]" />
          </div>
          <h2 className="text-[#ccff00] font-mono text-sm uppercase tracking-[0.3em] mb-2">Marketing Strategist</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.8] tracking-tighter mix-blend-screen z-10">
            Prajwal<br />Hegde
          </h1>
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>
        </div>

        {/* Row 1: Quick Stat Card (Now Clickable) */}
        <div 
          className="md:col-span-4 bg-[#ccff00] text-black p-6 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer" 
          onClick={() => setActiveCard('vrl_stats')}
        >
          <div className="flex justify-between items-start">
             <Target size={32} />
             <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
          </div>
          <div>
            <div className="text-5xl font-black mb-1">54L+</div>
            <div className="font-bold uppercase tracking-tighter text-sm">Ad Spend Managed (Click for Info)</div>
            <div className="mt-4 text-xs font-mono border-t border-black pt-2 flex justify-between">
              <span>Client: VRL Travels</span>
              <span>2024</span>
            </div>
          </div>
        </div>

        {/* Row 2: Image & Skills */}
        
        {/* Left Column: Skills Ticker */}
        <div className="md:col-span-3 bg-[#111] border border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10 font-mono text-xs text-gray-500 uppercase">Expertise Module</div>
          <div className="flex-1 p-6 space-y-4">
             {[
               { icon: Users, label: "Influencer Mgmt" },
               { icon: TrendingUp, label: "SEO / SEM" },
               { icon: Zap, label: "Content Strategy" },
               { icon: Award, label: "Brand Partnerships" }
             ].map((skill, idx) => (
               <div key={idx} className="flex items-center gap-4 text-gray-300 hover:text-[#ccff00] transition-colors cursor-crosshair">
                 <skill.icon size={20} />
                 <span className="font-bold uppercase text-sm">{skill.label}</span>
               </div>
             ))}
          </div>
          <div className="bg-[#222] p-4 text-center">
             <button onClick={() => setCurrentPage('work')} className="text-xs font-bold uppercase hover:text-[#ccff00] underline">View Full Arsenal</button>
          </div>
        </div>

        {/* Center: Hero Image Container */}
        <div className="md:col-span-6 relative h-[500px] md:h-[600px] bg-[#1a1a1a] border border-white/10 overflow-hidden flex items-end justify-center group">
          {/* Futuristic Arch SVG Background */}
          <svg className="absolute inset-0 w-full h-full text-[#ccff00]/5" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L0 20 Q50 0 100 20 L100 100 Z" fill="currentColor" />
          </svg>
          
          <img 
            src="https://i.ibb.co/C5V5TKTQ/Untitled-design-15.png" 
            alt="Prajwal" 
            className="relative z-10 h-[105%] w-auto object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            // Add onerror to handle image loading issues
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x800/1a1a1a/ccff00?text=Prajwal+Hegde" }}
          />

          {/* Floating Sticker: Vijayananda Travels (Kept as requested) */}
          <div className="absolute top-10 left-10 z-20 bg-white text-black px-4 py-2 font-black uppercase text-xs rotate-[-6deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            Vijayananda Travels
          </div>
          
           {/* Floating Sticker: Samay Raina (Reverted to original) */}
           <div className="absolute bottom-20 right-10 z-20 bg-[#ff00ff] text-white px-4 py-2 font-black uppercase text-xs rotate-[3deg] shadow-[4px_4px_0px_0px_rgba(255,0,255,0.4)]">
             Collab: Samay Raina
          </div>
        </div>

        {/* Right Column: Experience Highlights */}
        <div className="md:col-span-3 flex flex-col gap-4">
           {/* Card 1 */}
           <div className="flex-1 bg-[#111] border border-white/10 p-6 hover:border-[#ccff00] transition-colors cursor-pointer group" onClick={() => setCurrentPage('work')}>
             <div className="bg-[#333] w-8 h-8 flex items-center justify-center rounded-full mb-4 text-[#ccff00] group-hover:scale-110 transition-transform">
               <Zap size={16} />
             </div>
             <h3 className="font-bold text-lg leading-tight mb-2">High Impact Campaigns</h3>
             <p className="text-xs text-gray-400 font-mono">Driving ROI for brands like T-Series & VRL.</p>
           </div>

           {/* Card 2 */}
           <div className="flex-1 bg-[#e0e0e0] text-black p-6 hover:bg-white transition-colors cursor-pointer" onClick={() => setCurrentPage('contact')}>
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
            <div className="flex whitespace-nowrap animate-marquee gap-8 text-[#333] font-black text-6xl uppercase select-none">
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
       {/* Back Button for Inner Pages */}
       {currentPage !== 'home' && (
        <button 
          onClick={() => setCurrentPage('home')} 
          className="fixed top-6 left-6 z-50 p-3 bg-white text-black rounded-full hover:bg-[#ccff00] transition-colors shadow-xl"
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