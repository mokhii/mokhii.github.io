export default function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gold mb-4">تماس</h2>
      <ul className="space-y-2 text-white/80">
        <li>ایمیل: <a href="mailto:ie.mokhtari@yahoo.com" className="underline decoration-gold/40 underline-offset-4">ie.mokhtari@yahoo.com</a></li>
        <li>موبایل: <a href="tel:09197854335" className="hover:text-gold transition-colors">09197854335</a></li>
        <li>تلفن: <a href="tel:02155730957" className="hover:text-gold transition-colors">02155730957</a></li>
        <li>آدرس: تهران، خیابان قزوین، خیابان عبیدزاکانی</li>
      </ul>
    </div>
  );
}
