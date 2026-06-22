import React from 'react';
import { motion } from 'framer-motion';

export default function CoverPage({ onNext }) {
  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col justify-between items-center py-16 px-8 relative">
      <div className="absolute inset-0 opacity-10 bg-black/20 mix-blend-overlay pointer-events-none" />

      <div className="z-10 tracking-[0.5em] text-xs text-[#E6C687]/70 font-light">
        · 婚礼邀请 ·
      </div>

      <div className="z-10 flex gap-12 text-2xl tracking-[0.4em] font-serif writing-mode-vertical text-[#E6C687]">
        <div className="flex flex-col items-center">
          <span className="text-xs opacity-60 mb-3 tracking-normal">儿子:</span>
          <span>柳</span><span>永</span><span>清</span>
        </div>
        <div className="flex flex-col items-center mt-12">
          <span className="text-xs opacity-60 mb-3 tracking-normal">儿媳:</span>
          <span>吴</span><span>祖</span><span>欣</span>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center gap-4">
        <motion.button 
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-[#E6C687] text-[#7A0616] flex items-center justify-center font-serif text-2xl shadow-xl border border-[#7A0616] ring-4 ring-[#E6C687]/30 cursor-pointer"
        >
          囍
        </motion.button>
        <p className="text-[10px] tracking-[0.2em] animate-pulse opacity-60">点击开启 / CLICK TO OPEN</p>
      </div>

      <div className="z-10 text-center tracking-[0.4em] text-xs font-light opacity-80">
        INVITATION
      </div>
    </div>
  );
}