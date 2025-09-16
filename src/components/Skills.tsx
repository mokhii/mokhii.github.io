export default function Skills() {
  const skills = ["Python, ", "Django, ", "MySQL, ", "Docker, ", "Git, ", "Linux/Unix, ", "Jira, "];
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold text-gold mb-4">مهارت‌ها</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 rounded bg-slate-700 text-gold">
          {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
