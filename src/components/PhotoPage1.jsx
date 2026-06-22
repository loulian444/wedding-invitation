import React from 'react';
import { motion } from 'framer-motion';

export default function PhotoPage1() {
  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">
      
      <div className="text-center text-[11px] tracking-[0.2em] opacity-80 leading-relaxed font-light font-serif text-[#E6C687] pt-4">
        <p>从此，漫漫余生有你托付</p>
        <p className="mt-1 opacity-60 text-[10px]">岁月静好与君语，细水长流与君同</p>
      </div>

      <div className="w-full px-2 my-6">
        <div className="border border-[#E6C687]/30 p-1 bg-black/5 shadow-xl rounded-sm">
          {/* Photo Placeholder */}
          <div className="w-full aspect-[4/3] bg-black/20 flex items-center justify-center text-[#E6C687]/40 text-[10px] tracking-widest">
            [ TRADITIONAL PHOTO ]
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-around px-4 mb-4">
        <div className="text-5xl font-serif text-[#E6C687] opacity-90 flex flex-col items-center">
          <span>囍</span>
          <span className="text-[9px] tracking-[0.1em] opacity-40 font-sans mt-2">WEDDING</span>
        </div>

        <div className="flex gap-4 text-xs font-serif writing-mode-vertical tracking-[0.25em] text-[#E6C687]/90 leading-loose h-32">
          <div>谨以白头之约</div>
          <div>书向鸿笺</div>
          <div>好将红叶之盟</div>
          <div>载明鸳谱</div>
        </div>
      </div>

      <div className="text-center text-[10px] opacity-40 tracking-[0.3em] w-full">
        敬备喜筵 · 恭候光临
      </div>
    </div>
  );
}