import React from 'react';

export default function CalendarPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // August 1st, 2026 starts on a Saturday, so we need 5 empty slots padding upfront
  const blankDays = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="h-full w-full bg-[#7A0616] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">
      <div className="text-center tracking-[0.4em] text-xs text-[#E6C687]/80 font-serif pt-4">
        — 婚宴时间 —
      </div>

      <div className="w-full max-w-xs bg-black/10 border border-[#E6C687]/20 rounded-2xl p-6 backdrop-blur-sm shadow-xl my-auto">
        {/* Month Header */}
        <div className="flex items-baseline justify-center gap-2 mb-4 text-[#E6C687]">
          <span className="text-3xl font-light font-serif">08</span>
          <span className="opacity-40 text-xs">/</span>
          <span className="text-xs tracking-wider opacity-70">02</span>
          <span className="text-xs font-light tracking-widest ml-2 opacity-50">-2026-</span>
        </div>

        {/* Calendar Weekday Names header row */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] opacity-40 font-light mb-2">
          <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span className="text-red-400">日</span>
        </div>

        {/* Days Layout Grid */}
        <div className="grid grid-cols-7 gap-y-3 text-center text-xs font-light text-[#E6C687]/90">
          {blankDays.map((b) => <span key={`blank-${b}`}></span>)}
          {days.map((day) => {
            const isWeddingDay = day === 2;
            return (
              <div key={day} className="relative flex items-center justify-center h-6 w-6 mx-auto">
                {isWeddingDay ? (
                  <>
                    <span className="absolute text-red-500 font-bold scale-150 animate-pulse">❤️</span>
                    <span className="relative z-10 text-white font-semibold text-[10px] mt-0.5">{day}</span>
                  </>
                ) : (
                  <span>{day}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-xs tracking-wide text-[#E6C687]/90 leading-relaxed">
        <p className="font-medium text-sm">2026年8月2日 星期日</p>
        <p className="text-[11px] opacity-60 mt-0.5">农历 六月二十 18:00</p>
      </div>

      <div className="text-center text-[10px] opacity-40 tracking-[0.3em] w-full">
        敬备喜筵 · 恭候光临
      </div>
    </div>
  );
}