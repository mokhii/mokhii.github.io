import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="section flex items-center justify-between py-4">
        <div className="text-right">
          <h1 className="text-2xl sm:text-3xl font-bold text-gold">امیرحسین مختاری</h1>
          <p className="text-white/70 text-sm sm:text-base">مهندس صنایع | برنامه‌نویس بک‌اند</p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#about" className="text-white/80 hover:text-gold transition-colors">درباره من</a>
            <a href="#skills" className="text-white/80 hover:text-gold transition-colors">مهارت‌ها</a>
            <a href="#projects" className="text-white/80 hover:text-gold transition-colors">پروژه‌ها</a>
            <a href="#contact" className="text-white/80 hover:text-gold transition-colors">تماس</a>
          </nav>
          <button
            aria-label={isDark ? "روشن" : "تاریک"}
            onClick={() => setIsDark((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800/70 hover:bg-slate-700/70 text-gold transition"
          >
            {isDark ? (
              <span>☾</span>
            ) : (
              <span>☀</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
