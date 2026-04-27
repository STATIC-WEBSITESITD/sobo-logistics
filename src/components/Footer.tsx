import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../constants';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-8 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
            <Logo className="w-30 bg-white p-3 rounded-lg" />
            <p className="text-brand-muted text-xs font-black leading-relaxed uppercase tracking-[.2em] italic">
              SOBO Logistics is your reliable partner for global courier, personal cargo, and premium distribution handling services. Delivering trust worldwide since 2012.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all accent-glow">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all accent-glow">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all accent-glow">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] uppercase font-black tracking-[.4em] text-brand-gold">Operations</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-black uppercase tracking-widest text-brand-muted">
              <li><Link to={ROUTES.HOME} className="hover:text-brand-gold transition-colors">Strategic Home</Link></li>
              <li><Link to={ROUTES.ABOUT} className="hover:text-brand-gold transition-colors">Corporate Identity</Link></li>
              <li><Link to={ROUTES.SERVICES.ROOT} className="hover:text-brand-gold transition-colors">Service Protocols</Link></li>
              <li><Link to={ROUTES.TRACKING} className="hover:text-brand-gold transition-colors">Live Asset Tracking</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-brand-gold transition-colors">Communication HQ</Link></li>
              <li><Link to={ROUTES.DOCUMENTS} className="hover:text-brand-gold transition-colors">Required Artifacts</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] uppercase font-black tracking-[.4em] text-brand-gold">Service Hub</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-black uppercase tracking-widest text-brand-muted">
              <li><Link to={ROUTES.SERVICES.INTERNATIONAL} className="hover:text-brand-gold transition-colors">International Courier</Link></li>
              <li><Link to={ROUTES.SERVICES.AIR_FREIGHT} className="hover:text-brand-gold transition-colors">Medicine Dispatch</Link></li>
              <li><Link to={ROUTES.SERVICES.DGR} className="hover:text-brand-gold transition-colors">Excess Luggage</Link></li>
              <li><Link to={ROUTES.SERVICES.COMMERCIAL} className="hover:text-brand-gold transition-colors">Enterprise Cargo</Link></li>
              <li><Link to={ROUTES.SERVICES.DOCUMENTS} className="hover:text-brand-gold transition-colors">Passport & Documents</Link></li>
              <li><Link to={ROUTES.SERVICES.DOMESTIC} className="hover:text-brand-gold transition-colors">Domestic Relocation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] uppercase font-black tracking-[.4em] text-brand-gold">Global Presence</h4>
            <ul className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-widest text-brand-muted">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="leading-relaxed italic">{CONTACT_INFO.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="hover:text-brand-gold transition-colors">{CONTACT_INFO.PHONE}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="hover:text-brand-gold transition-colors text-brand-gold lowercase italic">{CONTACT_INFO.EMAIL}</a>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace('+', '')}`} target="_blank" rel="noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">WhatsApp 24/7 Portal</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[.3em] text-white/30">
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-gold">Privacy Protocol</a>
            <a href="#" className="hover:text-brand-gold">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold">Careers</a>
          </div>
          <p className="italic">© {new Date().getFullYear()} SOBO LOGISTICS. Precision Engineering for Global Connectivity.</p>
        </div>
      </div>
      
      {/* WhatsApp FAB */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace('+', '')}`} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 gold-gradient text-white p-5 rounded-full shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:scale-110 transition-transform active:scale-95 accent-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
