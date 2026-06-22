import React from 'react';

export default function PhotoPage2() {
  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">
      <div className="text-4xl text-[#E6C687] font-serif opacity-80 pt-4">囍</div>

      <div className="w-full flex flex-col items-center justify-center gap-6 my-auto">
        <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-[#E6C687]/40 shadow-xl p-1 bg-[#7A0616]">
          {/* Photo Placeholder */}
          <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center text-[#E6C687]/40 text-[10px] tracking-widest">
            [ PHOTO 1 ]
          </div>
        </div>

        <div className="flex gap-4 text-xs font-serif writing-mode-vertical tracking-[0.3em] text-[#E6C687]/80 h-28 my-2">
          <div>往后余生 相知相伴</div>
          <div>喜乐有分享 共度日月长</div>
        </div>

        <div className="w-full max-w-xs border border-[#E6C687]/20 p-1 bg-black/10 shadow-lg">
          {/* Photo Placeholder */}
          <div className="w-full aspect-[4/3] bg-black/20 flex items-center justify-center text-[#E6C687]/40 text-[10px] tracking-widest">
            [ PHOTO 2 ]
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] opacity-40 tracking-[0.3em] w-full">
        敬备喜筵 · 恭候光临
      </div>
    </div>
  );
}