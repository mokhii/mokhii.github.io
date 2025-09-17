export default function Skills() {
  const skills = ["Python, ", "Django, ", "MySQL, ", "Docker, ", "Git, ", "Linux/Unix, ", "Jira, "];
  return (
    <div>
      <h2 className="text-3xl font-bold text-gold mb-4">مهارت‌ها</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
