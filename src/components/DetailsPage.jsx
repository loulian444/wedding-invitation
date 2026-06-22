import React from 'react';
import { motion } from 'framer-motion';

export default function DetailsPage() {
  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">
      <div className="text-6xl text-[#E6C687] font-serif my-4">囍</div>

      <div className="text-center tracking-[0.3em] text-sm text-[#E6C687]/90 flex flex-col gap-2">
        <p className="font-light text-xs opacity-80">诚邀您共同见证</p>
        <div className="flex justify-center items-center gap-3 my-1">
          <span>儿子: 柳永清</span>
          <span className="text-xs bg-[#E6C687] text-[#7A0616] px-1 rounded-full text-center font-serif">囍</span>
          <span>儿媳: 吴祖欣</span>
        </div>
        <p className="text-lg text-[#E6C687] font-medium tracking-[0.4em] mt-2">结婚喜宴</p>
      </div>

      <div className="w-full max-w-xs bg-black/10 border border-[#E6C687]/20 rounded-xl p-5 text-center backdrop-blur-sm shadow-inner my-4">
        <p className="text-lg font-medium tracking-wide text-[#E6C687]">2026年8月2日</p>
        <p className="text-xs opacity-70 mt-0.5 tracking-wider">星期日 (Sunday)</p>
        <div className="w-12 h-[1px] bg-[#E6C687]/30 mx-auto my-2.5" />
        <p className="text-xs tracking-widest opacity-90">农历六月二十</p>
        <p className="text-lg font-semibold mt-1 text-[#E6C687]">18:00</p>
        <div className="w-full h-[1px] bg-[#E6C687]/10 my-3" />
        <p className="text-xs tracking-[0.2em] opacity-60 mb-0.5">囍宴 Northern Gala</p>
        <p className="text-[11px] opacity-70 leading-relaxed">
          138-18 Northern Blvd, Flushing, NY 11354
        </p>
      </div>

      <div className="w-full max-w-sm flex justify-center gap-12 text-sm font-serif writing-mode-vertical tracking-[0.3em] leading-loose opacity-90 py-4 border-t border-b border-[#E6C687]/10 my-4 h-48">
        <div className="flex flex-col items-center">
          <span className="text-[10px] opacity-50 mb-2 tracking-normal">承慈命</span>
          <span>吴</span><span>吴</span><span>郑</span><span>艺</span><span>世</span><span>明</span><span>贤</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] opacity-50 mb-2 tracking-normal">承慈严</span>
          <span>柳</span><span>柳</span><span>郑</span><span>宝</span><span>翠</span><span>枝</span><span>文</span>
        </div>
      </div>

      <div className="text-center text-[10px] opacity-40 tracking-[0.3em] w-full">
        敬备喜筵 · 恭候光临
      </div>
    </div>
  );
}