import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Clock, MapPin, ChevronDown, CheckCircle2, FileText, Package, Briefcase } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How long does international delivery take?",
    a: "Express shipments typically take 3-5 business days, while economy options can take 7-12 business days depending on the destination."
  },
  {
    q: "Which countries do you deliver to?",
    a: "We deliver to over 220 countries and territories worldwide, including USA, UK, UAE, Canada, Australia, and all of Europe."
  },
  {
    q: "Is insurance available for international shipments?",
    a: "Yes, we offer comprehensive transit insurance to protect your parcels against loss or damage during international transit."
  },
  {
    q: "Are there any restricted items?",
    a: "Yes, certain items like liquids, batteries, and perishables have restrictions. Please contact our support team for a detailed list."
  },
  {
    q: "How do you handle customs documentation help?",
    a: "Our experts guide you through every step, helping you prepare commercial invoices, packing lists, and specific country requirements."
  },
  {
    q: "Can I send liquid items internationally?",
    a: "Liquids are generally considered restricted or hazardous. Contact us for specific case-by-case approval and specialized handling."
  }
];

export default function InternationalCourier() {
  return (
    <div className="bg-white">
      <Meta 
        title="International Courier Services - SOBO Logistics" 
        description="Reliable global express courier services from India. Send parcels, gifts, and documents worldwide with real-time tracking and customs support."
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
              Global Distribution
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              International <br/><span className="text-brand-gold">Courier.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              Seamlessly connecting India to the world. Our international network ensures your parcels reach their global destination with speed, precision, and absolute integrity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Request Quote</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10c05fe?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="International Courier" />
          </motion.div>
        </div>
      </section>

      {/* Detailed Overview */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Global Connectivity.<br/><span className="text-brand-gold">Without Frontiers.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed">
                   <p>
                     In the modern era, boundaries shouldn't define your reach. SOBO Logistics offers a premium international courier infrastructure that turns complex global logistics into a simple, reliable reality. Whether you are an individual sending a gift to a relative or a business fulfilling international orders, our protocol is designed for absolute success.
                   </p>
                   <p>
                     Our international division operates on a "Tactical First" principle. This means we don't just put your package in a box—we analyze the best transit paths, prepare for potential customs hurdles, and coordinate with local last-mile heroes to ensure your asset is delivered safely and on time.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8">
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-4xl italic">220+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Countries Covered</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-4xl italic">24/7</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Transit Monitoring</div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-brand-gold/5 blur-3xl rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" className="rounded-[3.5rem] shadow-3xl border border-brand-black/5 relative z-10" alt="Global Trade" />
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="space-y-4">
                 <span className="text-brand-gold font-bold uppercase tracking-[.5em] text-[10px]">The Advantage</span>
                 <h2 className="text-5xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">Mission Critical <br/>Capabilities.</h2>
              </div>
              <p className="max-w-md text-white/60 italic font-medium leading-relaxed">
                Our infrastructure is built for reliability. We leverage tier-1 carrier relationships to provide a service that prioritizes your assets above all else.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: 'Customs Mastery', 
                  icon: <ShieldCheck className="w-10 h-10" />, 
                  desc: 'We navigate the complexity of international trade laws, taxes, and duties so you don\'t have to. Our experts handle the paperwork at every border.' 
                },
                { 
                  title: 'Velocity Hubs', 
                  icon: <Clock className="w-10 h-10" />, 
                  desc: 'Strategic sorting facilities in major global airports ensure that your shipment stays moving, minimizing dwell time and maximizing speed.' 
                },
                { 
                  title: 'End-to-End Log', 
                  icon: <MapPin className="w-10 h-10" />, 
                  desc: 'Monitor your assets in real-time with our advanced telemetry. From the moment of extraction to the final signature, you are in control.' 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:border-brand-gold/30 transition-all group"
                >
                  <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-2xl font-display font-bold italic mb-4">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed italic font-medium">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Operational Workflow */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Logistics Center" />
             </div>
             <div className="order-1 lg:order-2 space-y-12">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">The Transit <br/>Architecture.</h2>
                <div className="space-y-10">
                   {[
                     { step: '01', title: 'Asset Extraction', desc: 'Secure doorstep pickup from any location in India. Our team ensures the package is manifest-ready for its global journey.' },
                     { step: '02', title: 'Bilateral Clearance', desc: 'Automated digital filing of export documents. We clear the shipment with Indian customs before it even reaches the airport.' },
                     { step: '03', title: 'Global Injection', desc: 'Consignment is boarded on a tier-1 partner flight (DHL, FedEx, UPS) for priority transit to the destination hub.' },
                     { step: '04', title: 'Secure Terminal', desc: 'Final customs clearance at the destination followed by direct delivery to the recipient with full signature tracking.' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-8 group">
                        <div className="text-brand-gold font-display font-bold text-3xl italic opacity-20 group-hover:opacity-100 transition-opacity translate-y-1">{item.step}</div>
                        <div className="space-y-2">
                           <h4 className="text-xl font-display font-bold italic text-brand-black">{item.title}</h4>
                           <p className="text-brand-muted text-sm italic font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-24">
           <span className="text-brand-gold font-bold uppercase tracking-[.4em] text-[10px] mb-4 block">Specialized Solutions</span>
           <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black">Dedicated Verticals.</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: 'University Admissions', icon: <FileText className="w-6 h-6" />, desc: 'Priority handling for transcripts and documents to international universities.' },
             { title: 'Medicine Dispatch', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Critical medication delivery with proper documentation and temperature protocols.' },
             { title: 'Gift & Personal', icon: <Package className="w-6 h-6" />, desc: 'Express shipping for personal gifts, sweets, and festival items to family abroad.' },
             { title: 'Commercial Samples', icon: <Briefcase className="w-6 h-6" />, desc: 'Speedy transit for business samples and stock for global market expansion.' }
           ].map((card, idx) => (
             <div key={idx} className="p-12 bg-white rounded-[3rem] border border-brand-black/5 hover:shadow-3xl transition-all group">
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h4 className="text-2xl font-display font-bold italic mb-4 text-brand-black">{card.title}</h4>
                <p className="text-brand-muted text-xs italic font-medium leading-loose">{card.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display italic tracking-tight text-brand-black">Technical Support & FAQ</h2>
            <p className="text-brand-muted mt-4 italic font-medium">Deep insights into our international transit protocols.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-brand-black/5 rounded-[2rem] overflow-hidden cursor-pointer bg-white transition-all hover:bg-brand-cream/10">
                <summary className="p-8 list-none flex justify-between items-center transition-colors">
                  <span className="font-bold text-brand-black pr-4 font-display italic text-lg">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-brand-gold transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8 text-brand-muted text-base leading-relaxed border-t border-brand-black/5 italic font-medium pt-6">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-brand-black rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Initiate Global <br/>Extraction.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Get a tactical quote for your international assets and experience the SOBO difference in global logistics.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-[0_0_50px_rgba(197,160,89,0.3)] accent-glow">Instant Intelligence Quote</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Support Channel</Link>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </div>
  );
}
