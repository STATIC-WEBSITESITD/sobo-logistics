import React from 'react';
import { Package, MapPin, Scale, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import Meta from '../components/Meta';

export default function Quote() {
  return (
    <div className="min-h-screen bg-white">
      <Meta 
        title="Get a Quote - Enterprise Logistics pricing" 
        description="Request a tactical logistics quote for international shipping, air freight, or commercial cargo. Competitive pricing for global distribution."
      />
      
      {/* Hero */}
      <section className="bg-brand-cream border-b border-brand-black/5 py-32 px-8 overflow-hidden relative">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic tracking-tighter text-brand-black font-display">Request <span className="text-brand-gold">Assets.</span></h1>
            <p className="text-brand-muted text-xl max-w-xl mx-auto leading-relaxed uppercase font-bold tracking-[.4em] text-[10px]">
              Deploy precision logistics for your personal or individual distribution requirements.
            </p>
         </div>
         <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      </section>

      <div className="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
         {/* Form */}
         <div className="lg:col-span-2">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white border border-brand-black/5 p-12 md:p-16 rounded-[3.5rem] shadow-3xl"
            >
               <h2 className="text-3xl font-bold font-display italic text-brand-black mb-10 tracking-tight">Quote Protocol</h2>
               
               <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Origin Zone</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                          <input type="text" className="w-full bg-brand-cream rounded-xl pl-12 pr-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Mumbai, India" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Destination Hub</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                          <input type="text" className="w-full bg-brand-cream rounded-xl pl-12 pr-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="London, UK" />
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Shipment Mass (KG)</label>
                        <div className="relative">
                          <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                          <input type="number" className="w-full bg-brand-cream rounded-xl pl-12 pr-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="0.5" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Operational Model</label>
                        <div className="relative">
                          <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                          <select className="w-full bg-brand-cream rounded-xl pl-12 pr-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5 appearance-none">
                             <option>Documents Only</option>
                             <option>Parcel / Cargo</option>
                             <option>Air Freight</option>
                             <option>Dangerous Goods (DGR)</option>
                          </select>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Consignor Designation</label>
                     <input type="text" className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Full Name" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Communications Hub</label>
                        <input type="email" className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Link with email" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[.4em] text-brand-muted">Tactical Voice Line</label>
                        <input type="tel" className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="+91" />
                     </div>
                  </div>

                  <button className="w-full gold-gradient text-white py-6 rounded-2xl font-black uppercase text-[10px] tracking-[.4em] shadow-xl accent-glow hover:opacity-90 transition-all">
                     Verify & Calculate Quote
                  </button>
               </form>
            </motion.div>
         </div>

         {/* Sidebar Info */}
         <div className="space-y-10">
            <div className="p-10 bg-brand-cream rounded-[3rem] border border-brand-black/5">
               <h3 className="text-[10px] font-black uppercase tracking-[.3em] text-brand-gold mb-8 italic">Audit Features</h3>
               <ul className="space-y-6">
                  {[
                    "Instant Tactical Pricing",
                    "Global Hub Optimization",
                    "Real-time Capacity Audit",
                    "Compliance Verification"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-black">
                       <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {item}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="bg-brand-black p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-[10px] font-black uppercase tracking-[.3em] text-brand-gold mb-8 italic">Direct Dispatch</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-10 italic">Need immediate human coordination? Connect with our global support hub.</p>
                <div className="space-y-6">
                   <div className="flex items-center gap-3 text-white font-bold text-lg font-display italic">
                      <Phone className="w-5 h-5 text-brand-gold" /> {CONTACT_INFO.PHONE}
                   </div>
                   <div className="flex items-center gap-3 text-white font-bold text-lg font-display italic">
                      <Mail className="w-5 h-5 text-brand-gold" /> {CONTACT_INFO.EMAIL}
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-[60px]"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
