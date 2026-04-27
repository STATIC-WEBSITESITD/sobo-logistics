import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Truck, BarChart3, Package, ChevronDown, Building2, Factory, PieChart, Users } from 'lucide-react';
import Meta from '../../components/Meta';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Do you offer credit terms for corporate clients?",
    a: "Yes, for regular B2B partners and corporate accounts, we offer customized credit cycles and monthly billing options based on shipment volumes."
  },
  {
    q: "Can you manage factory-to-port logistics?",
    a: "Absolutely. Our commercial division specializes in multi-modal logistics including factory pickup, inland transit, and coordination with port authorities."
  },
  {
    q: "How do you handle Customs clearance for large commercial exports?",
    a: "We provide comprehensive customs orchestration, including HSN code classification, duty assessment, and digital filing of shipping bills."
  },
  {
    q: "Can you help with vendor coordination?",
    a: "Yes, we act as a logistics bridge, picking up goods from multiple vendors across India and consolidating them for a single international shipment."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise in Textiles, Spare Parts, Handicrafts, Electronics, and E-commerce exports."
  }
];

export default function CommercialShipments() {
  return (
    <div className="bg-white">
      <Meta 
        title="Commercial Shipments & B2B Logistics - SOBO Logistics" 
        description="End-to-end supply chain support for MSMEs and corporate houses. Bulk export/import, vendor coordination, and priority customs handling."
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
              Enterprise Cargo
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-display italic leading-tight"
            >
              Commercial <br/><span className="text-brand-gold">Shipments.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-xl max-w-xl leading-relaxed italic mb-10"
            >
              Professional logistics architecture for your business. We orchestrate complex supply chains to keep your commercial operations moving globally.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex gap-4"
            >
               <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Request B2B Quote</Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-brand-black/5 grayscale hover:grayscale-0 transition-all duration-700" alt="Commercial Shipments" />
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">Commerce Without Boundaries.<br/><span className="text-brand-gold">Logistics Without Interruption.</span></h2>
                <div className="space-y-6 text-brand-muted text-lg italic font-medium leading-relaxed font-display">
                   <p>
                     For modern enterprises, logistics is the backbone of competitiveness. SOBO Logistics provides the structural support your business needs to expand its reach. We specialize in B2B distributions, handling everything from sample shipments to high-volume commercial container loads.
                   </p>
                   <p>
                     Our commercial division is built specifically to address the pain points of MSMEs and industrial houses. We don't just move freight; we provide strategic insights into customs codes, duty drawbacks, and multi-modal transit options that optimize both time and capital.
                   </p>
                </div>
                <div className="flex gap-12 pt-8 border-t border-brand-black/5">
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">B2B</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Preferred Partner</div>
                   </div>
                   <div className="space-y-2">
                      <div className="text-brand-gold font-display font-bold text-5xl">99.9%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-black">Manifest Accuracy</div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-3xl border-2 border-brand-black/5 overflow-hidden" alt="Business Logistics" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-gold/90 rounded-full blur-[60px]"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pillars */}
      <section className="py-32 px-8 bg-brand-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <span className="text-brand-gold font-bold uppercase tracking-[.6em] text-[10px] block mb-4">Strategic Assets</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter leading-none">B2B Distribution <br/>Ecosystem.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Vendor Bridge', icon: <Users className="w-8 h-8" />, desc: 'Coordination between your suppliers and production units for timely extraction.' },
                { title: 'Bulk Storage', icon: <Building2 className="w-8 h-8" />, desc: 'Strategic warehousing at key ports to allow for flexible dispatch schedules.' },
                { title: 'Market Insight', icon: <PieChart className="w-8 h-8" />, desc: 'Data-driven analytics on your supply chain velocity and spending.' },
                { title: 'Industry Core', icon: <Factory className="w-8 h-8" />, desc: 'Specialized containers and trucks for industrial machinery and raw materials.' }
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

      {/* Deployment Workflow */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl" alt="Distribution Flow" />
           </div>
           <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter text-brand-black leading-none">B2B Logistics <br/>Workflow.</h2>
              <div className="space-y-10">
                 {[
                   { step: '01', title: 'Tactical Onboarding', desc: 'Integration of your supply chain data with our distribution model. We assign dedicated account managers for your business.' },
                   { step: '02', title: 'Asset Consolidation', desc: 'Picking up from multiple vendors across India and consolidating them into efficient commercial consignments.' },
                   { step: '03', title: 'Priority Dispatch', desc: 'Direct boarding onto commercial freighters or ocean liners with master manifest control and real-time GPS telemetry.' },
                   { step: '04', title: 'Institutional Delivery', desc: 'Direct drop-off at your international warehouses or distributor networks with full document proof of delivery.' }
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

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 font-display italic tracking-tight text-brand-black">Commercial Intelligence FAQ</h2>
            <p className="text-brand-muted italic font-medium uppercase text-[10px] tracking-[.3em]">B2B Logistics excellence and support</p>
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

      {/* CTA section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-brand-black rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display italic tracking-tighter">Scale Your Business <br/>Operations.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto italic font-medium">Join 500+ MSMEs who have transformed their international supply chains with our enterprise logistics.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl accent-glow">Global B2B Inquiry</Link>
              <Link to={ROUTES.CONTACT} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all">Support Desk</Link>
            </div>
          </div>
          <div className="absolute -inset-10 opacity-10 blur-3xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
