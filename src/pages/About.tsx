import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users, Target, Building2, Globe2 } from 'lucide-react';
import Meta from '../components/Meta';

const values = [
  { title: 'B2B Integrity', desc: 'Enterprise-grade transparency for high-value industrial cargo and documents.', icon: <Shield className="w-6 h-6" /> },
  { title: 'Global Precision', desc: 'Seamless orchestration across 150+ international hubs with certified handlers.', icon: <Globe2 className="w-6 h-6" /> },
  { title: 'Client Centric', desc: 'Personalized logistics consulting for complex distribution challenges.', icon: <Users className="w-6 h-6" /> },
  { title: 'Tactical Velocity', desc: 'Next-generation tracking and customs integration for rapid transit.', icon: <Target className="w-6 h-6" /> },
];

export default function About() {
  return (
    <div className="bg-white pb-32">
      <Meta 
        title="About SOBO Logistics - Decades of Logistics Expertise" 
        description="Learn about SOBO Logistics, India's premier B2B logistics partner. International export, cargo infrastructure, and reliable distribution history."
      />
      
      {/* Hero */}
      <section className="bg-brand-cream py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <span className="text-brand-gold font-bold uppercase tracking-[.5em] text-[10px] mb-4">Corporate Heritage</span>
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-none italic tracking-tighter">Established <br/><span className="text-brand-gold">Trust.</span></h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-xl font-medium">
              Since 2012, SOBO Logistics has been the trusted partner for personal as well as commercial supply chains in India. 
            </p>
          </div>
          <div className="flex-1 relative">
             <div className="absolute -inset-4 bg-brand-gold opacity-10 blur-3xl rounded-full"></div>
             <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1000" alt="Logistics Infrastructure" className="rounded-[3rem] relative z-10 grayscale shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section-padding px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <Building2 className="w-12 h-12 text-brand-gold mx-auto" />
           <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">The Global Standard.</h2>
           <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
           <p className="text-brand-muted text-lg leading-loose font-medium italic">
             SOBO Logistics Private Limited is a leading provider of comprehensive logistics and procurement support services. Originally founded to bridge the gap in international documents handling, we have evolved into a full-service tactical logistics firm catering to both B2C and B2B segments—from personal medicine delivery to enterprise cargo orchestration.
           </p>
           <p className="text-brand-muted text-lg leading-loose font-medium">
              Our infrastructure is built on the pillars of safety, speed, and absolute confidentiality. Our team of certified professionals handles everything from standard commercial shipments to highly sensitive DGR (Dangerous Goods) materials.
           </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-brand-black px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((v, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:border-brand-gold/30 transition-all"
                 >
                    <div className="text-brand-gold mb-8">{v.icon}</div>
                    <h3 className="text-white text-xl font-bold font-display italic mb-4">{v.title}</h3>
                    <p className="text-brand-muted text-xs font-bold uppercase tracking-widest leading-relaxed">{v.desc}</p>
                 </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Leadership / Vision */}
      <section className="section-padding px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <span className="text-brand-gold font-bold uppercase tracking-[.4em] text-[10px]">Operational Vision</span>
               <h2 className="text-5xl font-bold font-display italic leading-none">Global Connectivity.<br/>Local Intelligence.</h2>
               <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                     <Award className="w-6 h-6 text-brand-gold shrink-0" />
                     <div>
                        <h4 className="font-bold text-lg mb-2">ISO Certified Protocols</h4>
                        <p className="text-brand-muted text-sm leading-relaxed">Adhering to world-class standards in quality management and shipment security.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start">
                     <Users className="w-6 h-6 text-brand-gold shrink-0" />
                     <div>
                        <h4 className="font-bold text-lg mb-2">Tactical Talent</h4>
                        <p className="text-brand-muted text-sm leading-relaxed">Our workforce comprises logistics veterans with combined experience of over 100 years.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-brand-cream p-12 rounded-[3.5rem] border border-brand-black/5">
                <blockquote className="text-2xl font-display italic text-brand-black leading-relaxed mb-8">
                   "Logistics is no longer just about moving items from A to B. It's about moving intelligence, trust, and commercial momentum. At SOBO, we move your business."
                </blockquote>
                <p className="font-black uppercase tracking-widest text-[10px] text-brand-gold">Board of Directors, SOBO Logistics</p>
            </div>
        </div>
      </section>
    </div>
  );
}
