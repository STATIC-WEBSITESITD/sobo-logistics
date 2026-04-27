import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, User, Globe, Truck, Package, FileText, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ROUTES, CONTACT_INFO } from '../constants';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: 'International Courier', href: ROUTES.SERVICES.INTERNATIONAL, icon: <Globe className="w-4 h-4" /> },
    { name: 'Air Freight', href: ROUTES.SERVICES.AIR_FREIGHT, icon: <Truck className="w-4 h-4" /> },
    { name: 'DGR Goods Handling', href: ROUTES.SERVICES.DGR, icon: <Package className="w-4 h-4" /> },
    { name: 'Commercial Shipments', href: ROUTES.SERVICES.COMMERCIAL, icon: <Truck className="w-4 h-4" /> },
    { name: 'Documents Handling', href: ROUTES.SERVICES.DOCUMENTS, icon: <FileText className="w-4 h-4" /> },
    { name: 'Domestic Courier', href: ROUTES.SERVICES.DOMESTIC, icon: <Truck className="w-4 h-4" /> },
  ];

  const loginOptions = [
    { name: 'Admin Login', href: ROUTES.LOGIN.ADMIN, icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Customer Login', href: ROUTES.LOGIN.CUSTOMER, icon: <User className="w-4 h-4" /> },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Mail className="w-3.5 h-3.5" /> {CONTACT_INFO.EMAIL}
            </a>
            <a href={`tel:${CONTACT_INFO.PHONE}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Phone className="w-3.5 h-3.5" /> {CONTACT_INFO.PHONE}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-brand-gold">
             <span>Premium Logistics & Supply Chain Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="glass-header">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <Link to={ROUTES.HOME} className="flex-shrink-0">
            <Logo className="h-14" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-brand-black">
            <Link to={ROUTES.ABOUT} className="hover:text-brand-gold transition-colors">About</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer uppercase">
                Services <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 bg-white border border-brand-black/5 rounded-xl dropdown-shadow overflow-hidden z-50 shadow-2xl"
                  >
                    <div className="py-2">
                      {services.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-brand-gold/5 text-brand-black hover:text-brand-gold transition-colors text-[10px] font-black uppercase"
                        >
                          <span className="text-brand-gold">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to={ROUTES.TRACKING} className="hover:text-brand-gold transition-colors">Tracking</Link>
            <Link to={ROUTES.DOCUMENTS} className="hover:text-brand-gold transition-colors">Documents</Link>
            <Link to={ROUTES.CONTACT} className="hover:text-brand-gold transition-colors whitespace-nowrap">Contact Us</Link>

            <div className="h-4 w-[1px] bg-brand-black/10 mx-1"></div>

            {/* Login Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('login')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer uppercase">
                Login <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'login' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-brand-black/5 rounded-xl dropdown-shadow overflow-hidden z-50 shadow-2xl"
                  >
                    <div className="py-2">
                      {loginOptions.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-brand-gold/5 text-brand-black hover:text-brand-gold transition-colors text-[10px] font-black uppercase"
                        >
                          <span className="text-brand-gold">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to={ROUTES.QUOTE}
              className="gold-gradient text-white px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-[.1em] shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-black hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-brand-black/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-black">
                <Link to={ROUTES.ABOUT} onClick={() => setIsMenuOpen(false)}>About</Link>
                <div className="flex flex-col gap-2 pl-4 border-l-2 border-brand-gold/20">
                  <span className="text-[11px] text-brand-gold">Services</span>
                  {services.map(s => (
                    <Link key={s.name} to={s.href} className="py-1" onClick={() => setIsMenuOpen(false)}>{s.name}</Link>
                  ))}
                </div>
                <Link to={ROUTES.TRACKING} onClick={() => setIsMenuOpen(false)}>Tracking</Link>
                <Link to={ROUTES.CONTACT} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                <div className="flex flex-col gap-2 pt-4 border-t border-brand-black/5">
                  <Link to={ROUTES.LOGIN.CUSTOMER} className="py-2" onClick={() => setIsMenuOpen(false)}>Customer Login</Link>
                  <Link to={ROUTES.QUOTE} className="gold-gradient text-white text-center py-4 rounded-xl font-black mt-2 shadow-xl" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
