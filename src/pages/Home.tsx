import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Truck, 
  Package, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  ChevronDown,
  Plane,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import Meta from '../components/Meta';

const b2cServices = [
  {
    title: 'Personal Worldwide Courier',
    desc: 'Send parcels to family and friends abroad with ease. Hassle-free shipping for gifts and personal items.',
    icon: <Globe className="w-8 h-8" />,
    path: ROUTES.SERVICES.INTERNATIONAL
  },
  {
    title: 'Gift & Festival Dispatch',
    desc: 'Seasonal sweets, gifts, and traditional items sent across the globe with express priority.',
    icon: <Truck className="w-8 h-8" />,
    path: ROUTES.SERVICES.INTERNATIONAL
  },
  {
    title: 'Excess Luggage Express',
    desc: 'Affordable shipping for heavy personal belongings and extra suitcases when traveling or relocating.',
    icon: <Package className="w-8 h-8" />,
    path: ROUTES.SERVICES.AIR_FREIGHT
  },
  {
    title: 'University Admissions',
    desc: 'Priority handling for students sending transcripts and documents to international universities.',
    icon: <FileText className="w-8 h-8" />,
    path: ROUTES.SERVICES.INTERNATIONAL
  },
  {
    title: 'Medicine Courier',
    desc: 'Critical medicine delivery with proper documentation and temperature-controlled transit options.',
    icon: <ShieldCheck className="w-8 h-8" />,
    path: ROUTES.SERVICES.DGR
  },
  {
    title: 'Domestic Relocation',
    desc: 'Relocating within India? Our domestic cargo network ensures your household items reach safely.',
    icon: <Truck className="w-8 h-8" />,
    path: ROUTES.SERVICES.DOMESTIC
  }
];

