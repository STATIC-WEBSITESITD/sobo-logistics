import React from 'react';
import { motion } from 'motion/react';
import { FileText, HelpCircle, ChevronDown, CheckCircle2, Info, AlertOctagon } from 'lucide-react';
import Meta from '../components/Meta';

const faqs = [
  {
    q: "What documents are required for international courier from India?",
    a: "For individual shipments, you need an ID proof (Aadhar/Passport) and Address proof. for B2B/Commercial shipments, IEC (Import Export Code), GST Certificate, and Commercial Invoice are mandatory."
  },
  {
    q: "Do you handle DGR (Dangerous Goods) shipments?",
    a: "Yes, SOBO Logistics is certified to handle DGR goods. We require MSDS (Material Safety Data Sheet) and specific packaging compliance certificate before pickup."
  },
  {
    q: "What is the typical delivery time for international shipments?",
    a: "Express shipments take 3-5 business days. Economy options take 7-10 days depending on the destination and customs clearance speed."
  },
  {
    q: "Can I track my B2B cargo in real-time?",
    a: "Absolutely. Every shipment is assigned a unique tracking ID at the time of booking, which provides step-by-step visibility through our portal."
  }
];

export default function Documents() {
  return (
    <div className="bg-white pb-20">
      <Meta 
        title="Documents Required & FAQs" 
        description="Complete list of documents required for international and domestic logistics. B2B documentation guide and frequently asked questions for SOBO Logistics."
      />
      
      {/* Hero */}
      <section className="bg-brand-cream border-b border-brand-black/5 py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-gold font-bold uppercase tracking-[.4em] text-[10px] mb-4 block">Shipping Protocols</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif leading-none italic">Documentation Guide</h1>
          <p className="text-brand-muted text-xl max-w-2xl mx-auto leading-relaxed">
            Ensuring your shipments move without delays. Read our detailed guide on mandatory paperwork and compliance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Documents */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
               <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold italic">Mandatory Paperwork</h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-brand-cream rounded-3xl border border-brand-black/5">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-brand-gold" /> Individual (B2C) Shipments
              </h3>
              <ul className="space-y-3">
                {['KYC Documents (Aadhar Card / Passport)', 'Original Invoice with value', 'Packing List (if multiple items)', 'Sender Identity Proof'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-brand-cream rounded-3xl border border-brand-black/5">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-brand-black uppercase tracking-tight">
                <AlertOctagon className="w-4 h-4 text-brand-gold" /> Commercial (B2B) Shipments
              </h3>
              <ul className="space-y-3">
                {['IEC (Import Export Code) Copy', 'GST Registration Certificate', 'Commercial Invoice (SDF/EDF form)', 'Packing List with HSN Codes', 'SLI (Shipper Letter of Instruction)', 'Authorised Dealer (AD) Code'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-black uppercase tracking-tighter">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: FAQs */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
               <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold italic">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-brand-black/5 rounded-2xl overflow-hidden cursor-pointer">
                <summary className="p-6 bg-white hover:bg-brand-cream transition-colors list-none flex justify-between items-center">
                  <span className="font-bold text-brand-black pr-4">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-brand-gold transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-6 bg-brand-cream/50 text-brand-muted text-sm leading-relaxed border-t border-brand-black/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-8">
         <div className="bg-brand-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <h2 className="text-4xl font-bold mb-6 font-serif tracking-tight">Still have questions?</h2>
            <p className="text-brand-muted mb-10 max-w-xl mx-auto">Our logistics consultants are ready to assist you with complex documentation and B2B custom clearance queries.</p>
            <div className="flex justify-center gap-6">
              <button className="gold-gradient text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-xl accent-glow">Call Logistics Expert</button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
         </div>
      </section>
    </div>
  );
}
