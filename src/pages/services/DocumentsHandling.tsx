import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Clock, Lock, ChevronDown, GraduationCap, Scale, Briefcase, MailOpen } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How secure is document transit with SOBO?",
    a: "We use tamper-proof, multi-layered security envelopes and a strict 'No-Open' policy. Every document is tracked individually with full accountability logs."
  },
  {
    q: "Can I send my passport for visa processing?",
    a: "Yes, we have a specialized high-security protocol for passports and original government documents to ensure they reach consulates or agencies safely."
  },
  {
    q: "Do you handle university transcripts and WES applications?",
    a: "Absolutely. We are a preferred partner for students sending academic credentials to universities worldwide, ensuring secure delivery to admissions offices."
  },
  {
    q: "What is the typical delivery time for international documents?",
    a: "Express documents usually reach major global cities in 2-4 business days. We provide a 'First-on-Flight' priority for all document shipments."
  },
  {
    q: "Can I send signed legal contracts?",
    a: "Yes, we handle critical business contracts and legal deeds, providing real-time proof of delivery and recipient signature confirmation."
  }
];

export default function DocumentsHandling() {
  return (
    <div className="bg-white">
      <Meta 
        title="Documents & Passport Handling - SOBO Logistics" 
        description="Secure and confidential handling for your most important legal, business, and academic documents. Express global delivery for time-sensitive paperwork."
      />
      
      {/* Hero */}
      <section className="bg-brand-cream border-b border-brand-black/5 py-24 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold font-bold uppercase tracking-[.4em] text-[10px] mb-4 block"
            >
              Sensitive Assets
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              Documents <br/><span className="text-brand-gold">Handling.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              Secure, confidential, and lightning-fast delivery for your critical paperwork. From legal contracts to university admissions, we deliver integrity with every page.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex gap-4"
            >
               <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Express Secure Quote</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1574271143505-590291c10d32?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="Documents Handling" />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-xl z-20 flex items-center gap-4 border border-brand-black/5">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold"><Lock className="w-6 h-6" /></div>
                <div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Confidentiality Tier</div>
                   <div className="text-lg font-display font-bold italic text-brand-black">Ultra-Secure</div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Integrity on Paper.<br/><span className="text-brand-gold">Fast Tracked.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed font-display">
                   <p>
                     When it comes to documents, velocity must be matched by absolute security. Whether it's a multi-million dollar legal deed, a passport for an urgent trip, or your academic future in a university envelope, SOBO Logistics understands the weight of what's inside.
                   </p>
                   <p>
                     Our document handling vertical operates on a "Zero-Visibility" protocol. This means your documents are sealed in tamper-evident packaging and assigned a priority transit code that bypasses standard cargo consolidation. We prioritize speed and confidentiality above all else.
                   </p>
                </div>
                <div className="flex gap-12 pt-8 border-t border-brand-black/5">
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">99.8%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">On-Time Score</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">1:1</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Custody Model</div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Secure Paperwork" />
             </div>
          </div>
        </div>
      </section>

      {/* Specialty Verticals */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-brand-gold font-bold uppercase tracking-[.6em] text-[10px] block mb-4">Dedicated Pillars</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">Sensitive Asset <br/>Distribution.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Academic Priority', icon: <GraduationCap className="w-8 h-8" />, desc: 'Specialized handling for transcripts and WES documents to global universities.' },
                { title: 'Legal & Notary', icon: <Scale className="w-8 h-8" />, desc: 'Secure delivery of property deeds, court documents, and signed legal contracts.' },
                { title: 'Corporate Tenders', icon: <Briefcase className="w-8 h-8" />, desc: 'Confidential handling for time-critical business bids and tender responses.' },
                { title: 'Identity Assets', icon: <MailOpen className="w-8 h-8" />, desc: 'High-security protocol for passports, visas, and original government IDs.' }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-brand-gold/40 transition-all">
                   <div className="text-brand-gold mb-8">{item.icon}</div>
                   <h3 className="text-2xl font-display font-bold italic mb-4">{item.title}</h3>
                   <p className="text-white/40 text-[13px] leading-relaxed italic font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Document Security" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-gold/20 rounded-full blur-[80px]"></div>
           </div>
           <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">The Security <br/>Envelope.</h2>
              <div className="space-y-10">
                 {[
                   { step: '01', title: 'Tactical Pickup', desc: 'Our team arrives for doorstep collection. Documents are immediately placed in a serialized tamper-evident envelope.' },
                   { step: '02', title: 'Priority Dispatch', desc: 'Instead of mass consolidation, your document envelope is processed through our high-velocity express lane.' },
                   { step: '03', title: 'Top-Tier Transit', desc: 'Consignment is assigned a "Documents Only" flight profile to minimize handling and maximize transit speed.' },
                   { step: '04', title: 'Recipient Auth', desc: 'Delivery is only completed upon verification of the recipient, with real-time digital signature sent to you.' }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <div className="text-brand-gold font-display font-bold text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity translate-y-1">{item.step}</div>
                      <div className="space-y-2">
                         <h4 className="text-xl font-display font-bold italic text-brand-black">{item.title}</h4>
                         <p className="text-brand-muted text-sm italic font-medium leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 font-display italic tracking-tight text-brand-black">Document Intelligence FAQ</h2>
            <p className="text-brand-muted italic font-medium uppercase text-[10px] tracking-[.3em]">Operational security for physical data</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-brand-black/10 rounded-[2.5rem] overflow-hidden cursor-pointer bg-white transition-all shadow-sm hover:shadow-xl">
                <summary className="p-10 list-none flex justify-between items-center bg-white transition-colors">
                  <span className="font-bold text-brand-black pr-4 font-display italic text-xl tracking-tight">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-brand-gold transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-10 pb-10 text-brand-muted text-base leading-relaxed italic font-medium border-t border-brand-black/5 pt-8">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-brand-black rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Deliver Integrity <br/>Worldwide.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Protect your most sensitive documents with our global high-security distribution network.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Instant Secure Quote</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Support Channel</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=2000" alt="Texture BG" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