const features = [
  {
    title: 'Global Connectivity',
    desc: 'Strategic partnerships with leading global carriers to provide worldwide reach.',
    icon: <Globe className="w-6 h-6 text-brand-gold" />
  },
  {
    title: 'Real-time Tracking',
    desc: 'Stay informed with our advanced GPS-integrated tracking system for every shipment.',
    icon: <BarChart3 className="w-6 h-6 text-brand-gold" />
  },
  {
    title: 'Safe & Secure',
    desc: 'Multi-layer security and professional handling to ensure shipment integrity.',
    icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />
  },
  {
    title: '24/7 Support',
    desc: 'Dedicated logistics experts available round the clock to assist your queries.',
    icon: <Clock className="w-6 h-6 text-brand-gold" />
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Meta 
        title="Premium International Courier & Personal Cargo" 
        description="SOBO Logistics provides reliable international courier, personal cargo, and excess luggage shipping. Trusted by individuals across India for global gift and medicine delivery."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-[95vh] flex items-center overflow-hidden bg-brand-cream border-b border-brand-black/5">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=2000" 
            alt="International Courier Hub"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-[.5em] mb-8"
              >
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></div>
                Premium Personal & Enterprise Logistics
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-[4rem] lg:text-[5.5rem] font-bold text-brand-black leading-[0.9] tracking-tighter mb-10 font-display uppercase"
              >
                Experts in<br />
                <span className="text-brand-gold italic lowercase">international</span><br />
                Shipping & Courier.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-brand-muted text-xl md:text-2xl mb-12 max-w-xl leading-relaxed italic font-medium"
              >
                Reliable worldwide courier and cargo solutions for your personal needs. We deliver trust, one package at a time.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link to={ROUTES.QUOTE} className="gold-gradient text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[.3em] transition-all shadow-2xl accent-glow hover:-translate-y-1 text-center">
                  Instant Quote
                </Link>
                <Link to={ROUTES.TRACKING} className="bg-white border border-brand-black/5 text-brand-black px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[.3em] hover:bg-brand-cream transition-all text-center">
                  Tracking Portal
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-brand-black/10 pt-12">
                <div>
                  <div className="text-brand-gold font-bold text-4xl font-display tracking-tighter italic">150+</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-brand-black mt-2">Active Hubs</div>
                </div>
                <div>
                  <div className="text-brand-gold font-bold text-4xl font-display tracking-tighter italic">24/7</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-brand-black mt-2">Help Desk</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-brand-gold font-bold text-4xl font-display tracking-tighter italic">100%</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-brand-black mt-2">Safe Transit</div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative lg:mt-0 mt-12"
            >
              <div className="absolute -inset-10 bg-brand-gold/10 blur-[120px] rounded-full"></div>
              <div className="relative bg-white/90 backdrop-blur-3xl p-10 md:p-14 rounded-[3rem] border border-brand-black/5 shadow-3xl">
                <h2 className="text-3xl font-display font-bold mb-8 text-brand-black italic">Track Asset</h2>
                <p className="text-brand-muted text-sm mb-10 italic font-medium">Enter your Global AWB Reference to monitor transit telemetry in real-time.</p>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const val = (e.currentTarget.elements.namedItem('awb') as HTMLInputElement).value;
                    if (val) window.location.href = `${ROUTES.TRACKING}?awb=${val}`;
                  }}
                  className="space-y-6"
                >
                  <div className="relative">
                    <input 
                      name="awb"
                      required
                      type="text" 
                      placeholder="AWB NUMBER" 
                      className="w-full bg-brand-cream border border-brand-black/5 rounded-2xl px-8 py-6 text-brand-black text-sm font-black uppercase tracking-[.2em] focus:outline-none focus:ring-2 focus:ring-brand-gold/20" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full gold-gradient text-white py-6 rounded-2xl font-black uppercase text-[10px] tracking-[.3em] shadow-xl accent-glow hover:opacity-90 transition-all flex items-center justify-center gap-3"
                  >
                    Track Shipment Status
                  </button>
                </form>

                <div className="mt-12 flex items-center justify-center gap-6 opacity-40 grayscale">
                  <span className="text-[10px] font-black tracking-widest">UPS</span>
                  <span className="text-[10px] font-black tracking-widest">FEDEX</span>
                  <span className="text-[10px] font-black tracking-widest">DHL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[40%] h-full hidden lg:block overflow-hidden">
           <img 
             src="https://artifact.dev/api/v1/artifacts/fdaxfrxxdfmopvzgel2ym7/22ae3155-2357-41a4-969c-9c7198a2f4da/logo.png" 
             alt="SOBO Logo Background" 
             className="absolute top-1/2 -right-1/4 -translate-y-1/2 w-full opacity-[0.03] rotate-12 scale-150"
           />
        </div>
      </section>

      {/* B2C Services Section */}
      <section className="section-padding px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <p className="text-brand-gold font-bold uppercase tracking-[.5em] text-[10px] mb-4">Personal Logistics</p>
              <h2 className="text-5xl md:text-7xl font-bold text-brand-black tracking-tighter font-display leading-none">Global Reach<br/>For You.</h2>
            </div>
            <div className="hidden md:block pb-2">
               <Link to={ROUTES.SERVICES.ROOT} className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">All Protocols →</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2cServices.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white rounded-[3rem] border border-brand-black/5 hover:border-brand-gold/30 shadow-sm hover:shadow-3xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold mb-10 group-hover:scale-110 transition-transform shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-black tracking-tight italic font-display leading-none">{service.title}</h3>
                <p className="text-brand-muted text-sm mb-10 leading-relaxed font-medium italic">
                  {service.desc}
                </p>
                <Link to={service.path} className="inline-flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-gold hover:translate-x-1 transition-transform">
                  Deploy Shipment
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Focus Banner */}
      <section className="bg-brand-black py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-none italic">Reliable Global <br/>Infrastructure.</h2>
              <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed font-medium italic">
                SOBO Logistics is your gateway to global trade and personal connectivity. We provide seamless door-to-door transit for every package.
              </p>
              <div className="space-y-6">
                 {['Worldwide Express Delivery', 'End-to-End Tracking Logs', 'Expert Parcel Handling', 'Customs Support Included'].map(f => (
                   <div key={f} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[.3em] text-white/80">
                      <div className="w-2 h-2 bg-brand-gold rounded-full accent-glow"></div>
                      {f}
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="bg-brand-gold/10 absolute inset-0 blur-[100px] rounded-full scale-150"></div>
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl relative z-10 border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" alt="B2B Supply Chain" />
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-bold uppercase tracking-[.5em] text-[10px] mb-4">Knowledge Base</p>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black tracking-tight font-display italic">Common Queries.</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What is the typical transit time for international shipments?",
                a: "Express shipments generally reach their destination in 3-5 business days, while economy options can take up to 10-12 business days."
              },
              {
                q: "Can I ship medicines internationally?",
                a: "Yes, we specialize in medicine courier services. Requires proper prescription and documentation as per destination country laws."
              },
              {
                q: "Are there any size or weight restrictions?",
                a: "We handle everything from small documents to multi-ton commercial cargo. Specific aircraft or local carrier limits may apply."
              },
              {
                q: "Do you offer doorstep pickup?",
                a: "Yes, SOBO Logistics provides convenient doorstep pickup services for both domestic and international shipments."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <details className="group border border-brand-black/5 rounded-3xl overflow-hidden cursor-pointer bg-brand-cream/20">
                  <summary className="p-8 hover:bg-brand-cream/40 transition-colors list-none flex justify-between items-center">
                    <span className="font-bold text-lg text-brand-black pr-4 font-display italic">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-brand-gold transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-8 pb-8 text-brand-muted text-base leading-relaxed italic font-medium">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-32 px-8 bg-brand-cream border-y border-brand-black/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display italic">Global Intelligence Tool</h2>
            <p className="text-brand-muted text-lg mb-12">Universal parcel monitoring across all SOBO and affiliate networks.</p>
            <div className="relative glass p-2 rounded-2xl max-w-2xl mx-auto shadow-xl">
               <input type="text" placeholder="AWB REFERENCE ID" className="w-full bg-white rounded-xl px-6 py-5 text-brand-black text-sm font-black uppercase tracking-widest focus:outline-none" />
               <Link 
                 to={ROUTES.TRACKING}
                 className="absolute right-4 top-4 bottom-4 gold-gradient text-white px-8 rounded-lg flex items-center justify-center font-black uppercase text-[10px] tracking-widest"
               >
                 Track
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
