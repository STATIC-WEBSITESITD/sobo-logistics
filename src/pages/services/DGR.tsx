import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, FileText, Package, ChevronDown, ShieldAlert, FlaskConical, ThermometerSnowflake, FileCheck2, Zap } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "What qualify as Dangerous Goods (DGR)?",
    a: "DGR items include chemicals, lithium batteries, flammable liquids, gases, perfumes, and infectious substances that require special handling protocols."
  },
  {
    q: "Do you provide DGR certified packaging?",
    a: "Yes, we provide UN-certified packaging and labeling services to ensure your DGR shipments comply with IATA international safety standards."
  },
  {
    q: "What is an MSDS and why is it needed?",
    a: "A Material Safety Data Sheet (MSDS) provides detailed information about the properties and hazards of a chemical product. It is mandatory for booking DGR cargo."
  },
  {
    q: "Can you send lithium batteries by air?",
    a: "Yes, but they must be packaged and declared strictly according to IATA Section II or Section IB regulations. We handle the entire compliance process."
  },
  {
    q: "What are the storage requirements for hazardous cargo?",
    a: "Hazardous cargo is stored in specialized, segregated zones in our warehouses to prevent cross-contamination and ensure safety in case of localized leaks."
  }
];

export default function DGRHandling() {
  return (
    <div className="bg-white">
      <Meta 
        title="DGR Goods Handling - SOBO Logistics" 
        description="IATA-certified handling of dangerous and hazardous materials. Specialized transit solutions for chemicals, electronics, and hazardous cargo."
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
              Hazardous Protocols
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              DGR Goods <br/><span className="text-brand-gold">Handling.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              IATA-certified orchestration of dangerous goods. We ensure absolute safety and regulatory compliance for your most sensitive and hazardous shipments.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex gap-4"
            >
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Request Protocol Quote</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="DGR Handling" />
            <div className="absolute top-10 right-10 z-20 animate-pulse">
               <AlertTriangle className="w-16 h-16 text-brand-gold drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Compliance Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Zero Compromise.<br/><span className="text-brand-gold">Total Compliance.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed font-display">
                   <p>
                     Handling dangerous goods requires more than just logistics—it requires specialized scientific knowledge and a deep commitment to safety. At SOBO Logistics, our DGR handling protocol is forged in compliance with the stringent standards set by IATA and IMDG.
                   </p>
                   <p>
                     From flammable liquids and toxic substances to lithium batteries and radioactive materials, we treat every hazardous consignment as a "Zero Deviation" project. Our team of certified DGR professionals ensures that every label, every box, and every manifest is perfectly aligned with international aviation safety laws.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-black/5">
                   <div className="flex gap-4 items-center">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-brand-black">IATA Certified Staff</span>
                   </div>
                   <div className="flex gap-4 items-center">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-brand-black">UN Pack Standards</span>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Hazardous Warehouse" />
                <div className="absolute -inset-4 border-2 border-brand-gold/20 rounded-[4.5rem]"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Specialty Pillars */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-brand-gold font-bold uppercase tracking-[.6em] text-[10px] block mb-4">Integrity Assets</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">Hazardous Cargo <br/>Verticals.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Chemical Transit', icon: <FlaskConical className="w-8 h-8" />, desc: 'Safe transport of industrial chemicals, corrosives, and flammable liquids.' },
                { title: 'Lithium Logistics', icon: <Zap className="w-8 h-8" />, desc: 'Specialized handling for batteries and high-capacity electronics.' },
                { title: 'Cold Pharma', icon: <ThermometerSnowflake className="w-8 h-8" />, desc: 'Temperature-sensitive hazardous materials management.' },
                { title: 'Audit Ready', icon: <FileCheck2 className="w-8 h-8" />, desc: 'Every shipment is 100% compliant with global aviation safety audits.' }
              ].map((item, idx) => (
                <div key={idx} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:border-brand-gold/40 transition-all">
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
           <div className="order-2 lg:order-1 relative">
              <img src="https://images.unsplash.com/photo-1590641645607-285628543787?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Cargo Handling" />
           </div>
           <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black">The Hazard <br/>Control Chain.</h2>
              <div className="space-y-10">
                 {[
                   { step: '01', title: 'MSDS Verification', desc: 'Our technical team reviews the Material Safety Data Sheet to classify the cargo and determine the exact UN number.' },
                   { step: '02', title: 'Tactical Packaging', desc: 'Application of UN-certified absorbent materials, secondary containment, and compliant hazardous labeling.' },
                   { step: '03', title: 'Segregated Transit', desc: 'Secure transport using vehicles and aircraft zones specifically cleared for DGR cargo to prevent interaction.' },
                   { step: '04', title: 'Certified Release', desc: 'On-site presence during customs clearance to ensure handled assets maintain their integrity until the final mile.' }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <div className="text-brand-gold font-display font-bold text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity">{item.step}</div>
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

      {/* Frequently Asked Questions */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 font-display italic tracking-tight text-brand-black">Compliance & Intelligence FAQ</h2>
            <p className="text-brand-muted italic font-medium uppercase text-[10px] tracking-[.3em]">Scientific logistics for sensitive goods</p>
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
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Secure High-Risk <br/>Assets Today.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Don't risk compliance failures. Deploy SOBO's certified DGR team for your hazardous shipping needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Initiate Safety Protocol</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Connect with Safety Desk</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full opacity-5">
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" alt="Chemistry BG" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
