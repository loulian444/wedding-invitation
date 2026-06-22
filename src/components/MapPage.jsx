import React from 'react';

export default function MapPage() {
  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">
      <div className="text-center tracking-[0.4em] text-xs text-[#E6C687]/80 font-serif pt-4">
        — 婚宴地点 —
      </div>

      <div className="w-full flex flex-col items-center gap-6 my-auto">
        
        <div className="w-full max-w-xs border border-[#E6C687]/20 p-1 bg-black/10 shadow-xl">
          {/* Photo Placeholder */}
          <div className="w-full aspect-[3/4] bg-black/20 flex items-center justify-center text-[#E6C687]/40 text-[10px] tracking-widest">
            [ BRIDAL GOWN ]
          </div>
        </div>

        <div className="w-full max-w-xs rounded-lg overflow-hidden border border-[#E6C687]/30 shadow-md">
          <a 
            href="https://maps.google.com/?q=138-18+Northern+Blvd,+Flushing,+NY+11354"
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group"
          >
            {/* Map Placeholder */}
            <div className="w-full aspect-[2/1] bg-black/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="bg-[#7A0616]/90 text-[#E6C687] text-[10px] tracking-widest px-3 py-1.5 rounded-full border border-[#E6C687]/30 shadow-md z-10">
                点击打开地图导航
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center tracking-wider text-xs text-[#E6C687]/90 flex flex-col gap-1 mb-2">
        <p className="text-base font-serif font-medium text-[#E6C687]">囍宴 Northern Gala</p>
        <p className="opacity-70">138-18 Northern Blvd, Flushing, NY 11354</p>
        <p className="text-[10px] opacity-40 tracking-[0.2em] mt-4">囍 敬备喜筵 · 恭候光临 囍</p>
      </div>
    </div>
  );
}