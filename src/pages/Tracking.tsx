import React, { useState } from 'react';
import { Search, Package, MapPin, Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Meta from '../components/Meta';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const awb = params.get('awb');
    if (awb) {
      setTrackingNumber(awb);
      // Directly simulate for auto-track
      setIsSearching(true);
      setTimeout(() => {
        setResult({
          id: awb,
          status: 'IN TRANSIT',
          origin: 'Mumbai Hub, India',
          destination: 'Heathrow, London, UK',
          estimatedDelivery: 'Oct 28, 2026',
          steps: [
            { status: 'Shipment Created', location: 'Mumbai, India', time: 'Oct 24, 09:00 AM', completed: true },
            { status: 'Processed at Hub', location: 'Mumbai Central Hub', time: 'Oct 24, 04:30 PM', completed: true },
            { status: 'Arrived at Export Gateway', location: 'Mumbai International Airport', time: 'Oct 25, 02:15 AM', completed: true },
            { status: 'In Transit', location: 'International Air Transit', time: 'Oct 25, 08:30 AM', completed: false },
          ]
        });
        setIsSearching(false);
      }, 1500);
    }
  }, []);

  const handleTrack = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!trackingNumber) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        id: trackingNumber,
        status: 'IN TRANSIT',
        origin: 'Mumbai Hub, India',
        destination: 'Heathrow, London, UK',
        estimatedDelivery: 'Oct 28, 2026',
        steps: [
          { status: 'Shipment Created', location: 'Mumbai, India', time: 'Oct 24, 09:00 AM', completed: true },
          { status: 'Processed at Hub', location: 'Mumbai Central Hub', time: 'Oct 24, 04:30 PM', completed: true },
          { status: 'Arrived at Export Gateway', location: 'Mumbai International Airport', time: 'Oct 25, 02:15 AM', completed: true },
          { status: 'In Transit', location: 'International Air Transit', time: 'Oct 25, 08:30 AM', completed: false },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Meta 
        title="Track Shipment - Live AWB Tracking" 
        description="Real-time shipment tracking for SOBO Logistics. Track your international courier, cargo, and documents using your AWB number."
      />
      
      {/* Hero Section */}
      <section className="bg-brand-cream py-24 px-8 border-b border-brand-black/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter font-display"
          >
            Track Asset
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted mb-12 text-lg max-w-xl mx-auto leading-relaxed italic"
          >
            Enter your AWB or Reference protocol to query real-time telemetry from our global distribution network.
          </motion.p>

          <form onSubmit={handleTrack} className="relative max-w-2xl mx-auto glass p-2 rounded-2xl shadow-xl">
            <input 
              type="text" 
              placeholder="e.g. SOB88291029"
              className="w-full h-16 pl-6 pr-40 bg-white text-brand-black rounded-xl text-sm font-black uppercase tracking-widest focus:outline-none placeholder:text-brand-muted/40"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button 
              type="submit"
              disabled={isSearching}
              className="absolute right-4 top-4 bottom-4 gold-gradient px-8 rounded-xl font-black uppercase text-[10px] tracking-widest text-white hover:opacity-90 transition-all disabled:opacity-70 flex items-center gap-2 accent-glow cursor-pointer"
            >
              {isSearching ? <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" /> : <Search className="w-4 h-4" />}
              <span>{isSearching ? '...' : 'Track'}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto py-24 px-8">
        {!result && !isSearching && (
          <div className="text-center py-20 bg-brand-cream/30 rounded-[3rem] border border-brand-black/5">
            <Package className="w-16 h-16 text-brand-gold opacity-20 mx-auto mb-8" />
            <h3 className="text-xl font-bold mb-3 tracking-wide italic font-display">Awaiting Instruction</h3>
            <p className="text-brand-muted uppercase text-[10px] font-black tracking-widest leading-relaxed">Your mission critical shipments are monitored 24/7.<br/>Input your details to start the query.</p>
          </div>
        )}

        {isSearching && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="flex gap-2">
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-brand-gold rounded-full"></motion.div>
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-brand-gold rounded-full"></motion.div>
              <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-brand-gold rounded-full"></motion.div>
            </div>
            <p className="text-brand-gold font-black uppercase text-[10px] tracking-[.4em] animate-pulse">Synchronizing Uplink...</p>
          </div>
        )}

        {result && !isSearching && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Summary Card */}
            <div className="bg-white border border-brand-black/5 rounded-[3rem] p-10 grid grid-cols-1 md:grid-cols-3 gap-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full gold-gradient"></div>
              <div className="md:col-span-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-cream border border-brand-black/5 p-4 rounded-xl text-brand-gold shadow-sm">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-muted mb-1">Asset ID</p>
                    <p className="text-2xl font-bold text-brand-black tracking-widest">{trackingNumber}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-muted mb-2">Origin Port</p>
                    <p className="font-bold flex items-center gap-2 text-brand-black italic font-display"><MapPin className="w-3.5 h-3.5 text-brand-gold" /> {result.origin}</p>
                  </div>
                  <div className="hidden md:block w-[1px] bg-brand-black/10"></div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-muted mb-2">Terminal Target</p>
                    <p className="font-bold flex items-center gap-2 text-brand-black italic font-display"><MapPin className="w-3.5 h-3.5 text-brand-gold" /> {result.destination}</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black p-10 rounded-[2rem] text-white space-y-6 shadow-2xl">
                <p className="text-[10px] uppercase font-black tracking-widest text-brand-gold">Current Status</p>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-gold animate-pulse" />
                  <p className="text-3xl font-black text-brand-gold tracking-tighter uppercase italic">{result.status}</p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Prediction ETA</p>
                  <p className="font-bold text-white tracking-wide font-display italic">{result.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-brand-cream/30 border border-brand-black/5 rounded-[3rem] p-12">
              <h4 className="text-[10px] uppercase font-black tracking-[.4em] mb-12 flex items-center gap-3 text-brand-black">
                <Clock className="w-4 h-4 text-brand-gold" /> Operational Logging
              </h4>
              <div className="relative pl-10 space-y-16 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-black/5">
                {result.steps.map((step: any, idx: number) => (
                  <div key={idx} className="relative group">
                    <div className={`absolute -left-[41px] w-6 h-6 rounded-md border-[3px] border-white ${step.completed ? 'gold-gradient shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'bg-white'} transition-all`} />
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h5 className={`font-bold text-lg leading-none mb-2 font-display italic ${step.completed ? 'text-brand-black' : 'text-brand-muted'}`}>
                          {step.status}
                        </h5>
                        <p className="text-xs font-black uppercase tracking-widest text-brand-muted/60">{step.location}</p>
                      </div>
                      <div className="md:text-right">
                        <p className="text-xs font-black text-brand-gold tracking-widest">{step.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Support Section */}
      <section className="bg-brand-black py-12 text-center">
        <p className="text-brand-muted uppercase text-[10px] font-black tracking-widest flex items-center justify-center gap-3">
          <AlertCircle className="w-4 h-4 text-brand-gold" />
          Shipment data can take up to 24 hours to sync.
        </p>
      </section>
    </div>
  );
}
