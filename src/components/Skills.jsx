const skills = [
  {
    title: 'Front-end',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Responsive design'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'MongoDB', 'API REST', 'Authentification', 'CRUD'],
  },
  {
    title: 'Qualité web',
    items: ['Accessibilité', 'SEO', 'Lighthouse', 'WAVE', 'DevTools', 'Tests et audits web'],
  },
  {
    title: 'Gestion de projet',
    items: ['Git', 'GitHub', 'Kanban', 'Veille', 'Spécifications techniques'],
  },
]

function Skills() {
  return (
    <section id="competences" className="section section--alt">
      <div className="section__content">
        <p className="section__eyebrow">Compétences</p>

        <h2>
          Mes compétences en développement web front-end et back-end
        </h2>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article className="skill-card" key={skillGroup.title}>
              <h3>{skillGroup.title}</h3>

              <ul>
                {skillGroup.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills