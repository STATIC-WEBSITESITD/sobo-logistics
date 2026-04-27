import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Settings, 
  AlertTriangle, 
  Briefcase,
  Plane,
  FileText,
  Truck,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { ROUTES } from '../constants';
import Meta from '../components/Meta';

const servicesList = [
  {
    id: 'international',
    title: 'International Courier',
    icon: <Globe className="w-10 h-10" />,
    desc: 'Door-to-door global express delivery for individuals and businesses. Perfect for gifts, documents, and personal parcels sent worldwide.',
    img: 'https://images.unsplash.com/photo-1574271143505-590291c10d32?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.INTERNATIONAL,
    features: ['Personal Gift Clearance', 'Live Global Tracking', 'Door-to-Door Pickup', 'Express Priority']
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    icon: <Plane className="w-10 h-10" />,
    desc: 'Priority air cargo and freight services for heavy and commercial shipments. Global air-express connectivity with guaranteed transit windows.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.AIR_FREIGHT,
    features: ['Cargo Consolidation', 'Door-to-Airport', 'Airport-to-Airport', 'Express Freight']
  },
  {
    id: 'dgr',
    title: 'DGR Goods Handling',
    icon: <AlertTriangle className="w-10 h-10" />,
    desc: 'IATA-certified handling of dangerous and hazardous materials. Specialized transit solutions for chemicals, electronics, and hazardous cargo.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.DGR,
    features: ['IATA Certified', 'UN Packaging', 'Regulatory Compliance', 'Safety First']
  },
  {
    id: 'commercial',
    title: 'Commercial Shipments',
    icon: <Briefcase className="w-10 h-10" />,
    desc: 'Bulk export/import support for MSMEs and corporate houses. End-to-end supply chain orchestration and vendor coordination.',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.COMMERCIAL,
    features: ['B2B Logistics API', 'Bulk Warehousing', 'Customs Expertise', 'Strategic Distribution']
  },
  {
    id: 'documents',
    title: 'Documents Handling',
    icon: <FileText className="w-10 h-10" />,
    desc: 'Secure and confidential handling for your most important legal, business, and academic documents. Express global delivery for time-sensitive paperwork.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.DOCUMENTS,
    features: ['Secure Custody', 'Tamper-Proof Pack', 'Confidential Handling', 'Priority Dispatch']
  },
  {
    id: 'domestic',
    title: 'Domestic Courier',
    icon: <Truck className="w-10 h-10" />,
    desc: 'Wide-reaching domestic network ensuring next-day delivery across major cities. Reliable domestic cargo and relocation services across India.',
    img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200',
    path: ROUTES.SERVICES.DOMESTIC,
    features: ['Next-Day Metro', 'Secure Relocation', 'Real-time GPS', 'Doorstep Pickup']
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white pb-32">
      <Meta 
        title="Comprehensive Logistics Services" 
        description="Air freight, International courier, and DGR handling services. SOBO Logistics offers end-to-end B2B supply chain solutions with verified security."
      />
      
      {/* Header */}
      <section className="bg-brand-cream border-b border-brand-black/5 py-32 px-8 text-center overflow-hidden relative">
         <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 italic tracking-tighter text-brand-black font-display">Scale. <span className="text-brand-gold">Speed.</span> Security.</h1>
            <p className="text-brand-muted text-xl max-w-2xl mx-auto leading-relaxed italic font-medium">
                Explore our range of premium logistics services tailored for global personal delivery and mission-critical enterprise cargo.
            </p>
         </div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-8 mt-32 space-y-40">
         {servicesList.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
               {/* Content */}
               <div className="flex-1 space-y-10">
                  <div className="w-16 h-16 bg-white border border-brand-black/5 rounded-xl flex items-center justify-center text-brand-gold shadow-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-brand-black tracking-tight leading-none italic font-display ">{service.title}</h2>
                  <p className="text-brand-muted text-lg leading-relaxed font-medium italic">
                    SOBO Logistics provides reliable infrastructure for {service.title.toLowerCase()}. Our dedicated teams ensure your items are handled with absolute care.
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-6">
                     {service.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-black">
                           <div className="w-1.5 h-1.5 bg-brand-gold rounded-full accent-glow"></div> {f}
                        </li>
                     ))}
                  </ul>
                  
                  <div className="pt-6">
                    <Link 
                      to={service.path} 
                      className="gold-gradient text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[.3em] transition-all shadow-xl accent-glow inline-flex items-center gap-3"
                    >
                      View Service Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>

               {/* Image */}
               <div className="flex-1 relative group w-full">
                  <div className="absolute -inset-4 bg-brand-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="relative z-10 w-full aspect-square object-cover rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-brand-black/5"
                  />
               </div>
            </motion.div>
         ))}
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-brand-cream/30 mt-40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-display italic tracking-tight text-brand-black">Service FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "What documents are required for international shipping?",
                a: "Typically, you need an ID proof, address proof, and a commercial invoice (for business items). We guide you through the specific requirements for each destination."
              },
              {
                q: "Do you provide insurance for fragile items?",
                a: "Yes, we offer transit insurance options for fragile and high-value items to give you peace of mind during transit."
              },
              {
                q: "How can I track my shipment?",
                a: "Every shipment is assigned a unique tracking ID. You can enter this on our Tracking Portal to get real-time updates."
              },
              {
                q: "Do you handle custom furniture or bulk items?",
                a: "Yes, our Air Freight and Commercial divisions handle heavy and bulky cargo, including furniture and industrial machinery."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-brand-black/5 rounded-2xl overflow-hidden cursor-pointer bg-white">
                <summary className="p-6 hover:bg-brand-cream transition-colors list-none flex justify-between items-center">
                  <span className="font-bold text-brand-black pr-4">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-brand-gold transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-6 text-brand-muted text-sm leading-relaxed border-t border-brand-black/5 italic font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="mt-40 border-t border-brand-black/5 bg-brand-cream/50 py-32">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="text-center space-y-6">
               <div className="text-brand-gold font-black text-[10px] uppercase tracking-[.4em] mb-4">Integrity</div>
               <h3 className="text-3xl font-bold tracking-tighter italic font-display">100% Secure</h3>
               <p className="text-brand-muted text-sm font-medium uppercase tracking-tighter max-w-xs mx-auto">Advanced end-to-end security protocols for every personal or business shipment.</p>
            </div>
            <div className="text-center space-y-6">
               <div className="text-brand-gold font-black text-[10px] uppercase tracking-[.4em] mb-4">Velocity</div>
               <h3 className="text-3xl font-bold tracking-tighter italic font-display">Express Network</h3>
               <p className="text-brand-muted text-sm font-medium uppercase tracking-tighter max-w-xs mx-auto">Global connectivity with guaranteed transit times across 150+ hub locations.</p>
            </div>
            <div className="text-center space-y-6">
               <div className="text-brand-gold font-black text-[10px] uppercase tracking-[.4em] mb-4">Expertise</div>
               <h3 className="text-3xl font-bold tracking-tighter italic font-display">Global Delivery</h3>
               <p className="text-brand-muted text-sm font-medium uppercase tracking-tighter max-w-xs mx-auto">Connecting individuals and enterprises with seamless international distribution.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
