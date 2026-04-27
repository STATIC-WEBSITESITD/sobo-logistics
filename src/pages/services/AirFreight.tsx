import React from 'react';
import { motion } from 'motion/react';
import { Plane, ShieldCheck, Clock, Package, ChevronDown, BarChart3, Globe, Zap, Settings } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How do you calculate volumetric weight for air freight?",
    a: "Volumetric weight is calculated using the formula: (Length x Width x Height in cm) / 5000. We charge based on the higher of actual weight or volumetric weight."
  },
  {
    q: "Which airlines do you partner with?",
    a: "We work with top-tier international carriers including Emirates SkyCargo, Qatar Airways Cargo, Lufthansa Cargo, and Singapore Airlines Cargo to ensure priority space and transit."
  },
  {
    q: "Can you handle out-of-gauge (OOG) cargo?",
    a: "Yes, our specialized project cargo team handles oversized items that require freighter aircraft or specialized loading equipment."
  },
  {
    q: "Do you offer airport-to-airport or door-to-door services?",
    a: "We provide complete flexibility, offering airport-to-airport, door-to-airport, and full door-to-door air freight solutions globally."
  },
  {
    q: "What documentation is required for air freight export?",
    a: "Standard documents include a Commercial Invoice, Packing List, Certificate of Origin, and Air Waybill (AWB). We assist you in preparing all necessary paperwork."
  }
];

export default function AirFreight() {
  return (
    <div className="bg-white">
      <Meta 
        title="Air Freight Solutions - SOBO Logistics" 
        description="Priority air cargo and freight services for heavy and commercial shipments. Global air-express connectivity with guaranteed transit windows."
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
              Aviation Logistics
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              Air Freight <br/><span className="text-brand-gold">Solutions.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              High-velocity air cargo orchestration for mission-critical shipments and heavy commercial goods. Direct airline relationships for competitive tactical pricing.
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
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="Air Freight" />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Global Velocity.<br/><span className="text-brand-gold">Unmatched Scale.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed font-display">
                   <p>
                     When time is the most critical variable in your supply chain, SOBO Logistics' Air Freight division provides the velocity you need to maintain market momentum. We don't just book space on planes; we curate a tactical transport environment that ensures your cargo is prioritized, protected, and delivered.
                   </p>
                   <p>
                     Our air freight solutions are built on direct contracts with world-class airlines, giving us the leverage to secure space even during peak seasons. From perishable goods to high-value industrial machinery, we have the technical expertise to handle diverse cargo profiles with absolute precision.
                   </p>
                </div>
                <div className="flex gap-12 pt-8 border-t border-brand-black/5">
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">G5</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Priority Tier</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">98%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Transit Success</div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Air Cargo" />
                <div className="absolute -bottom-10 -right-10 bg-brand-gold p-12 rounded-[2.5rem] shadow-2xl hidden lg:block">
                   <Plane className="w-12 h-12 text-brand-black" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-brand-gold font-bold uppercase tracking-[.6em] text-[10px] block mb-4">Tactical Capabilities</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">Industrial Velocity <br/>Logistics.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Global Express', icon: <Zap className="w-8 h-8" />, desc: 'Next-available-flight solutions for ultra-urgent consignments globally.' },
                { title: 'Cargo Charter', icon: <Globe className="w-8 h-8" />, desc: 'Full and part-charter solutions for massive or out-of-gauge industrial hardware.' },
                { title: 'Cold Chain', icon: <Settings className="w-8 h-8" />, desc: 'Temperature-controlled environments for pharmaceuticals and perishables.' },
                { title: 'Strategic Hubs', icon: <BarChart3 className="w-8 h-8" />, desc: 'Consolidation services at key global trade gateways to optimize your costs.' }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-brand-gold/40 transition-all flex flex-col justify-between h-full">
                   <div>
                      <div className="text-brand-gold mb-8">{item.icon}</div>
                      <h3 className="text-2xl font-display font-bold italic mb-4">{item.title}</h3>
                   </div>
                   <p className="text-white/40 text-[13px] leading-relaxed italic font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1590641645607-285628543787?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Cargo Plane" />
           </div>
           <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black">The Air Cargo <br/>Protocol.</h2>
              <div className="space-y-10">
                 {[
                   { step: 'A', title: 'Tactical Routing', desc: 'Our analysts determine the fastest and most cost-effective aerial path based on real-time aircraft availability and hub congestion.' },
                   { step: 'B', title: 'Primary Extraction', desc: 'Secure transport from your facility to our airport-adjacent sorting hubs for consolidation and master AWB filing.' },
                   { step: 'C', title: 'Aerial Injection', desc: 'Priority loading onto our partner airframe. We monitor the cargo environment (temp/security) during the entire flight.' },
                   { step: 'D', title: 'Terminal Clearance', desc: 'Accelerated customs clearance at the destination airport followed by coordinated regional distribution.' }
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

      {/* FAQs */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 font-display italic tracking-tight text-brand-black">Technical Specifications & FAQ</h2>
            <p className="text-brand-muted italic font-medium uppercase text-[10px] tracking-[.3em]">Operational intelligence for air freight</p>
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

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-brand-black rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Accelerate Your <br/>Cargo Now.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Connect with our aviation logistics desk to optimize your commercial transit velocity.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Instant Freight Intelligence</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Support Desk</Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 grayscale hover:opacity-20 transition-opacity">
             <img src="https://images.unsplash.com/photo-1594156360434-629ee942c14c?auto=format&fit=crop&q=80&w=2000" alt="Plane BG" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
