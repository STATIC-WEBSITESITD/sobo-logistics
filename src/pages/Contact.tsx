import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import Meta from '../components/Meta';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Meta 
        title="Contact Us - Global Logistics Support" 
        description="Get in touch with SOBO Logistics tactical support. B2B inquiry hotline, email support, and Mumbai headquarters location."
      />
      
      {/* Hero */}
      <section className="bg-brand-cream py-32 px-8 overflow-hidden relative border-b border-brand-black/5">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic tracking-tighter font-display">Contact <span className="text-brand-gold">HQ.</span></h1>
            <p className="text-brand-muted text-xl max-w-xl mx-auto leading-relaxed uppercase font-bold tracking-[.4em] text-[10px]">
              Direct communication for personal courier and global enterprise support.
            </p>
         </div>
         <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      </section>

      <div className="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
             <div className="space-y-6">
                <span className="text-brand-gold font-bold uppercase tracking-[.4em] text-[10px]">Command Centers</span>
                <h2 className="text-4xl md:text-5xl font-bold font-display italic tracking-tight">Direct Access.</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-brand-cream rounded-3xl border border-brand-black/5 space-y-4">
                   <Phone className="w-5 h-5 text-brand-gold" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Tactical Line</p>
                   <p className="text-lg font-bold text-brand-black">{CONTACT_INFO.PHONE}</p>
                </div>
                <div className="p-8 bg-brand-cream rounded-3xl border border-brand-black/5 space-y-4">
                   <Mail className="w-5 h-5 text-brand-gold" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Secure Email</p>
                   <p className="text-lg font-bold text-brand-black">{CONTACT_INFO.EMAIL}</p>
                </div>
             </div>

             <div className="p-10 bg-brand-black text-white rounded-[2.5rem] space-y-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                   <MapPin className="w-6 h-6 text-brand-gold mb-6" />
                   <h3 className="text-2xl font-display italic font-bold mb-4">Operations Base</h3>
                   <p className="text-brand-muted text-sm leading-relaxed mb-8 max-w-sm">
                      {CONTACT_INFO.ADDRESS}
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Center Status: ACTIVE</span>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-[60px]"></div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white border border-brand-black/5 p-12 rounded-[3.5rem] shadow-3xl">
             <h2 className="text-2xl font-bold text-brand-black mb-10 tracking-tight italic font-display">Inquiry Protocol</h2>
             <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Full Designation</label>
                      <input type="text" className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Your Name" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Email Link</label>
                      <input type="email" className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Email Address" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Message Dispatch</label>
                   <textarea rows={5} className="w-full bg-brand-cream rounded-xl px-6 py-4 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all font-medium italic border border-brand-black/5" placeholder="Detailed requirements..."></textarea>
                </div>
                <button className="w-full gold-gradient text-white py-6 rounded-2xl font-black uppercase text-[10px] tracking-[.4em] shadow-xl accent-glow hover:-translate-y-1 transition-all">
                   Transmit Inquiry
                </button>
             </form>
          </div>
      </div>
    </div>
  );
}
