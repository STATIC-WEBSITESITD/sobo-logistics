import React from 'react';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        This is the provided logo URL. 
        In a real app, you would download this and put it in /public 
      */}
      <img 
        src="/assets/imgs/logo.png" 
        alt="SOBO Logistics Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
