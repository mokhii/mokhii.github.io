import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10 dark:supports-[backdrop-filter]:bg-slate-900/60 dark:bg-slate-900/80 dark:border-white/10">
      <div className="section flex items-center justify-between py-4">
        <div className="text-right">
          <h1 className="text-2xl sm:text-3xl font-bold text-gold">امیرحسین مختاری</h1>
          <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base">مهندس صنایع | برنامه‌نویس بک‌اند</p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#about" className="text-slate-600 dark:text-white/80 hover:text-gold transition-colors">درباره من</a>
            <a href="#skills" className="text-slate-600 dark:text-white/80 hover:text-gold transition-colors">مهارت‌ها</a>
            <a href="#projects" className="text-slate-600 dark:text-white/80 hover:text-gold transition-colors">پروژه‌ها</a>
            <a href="#contact" className="text-slate-600 dark:text-white/80 hover:text-gold transition-colors">تماس</a>
          </nav>
          <button
            aria-label={isDark ? "روشن" : "تاریک"}
            onClick={() => setIsDark((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 hover:bg-white text-gold transition dark:border-white/10 dark:bg-slate-800/70 dark:hover:bg-slate-700/70"
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
