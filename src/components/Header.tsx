export default function Header() {
  return (
    <header className="bg-slate-800 p-6 text-center shadow-md">
      <h1 className="text-3xl font-bold text-gold mb-2">امیرحسین مختاری</h1>
      <p className="text-white/80">مهندس صنایع | برنامه‌نویس بک‌اند</p>
      <nav className="mt-4 space-x-4 rtl:space-x-reverse">
        <a href="#about" className="text-gold hover:underline">درباره من</a>
        <a href="#skills" className="text-gold hover:underline">مهارت‌ها</a>
        <a href="#projects" className="text-gold hover:underline">پروژه‌ها</a>
        <a href="#contact" className="text-gold hover:underline">تماس</a>
      </nav>
    </header>
  );
}
