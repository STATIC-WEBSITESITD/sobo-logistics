import React from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin, Clock, ShieldCheck, ChevronDown, Package, Box, Map, Navigation } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Do you offer intra-city same-day delivery?",
    a: "Yes, in major Tier-1 cities including Mumbai, Delhi, and Bangalore, we offer same-day priority courier for documents and small parcels."
  },
  {
    q: "Can you handle complete household relocation?",
    a: "Our domestic relocation vertical manages everything from professional packing and loading to safe transit and unpacking at your new home."
  },
  {
    q: "What are your delivery timelines for Tier-2 cities?",
    a: "Standard domestic courier to Tier-2 cities takes 3-5 business days. Express options are available for 48-hour delivery to most reachable locations."
  },
  {
    q: "Is there an option for Cash on Delivery (COD)?",
    a: "We currently provide COD services for our verified B2B e-commerce fulfillment partners across India."
  },
  {
    q: "How do you ensure the safety of fragile household items?",
    a: "We use three-layer high-density bubble wrap, corrugated sheets, and specialized wooden crates for high-fragility items like glassware and electronics."
  }
];

export default function DomesticCourier() {
  return (
    <div className="bg-white">
      <Meta 
        title="Domestic Relocation & Courier - SOBO Logistics" 
        description="Reliable domestic cargo and relocation services across India. Next-day delivery options and secure household items transit."
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
              National Network
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              Domestic <br/><span className="text-brand-gold">Solutions.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              From local documents to interstate relocation, our domestic infrastructure ensures your assets move across India with safety, speed, and absolute reliability.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex gap-4"
            >
               <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Request National Quote</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1580674684081-7619685891d8?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="Domestic Courier" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/20 rounded-full blur-[80px]"></div>
          </motion.div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Bharat Integrated.<br/><span className="text-brand-gold">Delivery Perfected.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed font-display">
                   <p>
                     India's diverse geography demands a logistics partner that is both deep-rooted and technologically advanced. SOBO Logistics provides an integrated domestic network that covers every major city and remote township from Kashmir to Kanyakumari.
                   </p>
                   <p>
                     Whether you are a family moving to a new city or a business expanding its domestic distribution, we offer the same level of architectural precision to national shipments as we do to international ones. Our domestic vertical leverages multi-modal transit (Air, Rail, and Road) to find the most efficient path for your goods.
                   </p>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-black/5">
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-4xl italic">30+</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-brand-black leading-tight">States & UTs Covered</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-4xl italic">24h</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-brand-black leading-tight">Next-Day Metro Goal</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-4xl italic">GPS</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-brand-black leading-tight">Live Fleet Telemetry</div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Domestic Network" />
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Verticals */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-brand-gold font-bold uppercase tracking-[.6em] text-[10px] block mb-4">Dedicated Solutions</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">National Logistics <br/>Capability.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Metro Express', icon: <Navigation className="w-8 h-8" />, desc: 'Specialized 24-48 hour delivery circuits between major Tier-1 metropolitan cities.' },
                { title: 'Smart PackRelo', icon: <Box className="w-8 h-8" />, desc: 'End-to-end household and corporate relocation with professional packing.' },
                { title: 'E-com Fulfillment', icon: <Map className="w-8 h-8" />, desc: 'Last-mile delivery and warehousing for digital brands across the country.' },
                { title: 'Surface Cargo', icon: <Truck className="w-8 h-8" />, desc: 'Cost-effective heavy cargo transport via our dedicated truck and rail network.' }
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
              <img src="https://images.unsplash.com/photo-1594156360434-629ee942c14c?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Transit Management" />
              <div className="absolute top-0 right-0 p-8 bg-brand-gold rounded-full -translate-x-1/2 translate-y-1/2 animate-bounce hidden md:block">
                 <Truck className="w-8 h-8 text-brand-black" />
              </div>
           </div>
           <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">The National <br/>Transit Chain.</h2>
              <div className="space-y-10">
                 {[
                   { step: '01', title: 'Tactical Extraction', desc: 'Precise doorstep collection using our local fleet. Assets are tagged with regional routing identifiers.' },
                   { step: '02', title: 'Hub Integration', desc: 'Processing through our automated sorting facilities located in Delhi, Mumbai, Bangalore, and Kolkata.' },
                   { step: '03', title: 'The Long Haul', desc: 'Secure transit via air-express or our high-speed road network, utilizing GPS-tracked containers for maximum safety.' },
                   { step: '04', title: 'Local Deployment', desc: 'Last-mile coordination through our hyper-local delivery hubs, ensuring a personal and professional final drop-off.' }
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
            <h2 className="text-4xl font-bold mb-4 font-display italic tracking-tight text-brand-black">National Intelligence FAQ</h2>
            <p className="text-brand-muted italic font-medium uppercase text-[10px] tracking-[.3em]">Operational insights for intra-India transit</p>
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
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Deliver Performance <br/>Across India.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Experience the speed of a global logistics network within the borders of India.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">National Speed Quote</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Support Desk</Link>
            </div>
          </div>
          <div className="absolute -inset-10 opacity-5 blur-3xl scale-150">
             <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" alt="Texture BG" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
