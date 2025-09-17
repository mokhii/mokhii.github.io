export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gold mb-4">پروژه‌ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 ring-1 ring-white/10 shadow-card">
          <div className="h-36 rounded-lg bg-[linear-gradient(110deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.15),_rgba(255,255,255,0.05))] bg-[length:200%_100%] animate-shimmer" />
          <h3 className="mt-4 text-xl font-semibold text-white">نمونه پروژه</h3>
          <p className="text-white/70 text-sm mt-1">توضیح مختصر درباره پروژه و تکنولوژی‌های استفاده‌شده.</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 ring-1 ring-white/10 shadow-card">
          <div className="h-36 rounded-lg bg-[linear-gradient(110deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.15),_rgba(255,255,255,0.05))] bg-[length:200%_100%] animate-shimmer" />
          <h3 className="mt-4 text-xl font-semibold text-white">نمونه پروژه ۲</h3>
          <p className="text-white/70 text-sm mt-1">در صورت نیاز لینک گیت‌هاب/لایو اضافه می‌شود.</p>
        </div>
      </div>
    </div>
  );
}
